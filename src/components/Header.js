import React from "react"
import { Link } from "gatsby"
import logo from "src/images/capstone-logo.png"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="capstone logo" class="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
