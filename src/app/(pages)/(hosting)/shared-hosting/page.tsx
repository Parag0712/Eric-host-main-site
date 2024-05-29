import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";

import ImageHeroSection from "@/components/HeroSections/ImageHeroSection";
import DynamicInformation from "@/components/Information/DynamicInformation";

// Data 
import { heroProps, servicesProps } from "@/data/Hosing/Shared/data";
import faq from '../../../../data/Hosing/Shared/faq.json';
import dynamicInformationProps from '../../../../data/Hosing/Shared/information.json';
import priceing from "../../../../data/Hosing/Shared/pricing.json";

type Props = {}

const sharedhosting = (props: Props) => {

  
  const colors = ["bg-[#FFFFFF] ", "bg-[#F2F3FF]", "bg-[#4346C2] text-white"];

  return (
    <section>
    <ImageHeroSection {...heroProps
    } />
    <Pricing data={priceing} title="Shared" />
    <ChooseThePlans />
    <DynamicInformation {...dynamicInformationProps} />
    {servicesProps.map((service, index) => (
      <div key={index} className={index % 2 === 0 ? "bg-[#F2F3FF]" : " bg-[#4346C2] text-white" }>
        <Services {...service} shouldBePurple={index % 2 === 0} />
      </div>
    ))}
    <MapSection />
    <Testimonials />
    <FAQ faq={faq} />
  </section>
  )
}

export default sharedhosting