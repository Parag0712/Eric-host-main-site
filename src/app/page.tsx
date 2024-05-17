import {
  BusinessCard2,
  BusinessCard3,
  BusinessCard4,
  BusinessCard5,
  HeroImage
} from "@/assests/config";
import { Hero } from "@/components/HeroSections/Hero";
import { ChooseThePlans } from "@/components/ChooseThePlans/ChooseThePlans";
import { Cta } from "@/components/Cta-logo/Cta";
import { FAQ } from "@/components/Faq/Faq";
import MapSection from "@/components/MapSection/MapSection";
import { Pricing } from "@/components/Pricing/Pricing";
import { Services } from "@/components/PlanCards/Service";
import Testimonials from "@/components/Testimonials/Testimonials";

import DynamicInformation from "@/components/Information/DynamicInformation";
import data from "../data/HomePage/pricing.json";
import faq from '../data/HomePage/faq.json'
import dynamicInformationProps from '../data/HomePage/information.json'
import { FeaturedHosting } from "@/components/Service/FeaturedHosting";
import SmallHeading from "@/components/Heading/SmallHeading";

type Props = {};
const servicesProps = [
  {
    title: "Robust Security, Fortified Defenses",
    subtitle: "Hard to Hack!",
    description: [
      "For our Business Hosting solutions, Privacy is the cornerstone. We empathize the critical importance of safeguarding your customer information and business data that’s why we have employed advanced security measures, including DDoS protection, malware scanning, firewalls, and SSL certificates. Our multi-layered security system fortifies your website, ensuring your business operations remain secure and uninterrupted and shielding it from cyber threats.",
    ],
    buttonText: "Explore Plans",
    buttonLink: "/",
    imageSrc: BusinessCard3,
    textwhite: true,
    imageAlt: "Card Image",
  },
  {
    title: "Unrivaled Performance,\nUninterrupted Operations",
    subtitle: "Customised Servers at your Fingertip",
    description: [
      "Every second counts in the fast-paced business environment. With Business Hosting at EricHost, you’re not just getting a hosting solution but also you’re securing an unwavering commitment to performance. Our servers optimized for speed and efficiency which ensure that your website loads instantly and provide visitors with a seamless and responsive experience. Say hello to a hosting environment engineered for excellence and Say goodbye to slow-loading pages."
    ],
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BusinessCard2,
    imageAlt: "Card Image",
    reversecard: true,
  },
  {
    title: "Scalability for Growth, Flexibility for Expansion",
    subtitle: "Expand Servers with a Click",
    description: [
      "Your business isn’t static, and nor should be your hosting solution. You’re empowered with scalability to blend with your ambitions whether you’re planning to expand your online portfolio or expecting a surge in website traffic due to a new product launch, our hosting solutions scale effortlessly. Your business grows with your website, ensuring your hosting environment evolves with your requirements.",
    ],
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BusinessCard4,
    textwhite: true,
    imageAlt: "Card Image",
  },
  {
    title: "Dedicated Support, Your Success Partner",
    subtitle: "24/7 Customer Support",
    description: [
      "Your success is our priority. Our experienced support team comprises dedicated professionals passionate about helping your business throughout the journey. We offer 24/7 customer support, ensuring you receive regular assistance for any technical queries, configurations, or troubleshooting requirements. Think of us as your definitive partner, committed to ensuring your Business Hosting experience is swift and stress-free.",
    ],
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BusinessCard5,
    imageAlt: "Card Image",
    reversecard: true,
  },
  {
    title: "Why Your Website Deserves the Best Hosting",
    subtitle: "Think About It",
    description: [
      "Your website is more than just a collection of web pages; it’s your digital storefront, your brand’s voice, and your connection to the world. Choosing the right hosting provider is not just a decision; it’s an investment in your online success. With EricHost, you’re not just a client; you’re a valued partner on your digital journey.",
      "Don’t compromise on your online presence. Join hands with us, and let’s elevate your website to new heights. Experience the power of reliable hosting, exceptional support, and unwavering security. Your website deserves nothing but the best, and that’s exactly what we deliver.",
      "Ready to embark on a seamless digital experience? Dive into the world of unmatched hosting solutions at EricHost. Let’s make your online dreams a reality."
    ],
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: HeroImage,
    imageAlt: "Card Image",
  },
];

const bronzePricing = {
  name: "Bronze",
  popular: true,
  price: "₹399",
  description: "Enhanced Capabilities For Growing Businesses",
  buttonText: "Buy Now",
  features: [
    "100 Websites",
    "100 Gb Disk Space",
    "Free Ssl Certificate",
    "50 Sub-Domains",
  ],
  href: "/plan"
};

const heroProps = {
  bronzePricing: bronzePricing,
  title: "90 % OFF on All",
  subtitle: "Plans.",
  tagline: "Elevate Your Online Presence with Seamless Hosting Solutions!",
  badgeText: "30-Day Money-Back Guarantee",
  features: [
    "Premium Servers",
    "Free Website Migration",
    "24/7 Customer Support",
    "99.9% uptime guarantee",
  ],
  price: "₹2.99",
  buttonText: "Explore Plans",
  planhref: "",
  heroImage: HeroImage
};

const page = (props: Props) => {
  return (
    <section>
      <Hero {...heroProps} />
      <Pricing data={data} />
      <FeaturedHosting />
      <DynamicInformation {...dynamicInformationProps} />
      <ChooseThePlans />

      {servicesProps.slice(0, -1).map((service, index) => (
        <div key={index} className={index % 2 === 0 ? "bg-[#4346C2]" : ""}>
          <Services {...service} />
        </div>
      ))}
      <Testimonials />
      <MapSection />
      <Cta />
      <div
        id="faq"
        className="container py-20   "
      >
        <SmallHeading
          headingContent={
            <>
              Frequently Asked{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Questions
              </span>
            </>
          }
        />

        <Services
          {...servicesProps[servicesProps.length-1]}
          // buttonLink={servicesProps[servicesProps.length-1].buttonLink}
          // description={servicesProps[servicesProps.length-1].description}
          // buttonText=""
          // imageAlt={servicesProps[servicesProps.length-1].imageAlt}
          // imageSrc={servicesProps[servicesProps.length-1].imageSrc}
          // subtitle={servicesProps[servicesProps.length-1].subtitle}
          // title={servicesProps[servicesProps.length-1].title}
        />

      </div>
    </section>
  );
};

export default page;
