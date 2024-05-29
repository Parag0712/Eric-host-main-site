import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";

import ImageHeroSection from "@/components/HeroSections/ImageHeroSection";
import DynamicInformation from "@/components/Information/DynamicInformation";

// Data 
import { heroProps, servicesProps } from "@/data/Hosing/Mini/data";
import faq from '../../../../data/Hosing/Mini/faq.json';
import dynamicInformationProps from '../../../../data/Hosing/Mini/information.json';
import priceing from "../../../../data/Hosing/Mini/pricing.json";

type Props = {}
const minihosting = (props: Props) => {
  
  const colors = ["bg-[#FFFFFF] ", "bg-[#F2F3FF]", "bg-[#4346C2] text-white"];

  return (
    <section>
      <ImageHeroSection {...heroProps
      } />
      <Pricing data={priceing} />
      <ChooseThePlans />
      <DynamicInformation {...dynamicInformationProps} />

      {servicesProps.map((service, index) => {
        const shouldBePurple = index % 3 !== 2;
        return (
          <div key={index} className={colors[index % 3]}>
            <Services {...service} shouldBePurple={shouldBePurple} />
          </div>
        );
      })}
      <Testimonials />
      <MapSection />
      <Cta />
      <FAQ faq={faq} />
    </section>
  )
}

export default minihosting