import { FeaturedDomain } from '@/components/Domain/FeaturedDomain'
import HeroSection from '@/components/Domain/HeroSection'
import { InstructionCard } from '@/components/Domain/InstructionCard'
import { FAQ } from '@/components/Faq/Faq'
import MapSection from '@/components/MapSection/MapSection'
import { Services } from '@/components/PlanCards/Service'
import Testimonials from '@/components/Testimonials/Testimonials'
import { servicesProps } from '@/data/DomainRegistration/data'
import faq from '../../../../data/DomainRegistration/faq.json'

type Props = {}

const domainregistration = (props: Props) => {
  return (
    <section>
      <HeroSection
        title="Register Your Domain Name Get 24/7 Support."
        description="Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites."
        label="Search article"
        placeholder="Tranfer your Domain"
        redirectBaseUrl="https://example.com/search"
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
    </section>
  )
}

export default domainregistration;
