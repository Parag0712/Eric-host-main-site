import { FaCheckCircle } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { RaingImage, RaingImage2 } from "@/assests/config";

export interface HeroDynamicProps {
    title: string;
    subtitle: string;
    badgeText?: string;
    tagline:string
    features: string[];
    price: string;
    buttonText: string;
    heroImage: StaticImageData;
  }
export const ImageHeroSection = ({
    title,
    subtitle,
    badgeText,
    tagline,
    features,
    price,
    buttonText,
    heroImage,
}: HeroDynamicProps) => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center xl:gap-y-44 justify-between py-16 md:pb-32 lg:py-12 xl:py-14 xl:mb-20 gap-10">
            <div className="text-center lg:text-start space-y-5 col-span-2 lg:col-auto ">
                <main className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold">
                    <div>
                        {badgeText && (
                            <Badge className="bg-green-500 mb-2">{badgeText}</Badge>
                        )}
                    </div>
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-primary  to-[#4346C2] text-transparent bg-clip-text">
                            {title}
                        </span>{" "}
                        Hosting
                    </h1>{" "}
                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-primary via-[#686de2] to-[#575AC8] text-transparent bg-clip-text">
                            {subtitle}
                        </span>{" "}
                    </h2>

                    <p className="font-normal text-lg sm:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
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
                    <Button className="w-9/12 rounded-[4px]  sm:w-1/3 text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4">
                        {buttonText}
                    </Button>
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/leoMirandaa/shadcn-landing-page.git"
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
            <div className="z-10 w-full hidden lg:block">
                <Image
                    src={heroImage}
                    layout="responsive"
                    alt="HeroImage"
                    className="h-auto  sm:max-h-[400px] object-contain lg:max-h-[100%]"
                />
            </div>

            {/* <div className='w-full  hidden  col-span-2  sm:block'>
                <Image
                    src={RaingImage}
                    layout='responsive'
                    alt='Rating Image '
                    className="w-full object-cover"
                />
            </div> */}

            <div className='right w-full  col-span-2 mx-auto lg:order-2 max-w-[80%] lg:hidden'>
                <Image
                    src={heroImage}
                    layout='responsive'
                    alt='HeroImage'
                    className='h-auto mx-auto sm:max-h-[400px] object-contain lg:max-h-[100%]'
                />
            </div>
            {/* Rating Image */}
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
        </section>
    );
};

export default ImageHeroSection;
