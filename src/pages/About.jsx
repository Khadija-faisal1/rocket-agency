import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import Expertise from '../components/about/Expertise'
import OurProcess from '../components/about/OurProcess'
import ProcessSteps from '../components/about/ProcessSteps'
import Certifications from '../components/about/Certifications'
import CeoTalk from '../components/about/CeoTalk'
import OtherProjects from '../components/case/OtherProjects'
import CreateSection from '../components/case/CreateSection'
import { projects } from '../data/about'

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Expertise />
      <OurProcess />
      <div className="mesh-ink relative">
        <ProcessSteps />
        <Certifications />
        <CeoTalk />
        <OtherProjects items={projects} tag="Portfolio" heading="Our" accent="Projects" />
        <CreateSection />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0d0f21]" />
      </div>
    </>
  )
}