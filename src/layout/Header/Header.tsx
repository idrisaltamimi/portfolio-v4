import React, { useState } from "react"

// import logo from "../../assets/logo.svg"
import "./Header.scss"

export default function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <header>
      <a href="#home" aria-label="navigate to home section">
        {logo}
      </a>
      <button
        className="burger-logo"
        aria-label="burger icon"
        onClick={() => setToggleNavbar((prev) => !prev)}
      />
      <nav data-toggle-navbar={toggleNavbar}>
        <ul>
          <li>
            <a href="#portfolio" aria-label="navigate to portfolio section">
              portfolio
            </a>
          </li>
          <li>
            <a href="#about" aria-label="navigate to about section">
              about
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="navigate to contact section">
              contact
            </a>
          </li>
        </ul>
      </nav>
      {toggleNavbar && (
        <div
          className="navbar-overlay"
          aria-label="active navbar overlay"
          data-toggle-navbar={toggleNavbar}
          onClick={() => setToggleNavbar(false)}
        />
      )}
    </header>
  )
}

const logo = (
  <svg
    version="1.1"
    id="Layer_2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 747.29 688.57"
    fill="#fff"
    height={60}
  >
    <path
      d="M505.78,466.67c0,0-36.53,4.19-36.53-41.31c0-45.51,0-331.14,0-331.14s-37.52,15.01-78.2,41.11
        c-26.67,17.12-54.25,40.39-75.09,62.48C264,252.85,268,312.18,268,312.18h-72.95V151.62c0-10.83,1.92-21.6,5.96-31.64
        c3.41-8.47,8.45-16.94,15.56-19.98c-8-8.76-13.52-14.1-13.52-14.1s-54.29,28.76-63.71,83.05c-2.67,56.38-0.77,314.38-0.77,314.38
        s-1.23,50.95-21.81,62.38c8,7.24,12.58,13.33,12.58,13.33s16.19-6.66,39.52-30.66c10.19-10.49,18.7-26.99,23.68-48.95
        c1.84-8.08,2.74-16.35,2.87-24.64c1.24-76.69-0.04-129.97-0.04-129.97l35.11,32.07h36.95v167.87c0,0-1.14,26.18-31.62,46.48
        c4.95,4.19,17.15,13.71,17.15,13.71s36.12-20.51,58.06-53.59c0,0,7.36-9.55,12.41-46.79c0.76-38.48-0.28-127.62-0.28-127.62
        l90.95-0.38l0.17,90.9c0.02,10.17,1.67,20.29,5.19,29.82c2.03,5.51,4.64,10.92,7.78,14.14c8.38,8.57,25.14,25.14,48.57,25.14
        s60.19,0,60.19,0s14.57,0.19,37.91-18.86c25.79-21.05,33.66-31.04,33.66-31.04H505.78z
        M413.91,312h-90.67
        c0,0-6.67-57.53,25.33-104.19c29.62-41.24,65.34-44.38,65.34-44.38V312z"
    />
  </svg>
)
