import { cloudhosting_about, managemnet, teamstronger } from "@/assests/AboutUs/assets";
import { Faq } from "@/assests/HomePage/assets";

export const servicesProps = [
    {
        title: "Find the Perfect Domain for you",
        subtitle: "",
        description: [
            "Once you have everything you need, perform these 4 simple steps, to Register .",
        ],
        buttonText: "Get Domain",
        buttonLink: "/plans",
        imageSrc: teamstronger,
        imageAlt: "Card Image",
        reversecard: false,
        instruction:[
            "Decide on a domain name extension.",
            "Enter the domain name you want to register.",
            "Add it to your cart.",
            "Make payment."
        ],
        instructionNumber:true
    },
    {
        title: "99% Domain Registration Success Rate on Our Cutting-edge Platform",
        subtitle: "",
        description: [
            "Transform your online presence with our streamlined domain registration process. Register your domains quickly and securely with minimal effort. Benefit from our high success rate and top-notch support."
        ],
        buttonText: "Register Your Domain",
        buttonLink: "/register",
        imageSrc: cloudhosting_about,
        reversecard: true,
        imageAlt: "Domain Registration Success"
    },
    {
        title: "Our Interfaces for All Domain Management Processes",
        subtitle: "",
        description: [
            "Manage your domains effortlessly with our user-friendly interfaces. Benefit from superior tools designed for easy domain management and registration. Experience high standards in domain services with our platform."
        ],
        buttonText: "Manage Your Domain",
        buttonLink: "/manage",
        imageSrc: managemnet,
        imageAlt: "Domain Management"
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