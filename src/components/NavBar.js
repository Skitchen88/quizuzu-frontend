// src/components/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav style={{
      padding: '10px',
      background: '#eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/quiz-feed" style={{ marginRight: '15px' }}>Quizzes</Link>
        <Link to="/groups" style={{ marginRight: '15px' }}>Groups</Link>
      </div>

      <div>
        {user ? (
          <>
            <Link to="/profile" style={{ marginRight: '15px' }}>Profile</Link>
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#007bff',
                textDecoration: 'underline',
                cursor: 'pointer',
                padding: 0,
                font: 'inherit'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
