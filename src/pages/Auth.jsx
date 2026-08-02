import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, LogIn } from 'lucide-react';
import './Auth.css';

const Auth = ({ isLogin = true }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (isLogin) {
      const res = login(username, password);
      if (res.success) {
        navigate('/');
      } else {
        setError(res.message);
      }
    } else {
      const res = register(username, password);
      if (res.success) {
        // auto login after register
        login(username, password);
        navigate('/');
      } else {
        setError(res.message);
      }
    }
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-container glass-panel">
        <div className="auth-header">
          {isLogin ? <LogIn size={40} className="auth-icon" /> : <UserPlus size={40} className="auth-icon" />}
          <h2 className="title-medium">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Login to manage your cart and orders.' : 'Sign up to start building your custom pizzas.'}
          </p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => navigate('/register')} className="auth-link">Register here</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => navigate('/login')} className="auth-link">Login here</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
