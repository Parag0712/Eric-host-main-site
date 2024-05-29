import {AffordableExcellence,Customizationfor,DedicatedResources,EnhancedSecurity,ExpertSupport,HeroSection,HighAvailability,ScalabilityBeyond} from "@/assests/VpsServer/assets";

export const servicesProps = [
    {
        title: "Dedicated Resources, Ultimate Control",
        subtitle: "Hard to Hack!",
        description: [
            "VPS Hosting, short for Virtual Private Server Hosting, offers dedicated resources within a shared environment. Unlike shared hosting, where resources are divided among multiple users, VPS Hosting provides virtualized servers with dedicated CPU, RAM, and storage. This ensures unparalleled control and performance, allowing you to run resource-intensive applications and websites smoothly."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: DedicatedResources,
        imageAlt: "Card Image",
        reversecard: false,
        textwhite: false,
    },
    {
        title: "Scalability Beyond Limits",
        subtitle: "Transfer Websites hassle-free",
        description: [
            "One of the key advantages of VPS Hosting is its scalability. Whether you’re a startup anticipating rapid growth or an established business with increasing traffic, VPS Hosting can scale resources instantly. Need more RAM for your growing database? Require additional processing power for your high-traffic website? With VPS Hosting, you can upgrade resources seamlessly, ensuring your hosting environment evolves with your needs.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: ScalabilityBeyond,
        reversecard: true,
        textwhite: true,
        imageAlt: "Card Image",
    },
    {
        title: "Enhanced Security for Peace of Mind",
        subtitle: "30-Day Money-Back Guarantee",
        description: [
            "Security is a top priority in the digital realm. VPS Hosting offers enhanced security features, including isolated server environments, firewalls, regular security audits, and optional DDoS protection. Your data and applications are shielded from potential threats, providing you with peace of mind and allowing you to focus on your core activities without worrying about security breaches.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: EnhancedSecurity,
        imageAlt: "Card Image",
        reversecard: false,
        textwhite: false,
    },

    {
        title: "Customization for Tailored Solutions",
        subtitle: "Hard to Hack!",
        description: [
            "VPS Hosting grants you complete root access, allowing you to customize your server environment according to your specific requirements. Install custom software, configure security settings, and optimize server parameters – the power is in your hands. This level of customization ensures you have a hosting solution tailored to your unique needs, providing a competitive edge in the digital landscape.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: Customizationfor,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true
    },
    {
        title: "High Availability and Reliability",
        subtitle: "Transfer Websites hassle-free",
        description: [
            "VPS Hosting offers high availability and reliability, thanks to redundant hardware, backup systems, and failover mechanisms. In the event of a hardware failure, your virtual server can be quickly migrated to another physical server, minimizing downtime and ensuring your website or applications remain accessible to your visitors. Experience uninterrupted service with VPS Hosting from EricHost.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: HighAvailability,
        imageAlt: "Card Image",
        reversecard: false,
    },
    {
        title: "Expert Support, Every Step of the Way",
        subtitle: "Welcome to Eric Host",
        description: [
            "We understand that navigating the intricacies of hosting environments might be daunting. That’s why EricHost offers expert support available 24/7. Our knowledgeable support team comprises experienced professionals ready to assist you with any technical queries, server configurations, or troubleshooting requirements. Consider us your technical partners, ensuring your VPS Hosting experience is smooth and hassle-free.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: ExpertSupport,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true,
    },
    {
        title: "Affordable Excellence, Unmatched Value",
        subtitle: "Hard to Hack!",
        description: [
            "While VPS Hosting offers a wealth of features and benefits, it remains an affordable solution for businesses and developers. At EricHost, we believe in offering unmatched value for your investment. Our VPS Hosting plans are competitively priced, ensuring you receive top-notch service without breaking the bank. Experience the synergy of affordability and excellence with us.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: AffordableExcellence,
        imageAlt: "Card Image",
        reversecard: false,
    }
];
export const heroProps = {
    title: "VPS",
    subtitle: "Solutions!",
    tagline: "Where Unlimited Possibilities Meet ",
    badgeText: "30-Day Money-Back Guarantee",
    features: [
        "Premium Servers",
        "Free Website Migration",
        "24/7 Customer Support",
        "99.9% uptime guarantee",
    ],
    price: "₹599",
    buttonText: "Explore Plans",
    planhref: "",
    heroImage: HeroSection
};