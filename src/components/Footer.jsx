import { openWaitlist } from '../lib/tallyWaitlist'

const FOUNDER_LINKEDIN_URL = 'https://www.linkedin.com/in/rohith-161043280'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="brand brand--footer" href="#home"><img src="/jarviz-face.png" alt="" /><span>JARVIZ <em>AI</em></span></a>
          <p>Your always-on inbound teammate.</p>
          <small>© 2026 Jarviz AI. All rights reserved.</small>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <span>EXPLORE</span>
          <a href="#how-it-works">How I Work</a>
          <a href="#who-i-work-for">Who I Work For</a>
          <a href="#early-access" onClick={(event) => { event.preventDefault(); openWaitlist() }}>Early Access</a>
        </nav>
        <div className="footer__founder">
          <span>BUILT BY</span>
          <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noreferrer">My boss <b>in</b> ↗</a>
        </div>
      </div>
      <p className="footer__micro">Still in training. Already hates slow follow-ups.</p>
    </footer>
  )
}
