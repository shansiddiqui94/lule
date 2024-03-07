import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* Adding a link for external resources */}
        <li><a href="https://example.com">External Link</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;