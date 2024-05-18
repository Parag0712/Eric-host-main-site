import { DedicatedSupport, ScalabilityforGrowth,BusinessCentric,UnrivaledPerformance } from "@/assests/BusinessHosting/assets";
import { HeroSection, SecurityIsOurTopPriority } from "@/assests/CloudHosting/assets";
export const servicesProps = [
    {
        title: "Scalable Cloud Hosting Solutions",
        subtitle: "Performance & Reliability",
        description: [
            "Our Cloud Hosting solutions are designed to provide exceptional performance and reliability. With automatic scaling, your website can handle traffic spikes effortlessly, ensuring a smooth experience for your visitors.",
            "Experience blazing-fast load times with our cutting-edge cloud infrastructure, optimized for speed and efficiency.",
            "Enjoy the peace of mind that comes with our 99.9% uptime guarantee, keeping your website accessible around the clock.",
            "Our cloud hosting environment is highly secure, with advanced protection measures in place to safeguard your data and applications."
        ],
        buttonText: "Explore Plans",
        buttonLink: "/cloud-hosting",
        imageSrc: UnrivaledPerformance,
        reversecard: false,
        imageAlt: "Cloud Hosting Performance Image",
    },
    {
        title: "Unmatched Flexibility and Control",
        subtitle: "Tailored to Your Needs",
        description: [
            "Our Cloud Hosting offers unparalleled flexibility, allowing you to customize your resources and configurations to suit your specific requirements.",
            "Easily manage your hosting environment with our intuitive control panel, giving you full control over your applications and services.",
            "Integrate with a wide range of tools and platforms to enhance your cloud hosting experience and streamline your workflow.",
            "Benefit from the ability to scale resources up or down on demand, ensuring you only pay for what you need."
        ],
        buttonText: "Discover More",
        buttonLink: "/cloud-hosting",
        imageSrc: BusinessCentric,
        imageAlt: "Cloud Hosting Flexibility Image",
        reversecard: true,
        textwhite: true,
    },
    {
        title: "Robust Security and Compliance",
        subtitle: "Protecting Your Data",
        description: [
            "Security is a top priority with our Cloud Hosting solutions. We implement multi-layered security measures to protect your data and applications.",
            "Our platform is compliant with industry standards and regulations, ensuring your data is handled with the highest level of integrity.",
            "Enjoy features like DDoS protection, firewalls, and automated backups, keeping your data secure and available when you need it.",
            "Our dedicated security team continuously monitors and updates our systems to safeguard against emerging threats."
        ],
        buttonText: "Secure Your Site",
        buttonLink: "/cloud-hosting",
        imageSrc: SecurityIsOurTopPriority,
        imageAlt: "Cloud Hosting Security Image",
        reversecard: false,
    },
    {
        title: "24/7 Expert Support",
        subtitle: "Always Here to Help",
        description: [
            "Our support team is available 24/7 to assist you with any issues or questions you may have regarding your Cloud Hosting service.",
            "Get expert advice and troubleshooting from our highly trained professionals, ensuring your website runs smoothly at all times.",
            "Take advantage of our extensive knowledge base and support resources to help you get the most out of your hosting plan.",
            "We are committed to your success and are here to support you every step of the way."
        ],
        buttonText: "Contact Support",
        buttonLink: "/support",
        imageSrc: DedicatedSupport,
        imageAlt: "Cloud Hosting Support Image",
        reversecard: true,
        textwhite: true,
        offertitle: "Up to 60% off Cloud Hosting",
        offers: [
            "Free Domain",
            "Free Website Migration",
            "24/7 Customer Support"
        ]
    },
    {
        title: "High-Performance Infrastructure",
        subtitle: "Cutting-Edge Technology",
        description: [
            "Our Cloud Hosting infrastructure is built using the latest technology to ensure high performance and reliability.",
            "Benefit from our state-of-the-art data centers, featuring redundant power and network connections for maximum uptime.",
            "Experience faster data transfer speeds and reduced latency with our globally distributed network.",
            "Our infrastructure is designed to support high-demand applications and websites, providing a robust platform for your online presence."
        ],
        buttonText: "Get Started",
        buttonLink: "/cloud-hosting",
        imageSrc: ScalabilityforGrowth,
        imageAlt: "Cloud Hosting Infrastructure Image",
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
    title: "Cloud",
    subtitle: "Solutions!",
    tagline: "Your Business in the Cloud!",
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