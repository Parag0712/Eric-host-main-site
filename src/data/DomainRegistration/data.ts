import { cloudhosting_about, managemnet, teamstronger } from "@/assests/Domain/assets";
import { Faq } from "@/assests/HomePage/assets";

export const servicesProps = [
    {
        title: "Find the Perfect Domain for you",
        subtitle: "",
        description: [
            "Once you have everything you need, perform these 4 simple steps, to Register .",
        ],
        buttonText: "Register Domain",
        buttonLink: "cart.php?a=add&domain=register",
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
        buttonText: "Register Domain",
        buttonLink: "#domainregister",
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
        buttonText: "Register Domain",
        buttonLink: "#domainregister",
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
    buttonLink: "#domainregister",
    imageSrc: Faq,
    imageAlt: "Card Image",
}

export const heroSectionContent = {

    title:"Register Your Domain Name Get 24/7 Support.",
    description:"Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites.",
    label:"Search article",
    placeholder:"Register your Domain",
    redirectBaseUrl:"cart.php?a=add&domain=register",
}