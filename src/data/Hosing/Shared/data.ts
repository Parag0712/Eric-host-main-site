import { CostEffective, DedicatedSecured, FreeUnlimited, HeroSection, SecurityIsOurTop } from "@/assests/SharedHosting/assets";

export const servicesProps = [
    {
        title: "Dedicated Secured Servers",
        subtitle: "Dedication beyond Imagination",
        description: [
            "We offer secure and high-speed dedicated servers with NVMe SSD storage, easy-to-manage control panels, global server locations, free SSL certificates, daily backups, and thirty-day money-back guarantee."
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: DedicatedSecured,
        imageAlt: "Card Image",
        reversecard: false,
        textwhite: true,
        offertitle: "Up to 75% off Hosting",
        offers: [
            "Free Domain",
            "Free Website Migration",
            "24/7 Customer Support"
        ]
    },
    {
        title: "Security Is Our Top Priority",
        subtitle: "30-Day Money-Back Guarantee",
        description: [
            "Free SSL certificates installed automatically to procure your client's sensitive information.",
            "Malware scanner to proactively detect and clear away harmful files",
            "Privacy protection to keep your personal information protected",
            "Defend against unwanted access by applying IP and country blocking, included with Eric Host CDN."
        ],
        buttonText: "Explore Plans",
        buttonLink: "/",
        imageSrc: SecurityIsOurTop,
        reversecard: true,
        imageAlt: "Card Image",
    },
    {
        title: "Free Unlimited Migrations",
        subtitle: "Transfer Websites hassel-free",
        description: [
            "Having a reliable online presence is non-negotiable in the fast-paced digital landscape. Whether you’re a flourishing businessman, a passionate blogger or an ambitious entrepreneur, your website is the preamble to your virtual identity. At EricHost, we are conscious of the significance of a robust web hosting solution. On account of this we offer unparalleled services tailored to meet your unique requirements, ensuring your website is not just online but thriving.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: FreeUnlimited,
        imageAlt: "Card Image",
        reversecard: false,
        textwhite: true,
    },

    {
        title: "Cost-Effective Solution Without Compromising Quality",
        subtitle: "Welcome to Eric Host",
        description: [
            "For those seeking a budget-friendly hosting option, Shared Hosting is the perfect solution. With shared Hosting, various websites share resources on a single server, making it incredibly cost-effective. At EricHost, we provide pocket friendly shared hosting plans without compromising on quality so that you can enjoy reliable hosting without burning a hole in your pocket.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc:CostEffective,
        imageAlt: "Card Image",
        reversecard: true,
    }
];

export const heroProps = {
    title: "Shared ",
    subtitle: "Solutions!",
    tagline: "Your Gateway to Affordable and Reliable",
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