import BusinessInfo from '@/components/HomePage/BusinessInfo'
import { ChooseThePlans } from '@/components/HomePage/ChooseThePlans'
import { Hero } from '@/components/HomePage/Hero'
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
      
    </section>
  )
}

export default page