import { FeaturedDomain } from '@/components/Domain/FeaturedDomain'
import HeroSection from '@/components/Domain/HeroSection'
import { InstructionCard } from '@/components/Domain/InstructionCard'
import { FAQ } from '@/components/Faq/Faq'
import MapSection from '@/components/MapSection/MapSection'
import { Services } from '@/components/PlanCards/Service'
import Testimonials from '@/components/Testimonials/Testimonials'
import { servicesProps,heroSectionContent } from '@/data/DomainRegistration/data'
import faq from '../../../../data/DomainRegistration/faq.json'
import AnimationContainer from '@/components/Conatianers/AnimationContainer'

type Props = {}

const domainregistration = (props: Props) => {
  return (
    <AnimationContainer>
      <HeroSection
        {...heroSectionContent}
      />
      <div className=''>

        <InstructionCard
          {...servicesProps[0]}
        />
      </div>
      <FeaturedDomain />
      
      <section className="bg-[#F2F3FF]">
        <Services
          {...servicesProps[1]}
        />
      </section>

      <section className="">
        <Services
          {...servicesProps[2]}
        />
      </section>

      <Testimonials />
      <MapSection />
      <FAQ faq={faq} />
    </AnimationContainer>
  )
}

export default domainregistration;
