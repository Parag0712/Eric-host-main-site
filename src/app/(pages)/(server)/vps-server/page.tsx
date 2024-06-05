import { Cta } from "@/components/Cta-logo/Cta";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Pricing } from "@/components/Vps/Pricing";

import ImageHeroSection from "@/components/HeroSections/ImageHeroSection";
import DynamicInformation from "@/components/Information/DynamicInformation";

// Data 
import VpsFeatured from "@/components/Vps/Service";
import { heroProps, servicesProps } from "@/data/Hosing/VpsServer/data";
import faq from '../../../../data/Hosing/VpsServer/faq.json';
import dynamicInformationProps from '../../../../data/Hosing/VpsServer/information.json';
import priceing from "../../../../data/Hosing/VpsServer/pricing.json";
import { Services } from "@/components/PlanCards/Service";
import AnimationContainer from "@/components/Conatianers/AnimationContainer";

type Props = {}

const vpserver = (props: Props) => {

  const colors = ["bg-[#FFFFFF] ", "bg-[#F2F3FF]", "bg-[#4346C2] text-white"];

  return (
      <AnimationContainer>
        <ImageHeroSection {...heroProps
        } />
        <Pricing data={priceing} />
        <VpsFeatured />
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
      </AnimationContainer>
  )
}

export default vpserver