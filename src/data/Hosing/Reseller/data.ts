import { HeroSection,BusinessCentric,DedicatedSupport,RobustSecurity,ScalabilityforGrowth,UnrivaledPerformance } from "@/assests/BusinessHosting/assets";

export const servicesProps = [
    {
        title: "Unrivaled Performance, Uninterrupted Operations",
        subtitle: "Customised Servers at your Fingertip",
        description: [
            "Every second counts in the fast-paced business environment. With Business Hosting at EricHost, you’re not just getting a hosting solution but also you’re securing an unwavering commitment to performance. Our servers optimized for speed and efficiency which ensure that your website loads instantly and provide visitors with a seamless and responsive experience. Say hello to a hosting environment engineered for excellence and Say goodbye to slow-loading pages.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/",
        imageSrc: UnrivaledPerformance,
        reversecard: false,
        imageAlt: "Card Image",
    },
    {
        title: "Robust Security, Fortified Defenses",
        subtitle: "Hard to Hack!",
        description: [
            "For our Business Hosting solutions, Privacy is the cornerstone. We empathize the critical importance of safeguarding your customer information and business data that’s why we have employed advanced security measures, including DDoS protection, malware scanning, firewalls, and SSL certificates. Our multi-layered security system fortifies your website, ensuring your business operations remain secure and uninterrupted and shielding it from cyber threats.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: RobustSecurity,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true,
    },

    {
        title: "Scalability for Growth, Flexibility for Expansion",
        subtitle: "Expand Servers with a Click",
        description: [
            "our business isn’t static, and nor should be your hosting solution. You’re empowered with scalability to blend with your ambitions whether you’re planning to expand your online portfolio or expecting a surge in website traffic due to a new product launch, our hosting solutions scale effortlessly. Your business grows with your website, ensuring your hosting environment evolves with your requirements.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: ScalabilityforGrowth,
        imageAlt: "Card Image",
        reversecard: false,
    },
    {
        title: "Dedicated Support, Your Success Partner",
        subtitle: "24/7 Customer Support",
        description: [
            "Your success is our priority. Our experienced support team comprises dedicated professionals passionate about helping your business throughout the journey. We offer 24/7 customer support, ensuring you receive regular assistance for any technical queries, configurations, or troubleshooting requirements. Think of us as your definitive partner, committed to ensuring your Business Hosting experience is swift and stress-free.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: DedicatedSupport,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true,
        offertitle: "Up to 75% off Hosting",
        offers: [
            "Free Domain",
            "Free Website Migration",
            "24/7 Customer Support"
        ]
    },
    {
        title: "Business-Centric Features, Competitive Edge",
        subtitle: "Personalised Servers",
        description: [
            "Our Business Hosting Plans are loaded with features designed specifically for business operations. From advanced e-commerce integration and email solutions to robust analytics tools, we provide a wide range of comprehensive suite of business oriented features. These tools allow you to make data-driven decisions, streamline your online operations and enhance customer engagement. Experience the incredible blend of cutting-edge technology and business intelligence with EricHost.",
        ],
        buttonText: "Get Started",
        buttonLink: "/plans",
        imageSrc: BusinessCentric,
        imageAlt: "Card Image",
        reversecard: false,
    }
];

export const bronzePricing = {
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

export const heroProps = {
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
    heroImage: HeroSection
  };