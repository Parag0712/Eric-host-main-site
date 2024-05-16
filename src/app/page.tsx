import BusinessInfo from '@/components/HomePage/BusinessInfo'
import { ChooseThePlans } from '@/components/HomePage/ChooseThePlans'
import { Cta } from '@/components/HomePage/Cta'
import { FAQ } from '@/components/HomePage/Faq'
import { Hero } from '@/components/HomePage/Hero'
import MapSection from '@/components/HomePage/MapSection'
import { Pricing } from '@/components/HomePage/Pricing'
import Testimonials from '@/components/HomePage/Testimonials'
type Props = {}

const page = (props: Props) => {
  return (
    <section>
      <Hero />
      <Pricing />
      <ChooseThePlans />
      <BusinessInfo />
      <Testimonials />
      <MapSection />
      <Cta />

      <FAQ />
    </section>
  )
}

export default page