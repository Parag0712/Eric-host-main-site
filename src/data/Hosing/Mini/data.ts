import { EasytoUse, HeroSection, HighPerformance, ProfitableBusiness, ReliableTechnical } from "@/assests/MiniHosting/assets";

export const servicesProps = [
    {
        title: "Affordable Plans",
        subtitle: "Low-Cost Hosting for Small Projects",
        description: [
            "Mini Hosting offers budget-friendly plans tailored for small websites and projects. Get all the essential features without breaking the bank. Perfect for personal blogs, small business websites, and hobby projects."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: ProfitableBusiness,
        imageAlt: "Affordable Plans Image",
        reversecard: false,
        textwhite: true,
        offertitle: "Up to 50% off Mini Hosting",
        offers: [
            "Free Domain",
            "Easy Setup",
            "24/7 Customer Support"
        ]
    },
    {
        title: "Easy Setup and Management",
        subtitle: "Get Started Quickly",
        description: [
            "Mini Hosting comes with an intuitive control panel that makes it easy to set up and manage your website. No technical expertise required. Get your website online in minutes and start building your online presence."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: EasytoUse,
        reversecard: true,
        imageAlt: "Easy Setup Image",
    },
    {
        title: "Lightning-Fast Performance",
        subtitle: "Fast and Reliable",
        description: [
            "Despite its affordability, Mini Hosting doesn’t compromise on performance. Enjoy lightning-fast load times and reliable uptime, ensuring your visitors have a seamless and enjoyable experience on your website."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: HighPerformance,
        imageAlt: "Lightning-Fast Performance Image",
        reversecard: false,
        textwhite: true,
    },
    {
        title: "Reliable Support",
        subtitle: "Always Here to Help",
        description: [
            "Our support team is available 24/7 to assist you with any issues or questions. Whether you need help setting up your site or troubleshooting a problem, we’re here to ensure your Mini Hosting experience is smooth and hassle-free."
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: ReliableTechnical,
        imageAlt: "Reliable Support Image",
        reversecard: true,
    }

];


export const heroProps = {
    title: "Mini",
    subtitle: "Solutions!",
    tagline: "Ideal for Small Projects and Budgets",
    badgeText: "30-Day Money-Back Guarantee",
    features: [
        "Premium Servers",
        "Free Website Migration",
        "24/7 Customer Support",
        "Free SSL Certificate",
    ],
    price: "₹39.00",
    buttonText: "Explore Plans",
    planhref: "",
    heroImage: HeroSection
};