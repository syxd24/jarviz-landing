const characterImage = '/jarviz-alt.png'

const steps = [
  {
    number: '01',
    action: 'LEARN',
    icon: '◇',
    title: 'I become your company’s sales intelligence before I speak to a single lead.',
    copy: 'Give me your website, FAQs, offers, sales material and company knowledge. I learn how you sell, what you offer and how you speak.',
    visual: (
      <>
        <div className="chips knowledge-chips"><span>Website</span><span>FAQs</span><span>Offers</span><span>Sales Docs</span><span>Knowledge Base</span></div>
        <strong className="jarviz-line">I become your company’s voice.</strong>
      </>
    ),
  },
  {
    number: '02',
    action: 'CONNECT',
    icon: '⌁',
    title: 'I connect to where your leads already come from.',
    copy: 'Connect your Meta lead forms, website forms and other inbound sources. When someone submits their details, I know instantly.',
    visual: <div className="chips"><span>Meta Lead Ads</span><span>Website Forms</span></div>,
  },
  {
    number: '03',
    action: 'RESPOND',
    icon: '↗',
    title: 'Seconds later, I’m already talking to them.',
    copy: 'A new lead comes in and I immediately send the first personalized message while their interest is still hot.',
    visual: <div className="message-status"><span>NEW LEAD</span><i>→</i><span>MESSAGE SENT <b>00:08</b></span></div>,
  },
  {
    number: '04',
    action: 'QUALIFY',
    icon: '◎',
    title: 'I figure out who’s actually ready to buy.',
    copy: 'I ask questions, understand intent, answer objections and qualify each lead using your own sales criteria.',
    visual: <div className="lead-heat"><span className="is-hot">HOT</span><span>WARM</span><span>COLD</span></div>,
  },
  {
    number: '05',
    action: 'BOOK',
    icon: '□',
    title: 'When they’re ready, I book the meeting.',
    copy: 'I check your calendar, offer available times and schedule the meeting without your team having to jump into the conversation.',
    visual: <div className="booking"><div><span>Tue <b>11:30</b></span><span>Wed <b>14:00</b></span><span>Thu <b>10:00</b></span></div><strong>✓ Meeting booked</strong></div>,
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-title">
      <div className="how__grid" aria-hidden="true" />
      <div className="how__inner">
        <div className="how__identity">
          <div className="section-label"><span /> HOW I WORK</div>
          <h2 id="how-title">I learn your business. <em>Then I take over.</em></h2>
          <p>I learn how your company sells, connect to your lead sources, and handle every new conversation from first message to booked meeting.</p>
          <div className="character" aria-hidden="true">
            <div className="character__portal" />
            <div className="character__ring character__ring--outer" />
            <div className="character__ring character__ring--inner" />
            <img src={characterImage} alt="" />
            <span className="character__coordinate">I BRING MORE MONEY</span>
            <span className="character__signal">I AM ONLINE</span>
          </div>
        </div>

        <div className="workflow">
          <div className="workflow__line" aria-hidden="true"><span /></div>
          {steps.map((step) => (
            <article className="workflow-step" key={step.number}>
              <div className="workflow-step__node" aria-hidden="true" />
              <div className="workflow-step__meta">
                <span>STEP {step.number}</span>
                <strong><i>{step.icon}</i>{step.action}</strong>
              </div>
              <div className="workflow-step__content">
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                {step.visual}
              </div>
            </article>
          ))}
          <p className="workflow__signoff">You close the deal. <strong>I make sure the meeting happens.</strong></p>
        </div>
      </div>
    </section>
  )
}
