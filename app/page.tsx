import Hero from '@/components/sections/Hero'
import FeaturedDestinations from '@/components/sections/FeaturedDestinations'
import InteractiveMap from '@/components/sections/InteractiveMap'
import Activities from '@/components/sections/Activities'
import WhyVisit from '@/components/sections/WhyVisit'
import VisitCongoInNumbers from '@/components/sections/VisitCongoInNumbers'
import InvestmentOpportunities from '@/components/sections/InvestmentOpportunities'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'
import VideoBanner from '@/components/sections/VideoBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <VideoBanner />
      <VisitCongoInNumbers />
      <FeaturedDestinations />
      <InteractiveMap />
      <Activities />
      <WhyVisit />
      <InvestmentOpportunities />
      <Testimonials />
      <Newsletter />
    </>
  )
}

