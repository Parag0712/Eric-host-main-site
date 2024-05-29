import { DedicatedSupport, ScalabilityforGrowth,BusinessCentric,UnrivaledPerformance } from "@/assests/BusinessHosting/assets";
import { HeroSection, SecurityIsOurTopPriority } from "@/assests/CloudHosting/assets";

export const servicesProps = [
    {
        title: "Customizable Cloud Hosting Solutions",
        subtitle: "Tailored Performance & Reliability",
        description: [
            "Our Cloud Hosting solutions are designed to be highly customizable, providing tailored performance and reliability based on your specific needs.",
            "Experience lightning-fast load times and seamless scalability with our advanced cloud infrastructure, optimized for speed and efficiency.",
            "Rest assured with our 99.9% uptime guarantee, ensuring your website is always accessible.",
            "We prioritize security with advanced protection measures to safeguard your data and applications against threats."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: UnrivaledPerformance,
        reversecard: false,
        imageAlt: "Customizable Cloud Hosting Image",
    },
    {
        title: "Flexible Hosting Solutions",
        subtitle: "Adapt to Your Business Needs",
        description: [
            "Our Cloud Hosting offers unmatched flexibility, allowing you to adapt resources and configurations to meet your business requirements.",
            "Effortlessly manage your hosting environment with our intuitive control panel, giving you complete control over your services.",
            "Seamlessly integrate with various tools and platforms to enhance your hosting experience and streamline workflows.",
            "Scale resources up or down on demand, ensuring cost-efficiency by paying only for what you need."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: BusinessCentric,
        imageAlt: "Flexible Cloud Hosting Image",
        reversecard: true,
        textwhite: true,
    },
    {
        title: "Enhanced Security and Compliance",
        subtitle: "Protecting Your Online Presence",
        description: [
            "Security is paramount in our Cloud Hosting solutions. We implement rigorous security measures to protect your data and applications.",
            "Our platform complies with industry standards and regulations, ensuring the integrity and confidentiality of your data.",
            "Enjoy advanced security features like DDoS protection, firewalls, and automated backups, ensuring your data is secure and accessible.",
            "Our dedicated security team continuously monitors and updates our systems to mitigate emerging threats."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: SecurityIsOurTopPriority,
        imageAlt: "Cloud Hosting Security Image",
        reversecard: false,
    },
    {
        title: "Round-the-Clock Expert Support",
        subtitle: "Your Hosting Partner",
        description: [
            "Our support team is available 24/7 to address any queries or issues regarding your Cloud Hosting service.",
            "Receive expert advice and troubleshooting from our highly trained professionals, ensuring your website runs smoothly.",
            "Leverage our extensive knowledge base and support resources to maximize the benefits of your hosting plan.",
            "We are dedicated to your success and are here to support you every step of the way."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
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
        title: "Cutting-Edge Infrastructure",
        subtitle: "Powerful Performance",
        description: [
            "Our Cloud Hosting infrastructure utilizes the latest technology to deliver exceptional performance and reliability.",
            "Benefit from our state-of-the-art data centers, equipped with redundant power and network connections for maximum uptime.",
            "Experience high-speed data transfer and minimal latency with our globally distributed network.",
            "Our infrastructure is engineered to support high-demand applications and websites, offering a robust platform for your online presence."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: ScalabilityforGrowth,
        imageAlt: "Cloud Hosting Infrastructure Image",
        reversecard: false,
    }
];

export const heroProps = {
    title: "Cloud",
    subtitle: "Solutions!",
    tagline: "Seamlessly Transition Your Business to the Cloud!",
    badgeText: "30-Day Money-Back Guarantee",
    features: [
        "Free SSL Certificate",
        "Secure Access Manager",
        "24/7 Customer Support",
        "99.9% uptime guarantee",
    ],
    price: "₹69",
    buttonText: "Explore Plans",
    planhref: "#pricing",
    heroImage: HeroSection
};