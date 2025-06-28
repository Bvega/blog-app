import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login process
    login();
    // Redirect to admin page after login
    navigate('/admin');
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <p>Click the button below to simulate logging in.</p>
      <button onClick={handleLogin} className="login-button">
        Log In
      </button>
    </div>
  );
};

export default Login;