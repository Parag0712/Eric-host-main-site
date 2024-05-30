import { cloudhosting_about, managemnet, teamstronger } from "@/assests/AboutUs/assets";
import { Faq } from "@/assests/HomePage/assets";

export const servicesProps = [
    {
        title: "We Share the Same Values which Makes our Team Stronger",
        subtitle: "",
        description: [
            "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: teamstronger,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true,
       
    },
    {
        title: "99% Cloud Hosing High-speed Cutting-edge Platform",
        subtitle: "",
        description: [
            "Authoritatively transform functionalized information without cross-platform convergence. Quickly reconceptualize cross-unit e-markets without superior products. Appropriately foster timely collaboration and idea-sharing rather than magnetic potentialities. Authoritatively restore high standards in outsourcing whereas vertical meta-services. Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: cloudhosting_about,
        textwhite: false,
        imageAlt: "Card Image",
    },
    {
        title: "Our Own Interfaces for All Management Processes",
        subtitle: "",
        description: [
            "Authoritatively transform functionalized information without cross-platform convergence. Quickly reconceptualize cross-unit e-markets without superior products. Appropriately foster timely collaboration and idea-sharing rather than magnetic potentialities. Authoritatively restore high standards in outsourcing whereas vertical meta-services. Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.",
        ],
        buttonText: "Explore Plans",
        buttonLink: "#pricing",
        imageSrc: managemnet,
        imageAlt: "Card Image",
        reversecard: true,
        textwhite: true,
    }
];

export const support = {
    title: "24/7 Expert Hosting Support Our Customers Love",
    subtitle: "Welcome to Eric Host",
    description: [
        "With Erichost hosting you will get quality support for all your server related issues !"
    ],
    buttonText: "We're Here to Help You",
    buttonLink: "#pricing",
    imageSrc: Faq,
    imageAlt: "Card Image",
}