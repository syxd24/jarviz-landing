import { useState } from 'react'
import { openWaitlist } from '../lib/tallyWaitlist'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
  }

  function focusWaitlist(event) {
    event.preventDefault()
    closeMenu()
    openWaitlist()
  }

  function focusEarlyAccess(event) {
    event.preventDefault()
    closeMenu()
    openWaitlist()
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Jarviz AI — back to home">
          <img src="/jarviz-face.png" alt="" />
          <span>JARVIZ <em>AI</em></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#how-it-works" onClick={closeMenu}>How I Work</a>
          <a href="#dashboard" onClick={closeMenu}>Dashboard</a>
          <a href="#who-i-work-for" onClick={closeMenu}>Who I Work For</a>
          <a href="#early-access" onClick={focusEarlyAccess}>Early Access</a>
          <a className="nav-cta" href="#work-email" onClick={focusWaitlist}>Meet Jarviz <span>→</span></a>
        </nav>
      </div>
    </header>
  )
}
