import React from 'react';
import headerImage from './header.webp'

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-overlay">
        <h1>Welcome to Thailand</h1>
        <p>The Land of Smiles</p>
      </div>
    </header>
  );
}

export default Header;
