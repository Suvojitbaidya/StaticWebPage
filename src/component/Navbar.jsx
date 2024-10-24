// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Optional: You can use this for additional styling

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <NavLink 
            to="/" 
            style={styles.link} 
            activeStyle={styles.activeLink} 
            end
          >
            Home
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink 
            to="/about" 
            style={styles.link} 
            activeStyle={styles.activeLink}
          >
            About
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink 
            to="/contact" 
            style={styles.link} 
            activeStyle={styles.activeLink}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Optional inline styles (you can also use an external CSS file)
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  activeLink: {
    fontWeight: 'bold',
    borderBottom: '2px solid white',
  },
};

export default Navbar;
