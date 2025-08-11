-- Core tables
create table if not exists public.colleges (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  avatar_url text,
  bio text,
  college_id uuid references public.colleges(id),
  role text default 'student',
  created_at timestamptz not null default now()
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  college_id uuid not null references public.colleges(id) on delete cascade,
  role text default 'member',
  status text default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  college_id uuid references public.colleges(id) on delete set null,
  name text not null,
  visibility text default 'private',
  created_at timestamptz not null default now()
);

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  path text not null,
  language text,
  content text default '',
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

create table if not exists public.document_versions (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.documents(id) on delete cascade,
  version_no int not null,
  content text not null,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.problems (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description_md text not null,
  difficulty text not null,
  tags text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  problem_id uuid not null references public.problems(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  language text not null,
  code text not null,
  status text not null default 'queued',
  result_json jsonb default '{}',
  runtime_ms int,
  memory_kb int,
  created_at timestamptz not null default now()
);

create table if not exists public.forums_threads (
  id uuid primary key default gen_random_uuid(),
  college_id uuid not null references public.colleges(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  body_md text not null,
  tags text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.forums_posts (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.forums_threads(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  body_md text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  payload_json jsonb not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.memberships enable row level security;
alter table public.workspaces enable row level security;
alter table public.documents enable row level security;
alter table public.document_versions enable row level security;
alter table public.submissions enable row level security;
alter table public.forums_threads enable row level security;
alter table public.forums_posts enable row level security;

-- Policies
create policy "Profiles: read same college or self" on public.profiles for select
using (
  auth.uid() = id OR exists (
    select 1 from public.memberships m1
    join public.memberships m2 on m2.college_id = m1.college_id
    where m1.user_id = auth.uid() and m2.user_id = profiles.id and m1.status='active'
  )
);

create policy "Profiles: update self" on public.profiles for update using (auth.uid() = id);

create policy "Workspaces: owner or college if shared" on public.workspaces for select using (
  owner_id = auth.uid() OR (visibility = 'college' and exists (
    select 1 from public.memberships m where m.user_id = auth.uid() and m.college_id = workspaces.college_id and m.status='active'
  ))
);
create policy "Workspaces: insert by authenticated" on public.workspaces for insert with check (auth.uid() = owner_id);

create policy "Documents: workspace access" on public.documents for select using (
  exists (
    select 1 from public.workspaces w where w.id = documents.workspace_id and (
      w.owner_id = auth.uid() OR (w.visibility='college' and exists (
        select 1 from public.memberships m where m.user_id = auth.uid() and m.college_id = w.college_id and m.status='active'
      ))
    )
  )
);
create policy "Documents: edit by workspace owner" on public.documents for update using (
  exists (
    select 1 from public.workspaces w where w.id = documents.workspace_id and w.owner_id = auth.uid()
  )
);

create policy "Document Versions: read via document" on public.document_versions for select using (
  exists (select 1 from public.documents d join public.workspaces w on w.id=d.workspace_id where d.id = document_versions.document_id and (w.owner_id=auth.uid() or w.visibility='college'))
);

create policy "Submissions: read own" on public.submissions for select using (user_id = auth.uid());
create policy "Submissions: insert own" on public.submissions for insert with check (user_id = auth.uid());

create policy "Threads: read same college" on public.forums_threads for select using (
  exists (select 1 from public.memberships m where m.user_id=auth.uid() and m.college_id=forums_threads.college_id and m.status='active')
);
create policy "Threads: create" on public.forums_threads for insert with check (
  exists (select 1 from public.memberships m where m.user_id=auth.uid() and m.college_id=forums_threads.college_id and m.status='active')
);

create policy "Posts: read via thread college" on public.forums_posts for select using (
  exists (select 1 from public.forums_threads t join public.memberships m on m.college_id=t.college_id where t.id=forums_posts.thread_id and m.user_id=auth.uid() and m.status='active')
);
create policy "Posts: create if in same college" on public.forums_posts for insert with check (
  exists (select 1 from public.forums_threads t join public.memberships m on m.college_id=t.college_id where t.id=forums_posts.thread_id and m.user_id=auth.uid() and m.status='active')
);
