import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import Dashboard from './components/Dashboard'
import WhoIWorkFor from './components/WhoIWorkFor'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Dashboard />
      <WhoIWorkFor />
      <EarlyAccess />
      <Footer />
    </>
  )
}
