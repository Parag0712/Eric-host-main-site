"use client"
import { RaingImage, RaingImage2 } from "@/assests/config";
import Image, { StaticImageData } from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";
import { useRouter } from "next/navigation";
import Container from "../Conatianers/Container";

type PricingData = {
    name: string;
    popular?: boolean;
    price: string;
    description: string;
    buttonText: string;
    features: string[];
    href: string;
};
interface HeroDynamicProps {
    title: string;
    subtitle: string;
    badgeText?: string;
    tagline: string
    features: string[];
    price: string;
    buttonText: string;
    heroImage: StaticImageData;
    bronzePricing: PricingData;
    planhref: string;
}

export const Hero = ({
    title,
    subtitle,
    badgeText,
    tagline,
    features,
    price,
    buttonText,
    bronzePricing,
    heroImage,
    planhref
}: HeroDynamicProps) => {
    const router = useRouter();
    return (
        <section className="relative overflow-hidden">

        <Container className="container  grid md:grid-cols-[1.4fr,1fr]  lg:grid-cols-2 place-items-center xl:gap-y-44 py-16 md:pb-32 lg:pb-20 xl:py-14 xl:mb-20 gap-10">
            <div aria-hidden="true" className="flex  absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r  from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] "></div>
                <div className="bg-gradient-to-tl  from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
            </div>
            <div className="text-center lg:text-start z-50 space-y-5 col-span-2  md:col-auto">

                <main className="text-4xl sm:text-5xl z-50 md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    <div>
                        {badgeText && (
                            <Badge className="bg-green-500 mb-2 hover:bg-green-500">{badgeText}</Badge>
                        )}
                    </div>
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-primary  to-[#4346C2] text-transparent bg-clip-text">
                            {title}
                        </span>{" "}
                        Hosting
                    </h1>{" "}
                    <h2 className="inline">
                        <span className=" inline bg-gradient-to-r from-primary via-[#686de2] to-[#575AC8] text-transparent bg-clip-text">
                            {subtitle}
                        </span>{" "}
                    </h2>

                    <p className="mt-2 font-normal text-lg sm:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        {tagline}
                    </p>
                </main>

                <div className="">
                    <ul className="text-md font-[400] sm:text-lg text-ericheading md:w-10/12 mx-auto lg:mx-0">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex gap-2 items-center justify-center lg:justify-normal"
                            >
                                <FaCheckCircle className="text-green-600" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="text-[15px] md:text-[20px] mt-[-10px]">
                        <span className="text-[30px] md:text-[40px] font-bold">
                            {price}
                        </span>
                        /month
                    </div>
                    <div className="text-md leading-[20px] sm:text-lg">+3 Months Free</div>
                </div>

                <div className="space-y-4 md:space-y-0 sm:space-x-4">
                    <Button onClick={() => router.push(planhref)} className="w-9/12 rounded-[4px]  sm:w-1/3 text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4">
                        {buttonText}
                    </Button>
                    <a
                        rel="noreferrer noopener"
                        href={planhref}
                        target="_blank"
                        className={`w-9/12 sm:w-1/3 text-[14px] md:text-[16px] font-semibold  rounded-[4px]  py-5 sm:py-6 px-4 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        02:30:17:20
                    </a>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10 ">
                <HeroCards pricingData={bronzePricing} />
            </div>

            {/* <div className='w-full  hidden  col-span-2  sm:block'>
                <Image
                    src={RaingImage}
                    layout='responsive'
                    alt='Rating Image '
                    className="w-full object-cover"
                />
            </div> */}
            <div className='right w-full  col-span-2 mx-auto lg:order-2 max-w-[80%] md:hidden'>
                <Image
                    src={heroImage}
                    layout='responsive'
                    alt='HeroImage'
                    className='h-auto mxq-auto sm:max-h-[400px] object-contain lg:max-h-[100%]'
                />
            </div>
            {/* <div className='w-full max-w-[80%]  col-span-2 sm:max-w-[70%] m-auto sm:hidden'>
                <Image
                    src={RaingImage2}
                    height={100}
                    width={200}
                    layout='responsive'
                    alt='Rating Image'
                />
            </div> */}

            {/* Shadow effect */}
            <div className="shadow hidden"></div>
        </Container>
        </section>
    );
};