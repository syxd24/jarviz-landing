import { openWaitlist } from '../lib/tallyWaitlist'

const launchChannels = [
  { name: 'WhatsApp', icon: '/integrations/whatsapp.svg', className: 'launch-whatsapp' },
  { name: 'Email', icon: '/integrations/gmail.svg', className: 'launch-email' },
  { name: 'SMS', icon: '/integrations/sms.svg', className: 'launch-sms' },
  { name: 'Website Chat', icon: '/integrations/website-chat.svg', className: 'launch-chat' },
]

const ecosystem = [
  { name: 'Instagram', icon: '/integrations/instagram.svg', className: 'eco-instagram' },
  { name: 'HubSpot', icon: '/integrations/hubspot.svg', className: 'eco-hubspot' },
  { name: 'Notion', icon: '/integrations/notion.svg', className: 'eco-notion' },
  { name: 'Claude', icon: '/integrations/claude.svg', className: 'eco-claude' },
  { name: 'ChatGPT', icon: '/integrations/openai.svg', className: 'eco-openai' },
  { name: 'Salesforce', icon: '/integrations/salesforce.svg', className: 'eco-salesforce' },
  { name: 'Slack', icon: '/integrations/slack.svg', className: 'eco-slack' },
  { name: 'Google Calendar', icon: '/integrations/googlecalendar.svg', className: 'eco-calendar' },
  { name: 'LinkedIn', icon: '/integrations/linkedin.svg', className: 'eco-linkedin' },
]

export default function Hero() {
  function handleSubmit(event) {
    event.preventDefault()
    openWaitlist()
  }

  return (
    <main className="hero" id="home">
      <div className="hero__ambient" aria-hidden="true" />
      <section className="hero__inner" aria-labelledby="hero-title">
        <div className="hero__copy">
          <div className="eyebrow"><span /> MEET AGENT JARVIZ</div>
          <h1 id="hero-title">
            I never let your <em>Inbound leads</em> go cold.
          </h1>
          <p className="hero__lead">
            AI Agent built to turn 15–25% more inbound leads into booked meetings — while you sleep.
          </p>
          <p className="hero__body">
            Someone fills your form. Seconds later, I’m already talking to them — qualifying the lead, handling the conversation, and booking the meeting.
          </p>

            <form className="waitlist" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="work-email">Work email</label>
              <input
                id="work-email"
                type="email"
                placeholder="Enter your work email"
                autoComplete="email"
              />
              <button type="submit"> <span>Be First to Meet Jarviz →</span></button>
            </form>
          <p className="hero__note">Early access. No spam.</p>
        </div>

        <div className="visual" aria-label="Jarviz AI assistant connected to your sales tools">
          <div className="visual__glow" aria-hidden="true" />
          <div className="orbit orbit--outer" aria-hidden="true" />
          <div className="orbit orbit--middle" aria-hidden="true" />
          <div className="orbit orbit--inner" aria-hidden="true" />

          <div className="portrait-wrap">
            {/* Replace /jarviz-face.png with the final approved Jarviz portrait. */}
            <img src="/jarviz-face.png" alt="Jarviz, an intelligent AI assistant" className="portrait" />
            <div className="portrait__scan" aria-hidden="true" />
            <div className="status-pill"><span /> SYSTEM ONLINE</div>
          </div>

          <div className="integration-badges">
            {launchChannels.map((item) => (
              <div className={`channel-badge ${item.className}`} key={item.name} title={item.name}>
                <img src={item.icon} alt="" /><small>{item.name}</small>
              </div>
            ))}
            {ecosystem.map((item) => (
              <div className={`ecosystem-badge ${item.className}`} key={item.name} title={item.name}>
                <img src={item.icon} alt="" /><span className="sr-only">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
