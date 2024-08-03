import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);

  const navbarStyle = {
    position: 'fixed', // Keeps the navbar at the top of the screen
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    zIndex: 1000, // Ensures navbar stays above other content
  };

  const logoStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1em',
    padding: '0 15px',
  };

  const logoutButtonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 15px',
    cursor: 'pointer',
    fontSize: '1em',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Currency</div>
      <ul style={navLinksStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        {auth.user ? (
          <>
            <li>
              <Link to="/favorites" style={linkStyle}>
                Favorites
              </Link>
            </li>
            <li>
              <button onClick={logout} style={logoutButtonStyle}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" style={linkStyle}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
