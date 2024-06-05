import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { Hero } from "@/components/HeroSections/Hero";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";

import { FeaturedHosting } from "@/components/Service/FeaturedHosting";
import { heroProps, servicesProps } from "@/data/HomePage/data";
import data from "../data/HomePage/pricing.json";
import MapSection from "@/components/MapSection/MapSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import AnimationContainer from "@/components/Conatianers/AnimationContainer";
type Props = {};

const page = (props: Props) => {
  return (
    <AnimationContainer>
      <Hero {...heroProps} />
      <Pricing data={data} title="Business" />
      <section className="bg-[#F2F3FF]">
        <Services
          {...servicesProps[0]}
        />
      </section>

      <FeaturedHosting />
      <Services
        {...servicesProps[1]}
      />
      <section className="bg-[#F2F3FF]">
        <Services
          {...servicesProps[2]}
        />
      </section>
      <Services
        {...servicesProps[3]}
      />
      <section className="bg-[#F2F3FF]">

        <Services
          {...servicesProps[4]}
        />
      </section>
      <ChooseThePlans />
      <Testimonials />
      <MapSection />

      <Services   
        {...servicesProps[servicesProps.length - 1]}
      />
    </AnimationContainer>
  );
};

export default page;
