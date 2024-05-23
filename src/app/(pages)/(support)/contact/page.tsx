import { ContactPage } from '@/components/ContactUs/ContactPage'
import Map from '@/components/ContactUs/Map'

type Props = {}

const contact = (props: Props) => {
  return (
    <section>
      <ContactPage />
      <Map />
    </section>
  )
}

export default contact