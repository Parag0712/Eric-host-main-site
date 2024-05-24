import { FAQ } from '@/components/Faq/Faq'
import HeroSection2 from '@/components/ManagedVps/HeroSection2'
import Service from '@/components/ManagedVps/Service'
import VpsPricing from '@/components/ManagedVps/VpsPricing'
import faq from '../../../../data/Hosing/VpsServer/faq.json';

type Props = {}

const managevps = (props: Props) => {
  return (
    <section>
      {/* <HeroSection /> */}
      <HeroSection2 />
      <VpsPricing />
      <Service />
      <FAQ faq={faq} />
    </section>
  )
}

export default managevps