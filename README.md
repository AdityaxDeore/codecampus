# CodeCampus

A collaborative learning platform for computer science students, combining academic excellence with real-world coding experience.

## 🚀 Features

- **Interactive Learning** - Collaborative problem solving and peer code reviews
- **University Integration** - Seamless integration with academic curricula
- **Career Preparation** - Industry mentorship and job placement support
- **Project Showcase** - Portfolio building and skill tracking
- **Community Forums** - Knowledge sharing and discussion spaces

## 💻 Tech Stack

- **React 18** with Suspense and Code Splitting
- **Vite** for optimized builds and fast development
- **TailwindCSS** for responsive design
- **Firebase** for authentication and real-time features
- **Supabase** for database and backend services
- **Framer Motion** for smooth animations

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
codecampus/
├── src/
│   ├── components/     # Common UI components
│   ├── shared/        # Shared components and data
│   ├── pages/         # Page components
│   ├── lib/           # Firebase and Supabase setup
│   ├── utils/         # Helper functions
│   └── styles/        # Global styles and Tailwind
```

## 🔥 Performance

- Route-based code splitting for optimal loading
- Vendor chunk optimization
- Lazy-loaded components with Suspense
- Optimized bundle size with manual chunks

## 📄 License

MIT License - see LICENSE file for details
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

Project by - 
Aditya Deore
Ved Jadhav
Veerbhadra Mahant
Sharvil Patil