export const TALLY_FORM_ID = 'kd4XAM'

const TALLY_SCRIPT_URL = 'https://tally.so/widgets/embed.js'
let tallyScriptPromise

function loadTally() {
  if (window.Tally) return Promise.resolve(window.Tally)
  if (tallyScriptPromise) return tallyScriptPromise

  tallyScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${TALLY_SCRIPT_URL}"]`)
    const script = existingScript || document.createElement('script')

    const handleLoad = () => window.Tally ? resolve(window.Tally) : reject(new Error('Tally did not initialize.'))
    script.addEventListener('load', handleLoad, { once: true })
    script.addEventListener('error', reject, { once: true })

    if (!existingScript) {
      script.src = TALLY_SCRIPT_URL
      script.async = true
      document.head.appendChild(script)
    }
  })

  return tallyScriptPromise
}

export async function openWaitlist() {
  try {
    const Tally = await loadTally()
    Tally.openPopup(TALLY_FORM_ID, {
      layout: 'modal',
      width: 520,
      overlay: true,
    })
  } catch {
    // Keep the visitor on-site if the third-party widget is temporarily unavailable.
  }
}
