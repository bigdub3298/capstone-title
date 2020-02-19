import React from "react"
import { Link } from "gatsby"
import logo from "src/images/capstone-logo.png"
import "src/styles/Header.scss"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="capstone logo" class="logo" />
      </Link>
      <nav>
        <ul className="navbar">
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/team">Our Team</Link>
          </li>
          <li className="navbar__item">
            <Link to="/services">Services</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
