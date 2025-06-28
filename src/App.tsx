import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogIndex />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="login" element={<Login />} />
            <Route 
              path="admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;