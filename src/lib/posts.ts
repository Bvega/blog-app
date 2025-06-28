// Define the structure of a blog post
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

// Mock data - in a real app, this would come from a database
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    content: `React is a powerful JavaScript library for building user interfaces. 
    In this post, we'll explore the basics of React and how to get started with 
    your first React application. We'll cover components, props, state, and more!`,
    author: "John Doe",
    date: "2024-01-15"
  },
  {
    id: 2,
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    content: `React Hooks revolutionized how we write React components. 
    This post dives deep into useState, useEffect, and custom hooks. 
    Learn how to manage state and side effects in functional components.`,
    author: "Jane Smith",
    date: "2024-01-20"
  },
  {
    id: 3,
    slug: "react-router-guide",
    title: "Complete Guide to React Router",
    content: `React Router is essential for building single-page applications. 
    This guide covers everything from basic routing to advanced patterns like 
    protected routes and dynamic routing. Perfect for building modern web apps!`,
    author: "Bob Johnson",
    date: "2024-01-25"
  },
  {
    id: 4,
    slug: "state-management-patterns",
    title: "State Management Patterns in React",
    content: `Managing state in React applications can be challenging. 
    This post explores different patterns including Context API, Redux, 
    and Zustand. Learn when to use each approach for optimal results.`,
    author: "Alice Williams",
    date: "2024-02-01"
  }
];

// Helper function to find a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};