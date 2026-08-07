const audiences = [
  { icon: '▣', title: 'SaaS Companies', copy: 'Demo requests, trials and contact forms come in. I make sure they don’t sit there getting cold.' },
  { icon: '⊞', title: 'Agencies', copy: 'New enquiries come in from ads and forms. I qualify them before they reach your calendar.' },
  { icon: '◉', title: 'Consultants & Coaches', copy: 'I handle the early back-and-forth so you talk to people who are actually interested.' },
  { icon: '⌂', title: 'Real Estate', copy: 'Property enquiry at 11:47 PM? I’m already talking to them while your team sleeps.' },
  { icon: '⌁', title: 'Home & Local Services', copy: 'Someone asks for a quote. I respond fast, qualify the request and move them toward an appointment.' },
  { icon: 'ϟ', title: 'Basically... anyone with inbound leads.', copy: 'If leads arrive every month and somebody needs to follow up fast, I can take that job off your hands.', featured: true },
]

export default function WhoIWorkFor() {
  return (
    <section className="audience" id="who-i-work-for" aria-labelledby="audience-title">
      <div className="audience__inner">
        <div className="audience__intro">
          <div className="audience__copy">
            <div className="eyebrow"><span /> WHO I WORK FOR</div>
            <h2 id="audience-title">Got inbound leads? <em>We’ll probably get along.</em></h2>
            <p className="audience__lead">If new leads are coming in every month and speed-to-lead matters, I’m built for you.</p>
            <p className="audience__body">Forms, ads, demos, enquiries — if someone raises their hand, I make sure the conversation starts.</p>
          </div>
          <div className="audience__visual" aria-hidden="true">
            <div className="audience__scribble" />
            <img src="/jarviz-pointing.png" alt="" />
            <span>YOU BRING THE LEADS</span>
          </div>
        </div>

        <div className="audience-grid">
          {audiences.map((item) => (
            <article className={`audience-card ${item.featured ? 'is-featured' : ''}`} key={item.title}>
              <i>{item.icon}</i>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              <span className="audience-card__arrow">→</span>
              {item.featured && <small>THAT’S PROBABLY YOU</small>}
            </article>
          ))}
        </div>
        <p className="audience__aside">Not on the list? If leads come in, I’m interested.</p>
      </div>
    </section>
  )
}
