import React from 'react'
import { Link } from 'react-router-dom'

// Css
import './NavBar.css';

export default function NavBar() {
  return (
    <div class="row d-flex justify-content-center px-3 m-0">
      <div class="navBar">
        <Link to="/">HOME</Link>
        <a href="https://coronavirus.medium.com/">CORONAVIRUS BLOG</a>
        <a href="https://onezero.medium.com/">ONEZERO</a>
        <a href="https://elemental.medium.com">ELEMENTAL</a>
        <a href="https://gen.medium.com/">GEN</a>
        <a href="https://zora.medium.com">ZORA</a>
        <a href="https://forge.medium.com">FORGE</a>
        <a href="https://humanparts.medium.com">HUMAN PARTS</a>
        <a href="https://marker.medium.com/">MARKER</a>
        <a href="https://level.medium.com/">LEVEL</a>
        <a href="https://heated.medium.com/">HEATED</a>
        <a href="https://medium.com/topics">MORE</a>
      </div>
    </div>
  )
}
