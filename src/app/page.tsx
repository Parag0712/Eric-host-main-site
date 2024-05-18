import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { Hero } from "@/components/HeroSections/Hero";
import { Services } from "@/components/PlanCards/Service";
import { Pricing } from "@/components/Pricing/Pricing";

import { FeaturedHosting } from "@/components/Service/FeaturedHosting";
import { heroProps, servicesProps } from "@/data/HomePage/data";
import data from "../data/HomePage/pricing.json";

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
