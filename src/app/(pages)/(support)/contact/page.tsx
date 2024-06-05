import AnimationContainer from '@/components/Conatianers/AnimationContainer'
import { ContactPage } from '@/components/ContactUs/ContactPage'
import Map from '@/components/ContactUs/Map'

type Props = {}

const contact = (props: Props) => {
  return (
    <AnimationContainer>
      <ContactPage />
      <Map />
    </AnimationContainer>
  )
}

export default contact