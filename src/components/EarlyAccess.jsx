import { openWaitlist } from '../lib/tallyWaitlist'

export default function EarlyAccess() {
  function submit(event) {
    event.preventDefault()
    openWaitlist()
  }

  return (
    <section className="early" id="early-access" aria-labelledby="early-title">
      <div className="early__inner">
        <p className="early__label">I’M JUST GETTING STARTED.</p>
        <h2 id="early-title">More about me soon. <em>Don’t miss me.</em></h2>
        <p>I’m still learning a few tricks before I clock in full-time.</p>
          <form className="early-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="early-email">Work email</label>
            <input id="early-email" type="email" placeholder="Enter your work email" autoComplete="email" />
            <button type="submit">KEEP ME POSTED →</button>
          </form>
        <small>No spam. I have leads to chase.</small>
      </div>
    </section>
  )
}
