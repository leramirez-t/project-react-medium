import React from 'react';

// Components
import HeaderHome from './components/Header'
import BodyHome from './components/Body'
import FooterHome from './components/Footer'

// Css
import './components/normalize.css';
import './components/style.css';

export default function Home() {
  return (
    <div >
      <HeaderHome />
      <br/>
      <BodyHome />
      <br/>
      <FooterHome />
    </div>
  )
}
    