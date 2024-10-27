import Hero from '../components/Hero'
import Features from '../components/Features'
import InteractiveDemo from '../components/InteractiveDemo'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import TechOrbit from '../components/TechOrbit'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TechOrbit />
      <InteractiveDemo />
      <Pricing />
      <Testimonials />
      <Newsletter />
    </>
  )
}