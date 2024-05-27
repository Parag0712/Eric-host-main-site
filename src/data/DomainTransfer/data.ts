import { cloudhosting_about, managemnet, teamstronger } from "@/assests/AboutUs/assets";
import { Faq } from "@/assests/HomePage/assets";

export const servicesProps = [
    {
        title: "100% Control on Your Web Projects - Transfer Now",
        subtitle: "",
        description: [
            "Once you have everything you need, perform these 4 simple steps, ti transfer your domain with us.",
        ],
        buttonText: "Get Domain",
        buttonLink: "/plans",
        imageSrc: teamstronger,
        imageAlt: "Card Image",
        reversecard: false,
        instruction: [
            "Enter the domain name you want to transfer.",
            "Proceed with the purchase.",
            "Enter the EPP code.",
            "Confirm your transfer."
        ],
        instructionNumber: true
    },
    {
        title: "Before transferring your domain, make sure of the following",
        subtitle: "",
        description: [
            "Phosfluorescently fashion front-end web-readiness vis-a-vis robust fabricate scalable web-readiness technologies.",
        ],
        buttonText: "Get Domain",
        buttonLink: "/plans",
        imageSrc: teamstronger,
        imageAlt: "Card Image",
        reversecard: true,
        instruction: [
            "It's been more than 60 days since the domain registration or last transfer.",
            "Domain is not in Pending Delete or Redemption status.",
            "The authorisation code that proves your ownership of the domain.",
            "You can get the EPP code from the current domain provider.",
            "Whois privacy protection is disabled.",
            "Unlock the domain you want to transfer at your current registrar.",
            "Most domain transfers complete in 5-7 days."
        ],
        instructionNumber: false
    },
    {
        title: "99% Domain Transfer Success Rate on Our Cutting-edge Platform",
        subtitle: "",
        description: [
            "Authoritatively transform your domain management experience with our streamlined transfer process. Quickly and securely transfer your domains without any hassle. Appropriately foster timely collaboration and support rather than magnetic potentialities. Authoritatively restore high standards in domain management services. Compellingly reconceptualize out-of-the-box domain transfer through plug-and-play synergy.",
        ],
        buttonText: "Transfer Your Domain",
        buttonLink: "/transfer",
        imageSrc: cloudhosting_about,
        reversecard: true,
        imageAlt: "Card Image",
    },
    {
        title: "Our Own Interfaces for All Domain Management Processes",
        subtitle: "",
        description: [
            "Authoritatively transform your domain management experience with our user-friendly interfaces. Quickly manage and transfer your domains with superior tools. Appropriately foster timely collaboration and support rather than magnetic potentialities. Authoritatively restore high standards in domain management services. Compellingly reconceptualize out-of-the-box domain management through plug-and-play synergy.",
        ],
        buttonText: "Transfer Your Domain",
        buttonLink: "/transfer",
        imageSrc: managemnet,
        imageAlt: "Card Image",

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
export const heroSectionContent = {
    title:"Transfer Your Domain Name Get 24/7 Support.",
    description:"Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites.",
    label:"Search Domain",
    placeholder:"Transfer your Domain",
    redirectBaseUrl:"https://example.com/search"
}