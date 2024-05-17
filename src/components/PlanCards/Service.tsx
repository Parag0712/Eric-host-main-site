"use client"
import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

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
    textwhite = false,
}) => {
    const router = useRouter();
    return (
        <section className="container py-16 sm:py-24">
            <div className={`grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center ${textwhite ? "text-white" : ""}`} >
                <div className={`order-2 ${reversecard ? "" : "lg:order-1"}`}>
                    <p className={`bg-gradient-to-b font-semibold from-[#4346C2]/70 to-[#4346C2] text-transparent bg-clip-text  md:text-lg mb-2 ${textwhite ? "text-white" : ""}`}>
                        {subtitle}
                    </p>
                    <h2 className={`text-2xl  text-black md:text-4xl font-bold mb-3 ${textwhite ? "text-white" : ""}`}>
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
                    <div>
                        <Button
                            onClick={() => router.push(buttonLink)}
                            className="rounded-[4px] w-[200px] mt-5 md:mt-6 text-[14px] md:text-[16px] font-semibold mx-auto py-4 md:py-5 px-4 text-white bg-green-500 hover:bg-green-600">
                            {buttonText}
                        </Button>
                    </div>
                </div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="responsive"
                    className={`order-1  rounded-2xl lg:order-1 md:max-w-[80%] lg:max-w-[85%]`}
                />
            </div>
        </section>
    );
};
