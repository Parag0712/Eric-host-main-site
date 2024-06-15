import { cloudhosting_about, managemnet, teamstronger } from "@/assests/Domain/assets";
import { Faq } from "@/assests/HomePage/assets";

export const servicesProps = [
    {
        title: "100% Control on Your Web Projects - Transfer Now",
        subtitle: "",
        description: [
            "Once you have everything you need, perform these 4 simple steps, ti transfer your domain with us.",
        ],
        buttonText: "Transfer Domain",
        buttonLink: "cart.php?a=add&domain=transfer",
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
        buttonText: "Transfer Domain",
        buttonLink: "cart.php?a=add&domain=transfer",
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
];

export const heroSectionContent = {
    title:"Transfer Your Domain Name Get 24/7 Support.",
    description:"Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites.",
    label:"Search Domain",
    placeholder:"Transfer your Domain",
    redirectBaseUrl:"cart.php?a=add&domain=transfer"
}