import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";
import { FeaturedHosting } from "@/components/Service/FeaturedHosting";
import Testimonials from "@/components/Testimonials/Testimonials";

import ImageHeroSection from "@/components/HeroSections/ImageHeroSection";
import DynamicInformation from "@/components/Information/DynamicInformation";

// Data 
import { heroProps, servicesProps } from "@/data/Hosing/Shared/data";
import faq from '../../../../data/Hosing/Shared/faq.json';
import dynamicInformationProps from '../../../../data/Hosing/Shared/information.json';
import priceing from "../../../../data/Hosing/Shared/pricing.json";
import DynamicInfo2 from "@/components/Information/DynamicInfo2";

type Props = {}

const sharedhosting = (props: Props) => {
  return (
    <section>
    <ImageHeroSection {...heroProps
    } />
    <Pricing data={priceing} />
    <ChooseThePlans />
    <DynamicInformation {...dynamicInformationProps} />
    <DynamicInfo2 {...dynamicInformationProps} />
    {servicesProps.map((service, index) => (
      <div key={index} className={index % 2 === 0 ? "bg-[#4346C2]" : ""}>
        <Services {...service} />
      </div>
    ))}
    <Testimonials />
    <MapSection />
    <Cta />
    <FAQ faq={faq} />
  </section>
  )
}

export default sharedhosting