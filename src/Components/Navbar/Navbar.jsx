import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header">
      <div className="links">
        <div className="logo">
          <img src="../assets/logo.png" alt="" width="60px" />
        </div>
        <div className="link-list">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/about/jinish">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
