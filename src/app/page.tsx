import {
  BigCard2,
  BigCard3,
  BigCard4,
  BigCard5,
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

type Props = {};
const servicesProps = [
  {
    title: "Robust Security, Fortified Defenses",
    subtitle: "Hard to Hack!",
    description:
      "For our Business Hosting solutions, Privacy is the cornerstone. We empathize the critical importance of safeguarding your customer information and business data that’s why we have employed advanced security measures, including DDoS protection, malware scanning, firewalls, and SSL certificates. Our multi-layered security system fortifies your website, ensuring your business operations remain secure and uninterrupted and shielding it from cyber threats.",
    buttonText: "Explore Plans",
    buttonLink: "/",
    imageSrc: BigCard3,
    textwhite: true,
    imageAlt: "Card Image",
  },
  {
    title: "Unrivaled Performance,\nUninterrupted Operations",
    subtitle: "Customised Servers at your Fingertip",
    description:
      "Every second counts in the fast-paced business environment. With Business Hosting at EricHost, you’re not just getting a hosting solution but also you’re securing an unwavering commitment to performance. Our servers optimized for speed and efficiency which ensure that your website loads instantly and provide visitors with a seamless and responsive experience. Say hello to a hosting environment engineered for excellence and Say goodbye to slow-loading pages.",
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BigCard2,
    imageAlt: "Card Image",
    reversecard: true,
  },
  {
    title: "Scalability for Growth, Flexibility for Expansion",
    subtitle: "Expand Servers with a Click",
    description:
      "Your business isn’t static, and nor should be your hosting solution. You’re empowered with scalability to blend with your ambitions whether you’re planning to expand your online portfolio or expecting a surge in website traffic due to a new product launch, our hosting solutions scale effortlessly. Your business grows with your website, ensuring your hosting environment evolves with your requirements.",
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BigCard4,
    textwhite: true,
    imageAlt: "Card Image",
  },
  {
    title: "Dedicated Support, Your Success Partner",
    subtitle: "24/7 Customer Support",
    description:
      "Your success is our priority. Our experienced support team comprises dedicated professionals passionate about helping your business throughout the journey. We offer 24/7 customer support, ensuring you receive regular assistance for any technical queries, configurations, or troubleshooting requirements. Think of us as your definitive partner, committed to ensuring your Business Hosting experience is swift and stress-free.",
    buttonText: "Explore Plans",
    buttonLink: "/plans",
    imageSrc: BigCard5,
    imageAlt: "Card Image",
    reversecard: true,
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
  title: "Business",
  subtitle: "Solutions!",
  tagline: "Elevate Your Business with Our Cutting-Edge Hosting Solutions",
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

const dynamicInformationProps = {
  title: "Business Hosting",
  subtitle: "Where Reliability Meets Results",
  href: "",
  paragraphs: [
    "Business Hosting is not just a hosting solution, it's a smart investment in your business's online success. It's about having the support, flexibility and resources to outperform your competitors and fulfilling your customers' expectations. Business Hosting provides the foundation for your digital triumphs whether you're running an e-commerce empire, managing a portfolio of websites, or establishing your brand's online presence.",
    "Ready to elevate your business to new heights of online excellence?",
    "Experience the power of Business Hosting with EricHost. Sign up now and embark on a hosting journey where results meets reliability and where your aspirations become digital realities.",
    "Let's redefine your online presence together – where performance is unbeatable, support is unwavering, and success is inevitable!",
  ],
  buttonText: "Explore All Plans"
};

const page = (props: Props) => {
  return (
     <section>
      <Hero {...heroProps} />
      <Pricing data={data} />
      <ChooseThePlans />
      <DynamicInformation {...dynamicInformationProps} />
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
  );
};

export default page;
