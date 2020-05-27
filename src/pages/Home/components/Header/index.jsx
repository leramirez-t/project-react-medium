import React from 'react';

// External Packages
import { Link } from 'react-router-dom'


// Css
import '../normalize.css';
import '../style.css';

export default function Header() {
  return (
    <div >
      <header class="contenedor header-site">
        <div class="logo">Medium</div>
        <nav class="nav-home">
          <Link to="/">Subscribe</Link>
          <Link to="/">Write</Link>
          <Link to="/auth/login">Sign in</Link>
        </nav>
      </header>
    </div>
  )
}
