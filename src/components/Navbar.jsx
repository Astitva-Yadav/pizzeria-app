import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, User, LogOut, Pizza, Clock } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand-section">
          <Link to="/" className="nav-brand">
            <Pizza className="brand-img" size={40} />
            <span>Pizzeria</span>
          </Link>
          <div className="nav-links">
            <Link to="/order" className="nav-link">Order Pizza</Link>
            <Link to="/build" className="nav-link">Build Ur Pizza</Link>
          </div>
        </div>

        <div className="nav-actions">
          {user ? (
            <div className="user-section">
              <span className="greeting">
                <User size={18} /> {user.username}
              </span>
              <Link to="/history" className="btn-icon" title="Order History">
                <Clock size={20} />
              </Link>
              <button onClick={handleLogout} className="btn-icon" title="Logout">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </div>
          )}

          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={20} />
            <span>Shopping cart</span>
            {cartItemCount > 0 && (
              <div className="cart-info">
                <span className="cart-count">{cartItemCount}</span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
