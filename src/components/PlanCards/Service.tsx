"use client"
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC, FormEvent, ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import Container from "../Conatianers/Container";

interface ServicesProps {
    title: ReactNode;
    subtitle: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    reversecard?: boolean;
    textwhite?: boolean;
    offers?: any[];
    offertitle?: string;
    customElements?: ReactNode;
    shouldBePurple?:boolean
}

export const Services: FC<ServicesProps> = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    reversecard = false,
    offers,
    offertitle,
    customElements,
    shouldBePurple
}) => {
    
    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        const target = document.querySelector(buttonLink);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Container className=" py-16 sm:py-16">
            <div className={`grid ${reversecard ? "lg:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"}   gap-8 place-items-center text-inherit`} >
                <div className={`order-2 ${reversecard ? "" : "lg:order-1"}`}>
                    <p className={`bg-gradient-to-b font-semibold from-[#4346C2]/70 to-[#4346C2] text-transparent bg-clip-text  md:text-[20px] mb-2 ${shouldBePurple == true? "" : "text-inherit"}`}>
                        {subtitle}
                    </p>
                    <h2 className={`text-2xl font-poppins text-black md:text-4xl font-[600] mb-1 text-inherit`}>
                        {title}
                    </h2>
                    <div className="flex flex-col gap-3 mt-2">
                        {
                            description.map((data, idx) => (
                                <p key={idx} className="text-sm md:text-md lg:text-[1rem] lg:leading-[1.4rem] mt-2">
                                    {data}
                                </p>
                            ))
                        }
                    </div>
                    {
                        offertitle && (
                            <div className="mt-3">
                                <h3 className={`bg-gradient-to-b font-semibold from-[#4346C2]/70 to-[#4346C2] bg-clip-text text-lg md:text-xl text-inherit `}>
                                    {offertitle}
                                </h3>
                                <ul className="pl-2 mt-1" style={{ listStyleType: "disc" }}>
                                    {offers?.map((offer, index) => (
                                        <li className="flex items-center gap-2">
                                            <FaCheckCircle className="text-green-500  text-lg" />
                                            {offer}
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        )
                    }

                    <div className="mt-3">
                        {customElements}
                    </div>
                    <div>
                        <Button
                            onClick={handleClick}
                            className="rounded-[4px] w-[200px] mt-1  md:mt-6 text-[14px] md:text-[16px] font-semibold mx-auto py-4 md:py-5 px-4 text-white bg-green-500 hover:bg-green-600">
                            {buttonText}
                        </Button>
                    </div>
                </div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="responsive"
                    className={`order-1 max-h-[300px] md:max-h-[250px] lg:max-h-[] object-contain rounded-2xl md:order-1  xl:max-w-[85%] xl:min-h-[450px] xl:max-h-[450px]`}

                />
            </div>
        </Container>
    );
};
