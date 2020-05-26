import React from 'react';

// Css
import '../normalize.css';
import '../style.css';

export default function Footer() {
  return (
    <div >
      <footer class="contenedor">
        <div class="icono">
          <svg
            class="all-icono"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="14" cy="14" r="14" fill="green"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>World-class publications</p>
        </div>
        <div class="icono">
          <svg
            class="all-icono"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="14" cy="14" r="14" fill="green"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>Undiscovered voices.</p>
        </div>
        <div class="icono">
          <svg
            class="all-icono"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="14" cy="14" r="14" fill="green"></circle>
            <path d="M8 14.5l4.73 3.66 7.76-9.87" stroke="#fff" stroke-width="3"></path>
          </svg>
          <p>Topics you love.</p>
        </div>        
        <div class="icono">
          <p>All on Medium, all for you</p>
        </div>
      </footer>
    </div>
  )
}
