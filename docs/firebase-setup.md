# Firebase Integration Setup for CodeCampus

This document explains how to set up and use Firebase services in the CodeCampus application.

## 🔥 Firebase Services Configured

- **Authentication** - User login/signup with email, Google, and GitHub
- **Firestore Database** - Real-time database for posts, problems, and user data
- **Analytics** - Track user interactions and app usage
- **Storage** - File uploads (ready for future use)

## 📁 File Structure

```
src/
├── lib/
│   ├── firebase.js          # Firebase configuration and initialization
│   ├── firebaseAuth.js      # Authentication functions
│   ├── firestore.js         # Database operations
│   └── analytics.js         # Analytics tracking functions
├── hooks/
│   └── useAuth.js           # React hook for authentication
└── utils/
    └── auth.js              # Unified auth utility (Supabase + Firebase)
```

## 🚀 Quick Start

### 1. Environment Configuration

Choose your authentication provider by setting the environment variable:

```bash
# In your .env.local file
VITE_AUTH_PROVIDER=firebase  # or 'supabase'
```

### 2. Using Firebase Authentication

```javascript
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from '../utils/auth';

// Email/Password Authentication
const handleEmailLogin = async (email, password) => {
  const { user, error } = await signInWithEmail(email, password);
  if (error) {
    console.error('Login failed:', error);
  } else {
    console.log('Logged in:', user);
  }
};

// Google Sign-In
const handleGoogleLogin = async () => {
  const { user, error } = await signInWithGoogle();
  if (error) {
    console.error('Google login failed:', error);
  }
};
```

### 3. Using the Auth Hook

```javascript
import useAuth from '../hooks/useAuth';

const MyComponent = () => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <div>Welcome, {user.displayName}!</div>;
};
```

### 4. Firestore Database Operations

```javascript
import { createPost, getPosts, updatePost } from '../lib/firestore';

// Create a new forum post
const newPost = await createPost({
  title: 'My First Post',
  content: 'Hello CodeCampus!',
  author: user.uid,
  category: 'general'
});

// Get posts with filtering
const { posts, error } = await getPosts('technical-help', 10);

// Update a post
await updatePost(postId, { 
  likes: currentLikes + 1 
});
```

### 5. Analytics Tracking

```javascript
import { trackPageView, trackProblemSolved, trackForumInteraction } from '../lib/analytics';

// Track page views
trackPageView('Problems Page', 'Coding Problems');

// Track problem solving
trackProblemSolved('two-sum', 'easy', 180, 'javascript');

// Track forum interactions
trackForumInteraction('post_created', postId);
```

## 🔧 Configuration Details

### Authentication Providers

The app supports dual authentication systems:

1. **Firebase Auth** - Direct Firebase authentication
2. **Supabase Auth** - Your existing Supabase setup

Switch between them using the `VITE_AUTH_PROVIDER` environment variable.

### Firestore Collections

| Collection | Purpose | Fields |
|------------|---------|---------|
| `users` | User profiles | `id`, `email`, `displayName`, `createdAt` |
| `posts` | Forum posts | `title`, `content`, `author`, `category`, `likes` |
| `problems` | Coding problems | `title`, `difficulty`, `tags`, `description` |
| `submissions` | Code submissions | `userId`, `problemId`, `code`, `result` |
| `achievements` | User achievements | `userId`, `type`, `earnedAt` |

### Security Rules

Remember to configure Firestore security rules:

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Posts are readable by all authenticated users
    match /posts/{postId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == resource.data.author;
    }
    
    // Problems are readable by all authenticated users
    match /problems/{problemId} {
      allow read: if request.auth != null;
    }
  }
}
```

## 🛠️ Development Tips

1. **Environment Variables**: Use `.env.local` for local development
2. **Error Handling**: All Firebase functions return `{ data, error }` objects
3. **Real-time Updates**: Use `onSnapshot` listeners for real-time data
4. **Analytics**: Track user interactions to understand app usage
5. **Security**: Always validate data on both client and server side

## 📊 Analytics Events

The following events are automatically tracked:

- `page_view` - Page navigation
- `login` / `sign_up` - Authentication events
- `problem_solved` - Successful problem completion
- `code_submission` - Code submission attempts
- `forum_interaction` - Forum posts, likes, comments

## 🔐 Security Best Practices

1. **Never expose API keys** in client-side code for production
2. **Use Firestore Security Rules** to protect data
3. **Validate user permissions** before data operations
4. **Sanitize user input** before storing in database
5. **Use environment variables** for configuration

## 🚀 Next Steps

1. Configure Firebase project settings in the Firebase Console
2. Set up authentication providers (Google, GitHub)
3. Create Firestore database and set security rules
4. Enable Analytics in Firebase Console
5. Test authentication flow in development
6. Deploy with proper environment variables

For more information, refer to the [Firebase Documentation](https://firebase.google.com/docs).
