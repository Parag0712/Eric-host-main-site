"use client"
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
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
    instruction?: any[];
    instructionNumber?: boolean;
    customElements?: ReactNode;
}

export const InstructionCard: FC<ServicesProps> = ({
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    reversecard = false,
    textwhite = false,
    instruction,
    instructionNumber,
    customElements
}) => {
    const router = useRouter();
    return (
        <Container className=" py-16 sm:py-16">
            <div className={`grid ${reversecard ? "md:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"}  lg:grid-cols-2  gap-8 place-items-center ${textwhite ? "text-white" : ""}`} >
                <div className={`order-2 ${reversecard ? "" : "lg:order-1"}`}>
                    <p className={`bg-gradient-to-b font-semibold from-[#4346C2]/70 to-[#4346C2] text-transparent bg-clip-text  md:text-[20px] mb-2 ${textwhite ? "text-white" : ""}`}>
                        {subtitle}
                    </p>
                    <h2 className={`text-3xl font-poppins text-black md:text-4xl font-[600] mb-1 ${textwhite ? "text-white" : ""}`}>
                        {title}
                    </h2>
                    <div className="flex flex-col gap-3 mt-2">
                        {
                            description.map((data, idx) => (
                                <p key={idx} className="text-sm md:text-md lg:text-[1.1rem] lg:leading-[1.5rem] mt-2">
                                    {data}
                                </p>
                            ))
                        }
                    </div>
                    {
                        instruction && (
                            <div className="mt-3">
                                <ul className="mt-1" style={{ listStyleType: "disc" }}>
                                    {instruction?.map((inst, index) => (
                                        <li key={index} className="text-lg flex items-center gap-2 ">
                                            {instructionNumber ? <span className="font-semibold p-0 mr-1">{index + 1}.</span> : <FaCheckCircle className="text-green-500  text-lg" />}
                                            {inst}
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
                            onClick={() => router.push(buttonLink)}
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
