import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
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
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;