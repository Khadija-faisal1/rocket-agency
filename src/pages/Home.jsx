import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import ServicesGridSection from '../components/home/ServicesGridSection'
import FeaturedWork from '../components/home/FeaturedWork'
import AboutTeaser from '../components/home/AboutTeaser'
import ProcessTeaser from '../components/home/ProcessTeaser'
import CTABanner from '../components/home/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServicesSection /> */}
      <ServicesGridSection />
      <FeaturedWork />
      <AboutTeaser />
      <ProcessTeaser />
      <CTABanner />
    </>
  )
}
