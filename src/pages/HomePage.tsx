import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import InteractiveDemo from '../components/InteractiveDemo'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <InteractiveDemo />
      <Pricing />
      <Testimonials />
      <Newsletter />
    </>
  )
}