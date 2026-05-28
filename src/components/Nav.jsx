import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  
  // Dynamic active link helper
  const isActive = (path) => {
    if (path === '/Home' && location.pathname === '/') return true;
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  return (
    <div className="topnav">
      <div className="logo">🇹🇭 Thailand Travel</div>
      <div className="nav-links">
        <Link className={isActive('/Home') ? 'active' : ''} to="/Home">Home</Link>
        <Link className={isActive('/News') ? 'active' : ''} to="/News">News</Link>
        <Link className={isActive('/Contact') ? 'active' : ''} to="/Contact">Contact</Link>
        <Link className={isActive('/About') ? 'active' : ''} to="/About">About</Link>
      </div>
    </div>
  );
}

export default Nav;
