import React from 'react'
import { Link } from 'react-router-dom'

// Css
import './NavBar.css';

export default function NavBar() {
  return (
    <div class="row d-flex justify-content-center px-3 m-0">
      <div class="navBar">
        <Link to="/">Home</Link>
        <a href="https://coronavirus.medium.com/">Coronavirus Blog</a>
        <a href="https://onezero.medium.com/">ONEZERO</a>
        <a href="https://elemental.medium.com">Elemental</a>
        <a href="https://gen.medium.com/">Gen</a>
        <a href="https://zora.medium.com">Zora</a>
        <a href="https://forge.medium.com">Forge</a>
        <a href="https://humanparts.medium.com">Human Parts</a>
        <a href="https://marker.medium.com/">Marker</a>
        <a href="https://level.medium.com/">Level</a>
        <a href="https://heated.medium.com/">Heated</a>
        <a href="https://medium.com/topics">More</a>
      </div>
    </div>
  )
}
