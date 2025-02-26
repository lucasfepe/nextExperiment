'use client'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { toggleTheme } = useTheme()

  return (
    <nav>
      <div className="logo">Luke Ferrari</div>
      <button 
        className="hamburger" 
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="bi bi-list"></i>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button id="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
