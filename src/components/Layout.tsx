import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Layout: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="app-layout">
      <header className="navbar">
        <nav>
          <Link to="/" className="logo">My Blog</Link>
          <div className="nav-links">
            <Link to="/blog">Blog</Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin">Admin</Link>
                <button onClick={handleLogout} className="logout-button">
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;