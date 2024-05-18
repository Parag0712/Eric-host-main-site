import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { Hero } from "@/components/HeroSections/Hero";
import MapSection from "@/components/MapSection/MapSection";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";

import { HomeSupport } from "@/components/Faq/HomeSupport";
import SmallHeading from "@/components/Heading/SmallHeading";
import DynamicInformation from "@/components/Information/DynamicInformation";
import { FeaturedHosting } from "@/components/Service/FeaturedHosting";
import dynamicInformationProps from '../data/HomePage/information.json';
import data from "../data/HomePage/pricing.json";
import { heroProps, servicesProps, support } from "@/data/HomePage/data";

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <Hero {...heroProps} />
      <Pricing data={data} />
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
      <Cta />
      <Services
        {...servicesProps[servicesProps.length - 1]}
      />
    </section>
  );
};

export default page;
