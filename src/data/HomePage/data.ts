import { DedicatedSecured, DedicatedcPanels, DigitalPresence, FreeUnlimited, HeroSection, Faq, AIBased } from "@/assests/HomePage/assets";


export const servicesProps = [
    {
        title: "Where Your Digital Presence Finds a Home!",
        subtitle: "Welcome to Eric Host",
        description: [
            "In the fast-paced digital landscape, having a reliable online presence is non-negotiable. Whether you’re an ambitious entrepreneur, a flourishing business, or a passionate blogger, your website is the gateway to your virtual identity. At EricHost, we understand the significance of a robust web hosting solution. That’s why we offer unparalleled services tailored to meet your unique needs, ensuring your website is not just online but thriving.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/",
        imageSrc: DigitalPresence,
        textwhite: false,
        imageAlt: "Card Image",
    },
    {
        title: "Dedicated Secured Servers",
        subtitle: "Welcome to Eric Host",
        description: [
            "We offer high-speed dedicated secure servers with NVMe SSD storage, free SSL certificates, easy-to-manage control panels, daily backups, global server locations, and a seven to thirty-day money-back guarantee. We are affordable and one of the best web hosting company in India.​",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: DedicatedSecured,
        imageAlt: "Card Image",
        reversecard: true,
        offertitle: "Up to 75% off Hosting",
        offers: [
            "Free Domain",
            "Free Website Migration",
            "24/7 Customer Support"
        ]
    },
    {
        title: "Free Unlimited Migrations",
        subtitle: "Transfer Websites hassel-free",
        description: [
            "In the fast-paced digital landscape, having a reliable online presence is non-negotiable. Whether you’re an ambitious entrepreneur, a flourishing business, or a passionate blogger, your website is the gateway to your virtual identity. At EricHost, we understand the significance of a robust web hosting solution. That’s why we offer unparalleled services tailored to meet your unique needs, ensuring your website is not just online but thriving.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: FreeUnlimited,
        imageAlt: "Card Image",
        reversecard: false,
    },
    {
        title: "Dedicated cPanels",
        subtitle: "Easy to use, with tons of Add-ons",
        description: [
            "We offer high-speed dedicated secure servers with NVMe SSD storage, free SSL certificates, easy-to-manage control panels, daily backups, global server locations, and a seven to thirty-day money-back guarantee. We are affordable and one of the best web hosting company in India.​",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: DedicatedcPanels,
        imageAlt: "Card Image",
        reversecard: true,
        offertitle: "Up to 75% off Hosting",
        offers: [
            "Free Domain",
            "Free Website Migration",
            "24/7 Customer Support"
        ]
    },
    {
        title: "AI Based Smart Servers",
        subtitle: "Welcome to Eric Host",
        description: [
            "In the fast-paced digital landscape, having a reliable online presence is non-negotiable. Whether you’re an ambitious entrepreneur, a flourishing business, or a passionate blogger, your website is the gateway to your virtual identity. At EricHost, we understand the significance of a robust web hosting solution. That’s why we offer unparalleled services tailored to meet your unique needs, ensuring your website is not just online but thriving.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "/plans",
        imageSrc: AIBased,
        imageAlt: "Card Image",
        reversecard: false,
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
        imageSrc: Faq,
        imageAlt: "Card Image",
        reversecard: true
    }
];

export const support = {
    title: "24/7 Expert Hosting Support Our Customers Love",
    subtitle: "Welcome to Eric Host",
    description: [
        "With Erichost hosting you will get quality support for all your server related issues !"
    ],
    buttonText: "We're Here to Help You",
    buttonLink: "/",
    imageSrc: Faq,
    imageAlt: "Card Image",
}

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
    bronzePricing: bronzePricing,
    title: "75% OFF on All",
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
    heroImage: HeroSection
};
