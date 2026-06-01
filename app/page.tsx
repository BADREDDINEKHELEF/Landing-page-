import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Waitlist from '@/components/Waitlist'
import Features from '@/components/Features'
import AIDemo from '@/components/AIDemo'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import SocialLinks from '@/components/SocialLinks'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0F0E1A] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Waitlist />
      <Features />
      <AIDemo />
      <Pricing />
      <Testimonials />
      <SocialLinks />
      <FinalCTA />
      <Footer />
    </main>
  )
}
