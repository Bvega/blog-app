# Dynamic Blog Application

A modern blog application built with React, TypeScript, and React Router featuring dynamic routing, authentication, and protected routes.

## 🚀 Features

- **Dynamic Blog Routes**: Each blog post has its own dynamically generated page
- **Authentication System**: Simple client-side authentication using React Context
- **Protected Admin Area**: Admin dashboard only accessible to authenticated users
- **Responsive Design**: Mobile-friendly layout with modern CSS
- **Page Transitions**: Smooth animations between page navigation (using Framer Motion)
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Context API** - State management

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd blog-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout with navigation
│   └── ProtectedRoute.tsx  # Route guard component
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication context
├── lib/                # Utilities and data
│   └── posts.ts        # Mock blog post data
├── pages/              # Page components
│   ├── Admin.tsx       # Protected admin dashboard
│   ├── BlogIndex.tsx   # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post page
│   ├── Home.tsx        # Homepage
│   └── Login.tsx       # Login page
├── App.tsx             # Main app component with routes
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## 🎯 Usage

### Viewing Blog Posts
1. Navigate to the Blog section from the navigation menu
2. Click on any blog post title to view the full post
3. Use the "Back to Blog" link to return to the blog index

### Authentication
1. Click "Log In" in the navigation menu
2. Click the "Log In" button to simulate authentication
3. Once logged in, you'll see:
   - "Admin" link in the navigation
   - "Log Out" button
4. Access the protected Admin dashboard

### Protected Routes
- The `/admin` route is protected and requires authentication
- Unauthenticated users are redirected to the login page
- Authentication state is maintained during the session

## 🧪 Testing

Test the following features:
- [ ] Blog index displays all posts
- [ ] Clicking a post navigates to its dynamic page
- [ ] Invalid blog slugs show "Post not found" message
- [ ] Login/logout functionality works correctly
- [ ] Admin page redirects when not authenticated
- [ ] Admin page is accessible after login
- [ ] Page transitions are smooth

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔑 Key Learning Objectives

This project demonstrates:
- Dynamic routing with React Router v6
- URL parameters and route matching
- Context API for state management
- Protected route implementation
- TypeScript with React
- Modern CSS techniques
- Component composition patterns

## 🚀 Future Enhancements

- [ ] Add backend API integration
- [ ] Implement persistent authentication
- [ ] Add search functionality
- [ ] Create a comment system
- [ ] Support Markdown in blog posts
- [ ] Add categories and tags
- [ ] Implement dark mode
- [ ] Add unit tests

## 📄 License

This project is created for educational purposes as part of Lab 4.

## 🤝 Contributing

This is a lab project, but feel free to fork and enhance it for your own learning!

## 📞 Support

If you encounter any issues, please check the TUTORIAL.md file for detailed implementation instructions.