import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/NavBar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhyChooseMe from './components/WhyChooseMe'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseMe />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}