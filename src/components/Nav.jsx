import React from 'react';
import { Link } from 'react-router-dom';  // นำเข้า Link จาก react-router-dom

function Nav() {
  return (
    <div className="topnav">
      <div className="logo">Thailand</div>
      <div className="search-container">
        <input type="text" placeholder="Search.." />
        <button type="submit">🔍</button>
      </div>
      <div className="nav-links">
        <Link className="active" to="/Home">Home</Link>  {/* ใช้ Link แทน a */}
        <Link to="/News">News</Link>  {/* ใช้ Link แทน a */}
        <Link to="/Contact">Contact</Link>  {/* ใช้ Link แทน a */}
        <Link to="/About">About</Link>  {/* ใช้ Link แทน a */}
      </div>
    </div>
  );
}

export default Nav;
