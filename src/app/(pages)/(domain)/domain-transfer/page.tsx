import { FeaturedDomain } from '@/components/Domain/FeaturedDomain'
import HeroSection from '@/components/Domain/HeroSection'
import { InstructionCard } from '@/components/Domain/InstructionCard'
import { FAQ } from '@/components/Faq/Faq'
import MapSection from '@/components/MapSection/MapSection'
import { Services } from '@/components/PlanCards/Service'
import Testimonials from '@/components/Testimonials/Testimonials'
import { servicesProps,heroSectionContent } from '@/data/DomainTransfer/data'
import faq from '../../../../data/DomainTransfer/faq.json'

type Props = {}

const domainregistration = (props: Props) => {
  return (
    <section>
      <HeroSection
      {...heroSectionContent}
      />
      <div className=''>

        <InstructionCard
          {...servicesProps[0]}
        />
      </div>
      
      <section className="bg-[#F2F3FF]">
        <InstructionCard
          {...servicesProps[1]}
        />
      </section>

      <FeaturedDomain />

      <section className="">
        <Services
          {...servicesProps[2]}
        />
      </section>


      <section className="bg-[#F2F3FF]">
        <Services
          {...servicesProps[3]}
        />
      </section>
      <Testimonials />
      <MapSection />
      <FAQ faq={faq} />
    </section>
  )
}

export default domainregistration;
