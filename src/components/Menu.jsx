import React from 'react'
import './styles.css'

function Menu() {
  return (
      <ul className='menu-list'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
  )
}

export default Menu
