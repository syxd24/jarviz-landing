import { useState } from 'react'

const leads = [
  { name: 'Sarah', preview: 'Need pricing for my team', time: '2m', channel: 'wa', active: true },
  { name: 'Alex', preview: 'Looking for a demo', time: '8m', channel: 'mail' },
  { name: 'Daniel', preview: 'Can you integrate with HubSpot?', time: '12m', channel: 'web' },
  { name: 'Maya', preview: 'Thursday works!', time: '18m', channel: 'wa' },
]

export default function Dashboard() {
  const [aiOn, setAiOn] = useState(true)
  const [notice, setNotice] = useState('I’ve got this.')

  function takeOver() {
    setAiOn(false)
    setNotice('You’re in control now.')
  }

  return (
    <section className="dashboard-section" id="dashboard" aria-labelledby="dashboard-title">
      <div className="dashboard-section__intro">
        <div className="eyebrow"><span /> MY WORK. YOUR CONTROL.</div>
        <h2 id="dashboard-title">I handle the conversations. <em>You see everything.</em></h2>
        <p>See my AI intelligence layer at work — real-time intent classification, conversation analysis, lead scoring, qualification signals, and booking outcomes in one place.</p>
      </div>

      <div className="product-showcase">
      <div className="product-ui">
        <nav className="product-tabs" aria-label="Dashboard preview navigation"><strong>JARVIZ</strong><span className="is-active">Conversations</span><span>Analytics</span></nav>
        <aside className="product-inbox">
          <div className="product-panel-title"><strong>Conversations</strong><span>4 active</span></div>
          <div className="lead-list">
            {leads.map((lead) => (
              <button className={lead.active ? 'is-active' : ''} key={lead.name} type="button">
                <i className={`channel-dot channel-dot--${lead.channel}`} />
                <span><strong>{lead.name}</strong><small>{lead.preview}</small></span>
                <time>{lead.time}</time>
              </button>
            ))}
          </div>
          <div className="needs-input">
            <span>JARVIZ NEEDS INPUT</span>
            <p>Lead asked about custom enterprise pricing.</p>
            <button type="button">Ask human →</button>
          </div>
        </aside>

        <div className="product-chat">
          <header className="chat-header">
            <div><strong><i className={aiOn ? 'is-online' : ''} /> {aiOn ? 'JARVIZ ACTIVE' : 'HUMAN ACTIVE'}</strong><small>{notice}</small></div>
            <div className="chat-controls">
              <button className={`ai-toggle ${aiOn ? 'is-on' : ''}`} type="button" onClick={() => setAiOn(!aiOn)}>AI {aiOn ? 'ON' : 'OFF'}</button>
              <button className="takeover" type="button" onClick={takeOver}>Take over</button>
            </div>
          </header>
          <div className="chat-body">
            <p className="chat-day">TODAY · WEBSITE + META</p>
            <div className="bubble bubble--jarviz"><b>J</b><p>Hey Sarah — saw you requested a demo. Mind if I ask what you’re hoping to automate?</p></div>
            <div className="bubble bubble--lead"><p>Mostly inbound lead follow-up.</p></div>
            <div className="bubble bubble--jarviz"><b>J</b><p>Got it. Roughly how many inbound leads are you getting each month?</p></div>
            <div className="bubble bubble--lead"><p>Around 300–400.</p></div>
            <div className="bubble bubble--jarviz"><b>J</b><p>Perfect. Are those mostly website forms, Meta leads, or something else?</p></div>
            <div className="bubble bubble--lead"><p>Meta + our website.</p></div>
            <div className="bubble bubble--jarviz"><b>J</b><p>Sounds like a fit. Want me to grab you a time with the team?</p></div>
            <div className="time-options"><button type="button">Tue <b>11:30</b></button><button className="selected" type="button">Wed <b>14:00</b></button><button type="button">Thu <b>10:00</b></button></div>
            <div className="meeting-success"><span>✓</span><div><strong>MEETING BOOKED</strong><small>Wednesday · 14:00</small></div></div>
          </div>
        </div>

        <aside className="lead-details">
          <div className="lead-profile"><span>SJ</span><div><strong>Sarah Johnson</strong><small>Acme Software</small></div></div>
          <dl><div><dt>Email</dt><dd>sarah@acme.com</dd></div><div><dt>Source</dt><dd>Meta Lead Form</dd></div><div><dt>Status</dt><dd className="qualified">QUALIFIED ✓</dd></div></dl>
          <div className="ai-summary"><span>AI SUMMARY</span><dl><div><dt>Need</dt><dd>Inbound lead automation</dd></div><div><dt>Volume</dt><dd>300–400 leads/month</dd></div><div><dt>Channels</dt><dd>Meta + Website</dd></div><div><dt>Intent</dt><dd>High</dd></div></dl></div>
          <div className="lead-tags"><span>HOT</span><span>SaaS</span><span>300+ Leads</span></div>
          <div className="meeting-card"><small>MEETING</small><strong>Wednesday <b>14:00</b></strong><span>✓ Booked</span></div>
          <button className="takeover-wide" type="button" onClick={takeOver}>Need me to stop? <strong>Take over conversation →</strong></button>
        </aside>
      </div>

      <aside className="analytics-ui" aria-label="Jarviz analytics dashboard preview">
        <nav className="analytics-tabs"><strong>JARVIZ</strong><span>Conversations</span><span className="is-active">Analytics</span></nav>
        <header><div><small>PERFORMANCE</small><strong>Inbound overview</strong></div><span>Last 30 days⌄</span></header>
        <div className="analytics-metrics">
          <article><small>Leads Contacted</small><strong>248</strong><i>+18%</i></article>
          <article><small>Qualified</small><strong>81</strong><i>+12%</i></article>
          <article><small>Meetings Booked</small><strong>37</strong><i>+9%</i></article>
          <article><small>In Progress</small><strong>52</strong></article>
          <article><small>Human Takeovers</small><strong>9</strong></article>
          <article><small>Avg. First Reply</small><strong>12 sec</strong><i>−4 sec</i></article>
        </div>
        <div className="analytics-chart">
          <div><strong>Lead → meeting performance</strong><small>Meetings booked</small></div>
          <svg viewBox="0 0 360 120" role="img" aria-label="Meetings booked trending upward over 30 days">
            <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#e62429" stopOpacity=".22"/><stop offset="1" stopColor="#e62429" stopOpacity="0"/></linearGradient></defs>
            <path className="chart-grid" d="M0 20H360M0 60H360M0 100H360" />
            <path className="chart-area" d="M0 100 C35 92 45 98 78 76 S128 84 158 56 S210 65 242 40 S300 49 360 15 L360 120 L0 120Z" />
            <path className="chart-line" d="M0 100 C35 92 45 98 78 76 S128 84 158 56 S210 65 242 40 S300 49 360 15" />
          </svg>
        </div>
        <div className="analytics-bottom">
          <div className="mini-funnel"><strong>Conversion funnel</strong><p><span>248 contacted</span><i style={{width:'100%'}} /><span>136 replied</span><i style={{width:'72%'}} /><span>81 qualified</span><i style={{width:'50%'}} /><span>37 meetings</span><i style={{width:'29%'}} /></p></div>
          <div className="channel-bars"><strong>Channels</strong>{[['WhatsApp','42%'],['Email','28%'],['Website','19%'],['SMS','11%']].map(([name,value]) => <p key={name}><span>{name}</span><i><b style={{width:value}} /></i><small>{value}</small></p>)}</div>
        </div>
      </aside>
      </div>
      <p className="dashboard-signoff">I work the lead. <em>You keep the control.</em></p>
    </section>
  )
}
