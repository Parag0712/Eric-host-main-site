import { Cta } from "@/components/Cta-logo/Cta";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Pricing } from "@/components/Vps/Pricing";

import ImageHeroSection from "@/components/HeroSections/ImageHeroSection";
import DynamicInformation from "@/components/Information/DynamicInformation";

// Data 
import VpsFeatured from "@/components/Vps/Service";
import { heroProps } from "@/data/Hosing/MangeVps/data";
import faq from '../../../../data/Hosing/MangeVps/faq.json';
import dynamicInformationProps from '../../../../data/Hosing/VpsServer/information.json';
import priceing from "../../../../data/Hosing/MangeVps/pricing.json";

type Props = {}

const managevpserver = (props: Props) => {
  return (
    <section>
    <ImageHeroSection {...heroProps
    } />
    <Pricing data={priceing} />
    <VpsFeatured />
    <DynamicInformation {...dynamicInformationProps} />
    {/* {servicesProps.map((service, index) => (
      <div key={index} className={index % 2 !== 0 ? "bg-[#4346C2]" : ""}>
        <Services {...service} />
      </div>
    ))} */}
    <Testimonials />
    <MapSection />
    <Cta />
    <FAQ faq={faq} />
  </section>
  )
}

export default managevpserver