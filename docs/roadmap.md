# CodeCampus Production Roadmap

```mermaid
flowchart TD
  A(V1: Foundation) --> B(V1.1: Auth + Profiles)
  B --> C(V1.2: Workspaces + Docs)
  C --> D(V1.3: Problems + Submissions)
  D --> E(V1.4: Forums + Notifications)
  E --> F(V1.5: Leaderboards + Analytics)
  F --> G(V2: Realtime Collaboration)
  G --> H(V3: Cloud Code Runner + Sandbox)

  subgraph Stack
    S1[Firebase Auth/Firestore/Storage]
    S2[Edge Functions]
    S3[Realtime]
    S4[Judge0/Piston]
    S5[Vercel Frontend]
  end
```

## Milestones

- V1 Foundation
  - Project setup, envs, Firebase config, schema, security rules
  - Minimal UI wiring (login, profile fetch)

- V1.1 Auth + Profiles
  - Google + Azure AD OAuth
  - Domain enforcement -> college membership
  - Profile edit page

- V1.2 Workspaces + Docs
  - CRUD workspaces, docs
  - Auto-save + periodic versioning
  - RLS and access control (owner/college)

- V1.3 Problems + Submissions
  - Problems listing, detail
  - Code submission -> Edge Function -> Judge0
  - Store results, rate limit

- V1.4 Forums + Notifications
  - Threads/posts per college
  - Reactions, basic mentions
  - In-app notifications

- V1.5 Leaderboards + Analytics
  - Aggregates per college
  - Weekly snapshots

- V2 Realtime Collaboration
  - Presence, cursors
  - CRDT-based doc sync (Yjs)

- V3 Runner + Sandbox
  - Containerized runner (optional self-host)
  - Time/memory quotas
