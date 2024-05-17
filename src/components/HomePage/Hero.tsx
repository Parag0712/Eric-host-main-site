import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { HeroImage, HeroImage1, RaingImage, RaingImage2 } from "@/assests/config";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center  xl:gap-y-44 py-20 md:py-32 lg:py-24 xl:py-32  gap-10">
            <div className="text-center lg:text-start space-y-5 col-span-2 lg:col-auto">
                <main className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold">
                    <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-primary  to-[#4346C2] text-transparent bg-clip-text">
                            Busines
                        </span>{" "}
                        Hosting
                    </h1>{" "}

                    <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-primary via-[#686de2] to-[#575AC8] text-transparent bg-clip-text">
                            Solutions!
                        </span>{" "}
                    </h2>
                </main>

                <p className="text-lg sm:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Elevate Your Business with Our Cutting-Edge
                </p>
                <div className=''>
                    <ul className='text-md font-[400] sm:text-lg text-ericheading md:w-10/12 mx-auto lg:mx-0'>
                        <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                            <FaCheckCircle className='text-green-600' />
                            <p>Premium Servers</p>
                        </li>
                        <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                            <FaCheckCircle className='text-green-600' />
                            <p>Free Website Migration</p>
                        </li>
                        <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                            <FaCheckCircle className='text-green-600' />
                            <p>24/7 Customer Support</p>
                        </li>
                        <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                            <FaCheckCircle className='text-green-600' />
                            <p>99.9% uptime guarantee</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='text-[15px] md:text-[20px] mt-[-10px]'>
                        <span className='text-[30px] md:text-[40px] font-bold'>₹2.99</span>/month
                    </div>
                    <div className='text-md leading-[20px] sm:text-lg'>+3 Months Free</div>
                </div>


                <div className="space-y-4 md:space-y-0 sm:space-x-4">
                    <Button className="w-9/12 rounded-[4px]  sm:w-1/3 text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4">Explore Plans</Button>
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
            <div className="z-10">
                <HeroCards />
            </div>

            <div className='w-full  hidden  col-span-2  sm:block'>
                <Image
                    src={RaingImage}
                    layout='responsive'
                    alt='Rating Image '
                    className="w-full object-cover"
                />
            </div>
            <div className='right w-full  col-span-2 mx-auto lg:order-2 max-w-[80%] lg:hidden'>
                <Image
                    src={HeroImage}
                    layout='responsive'
                    alt='HeroImage'
                    className='h-auto mx-auto sm:max-h-[400px] object-contain lg:max-h-[100%]'
                />
            </div>
            <div className='w-full max-w-[80%]  col-span-2 sm:max-w-[70%] m-auto sm:hidden'>
                <Image
                    src={RaingImage2}
                    height={100}
                    width={200}
                    layout='responsive'
                    alt='Rating Image'
                />
            </div>

            {/* Shadow effect */}
            <div className="shadow hidden"></div>
        </section>
    );
};