import React from 'react';

function Nav() {
  return (
    <div className="topnav">
      <div className="logo">Thailand</div>
      <div className="search-container">
        <input type="text" placeholder="Search.." />
        <button type="submit">🔍</button>
      </div>
      <div className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Nav;
