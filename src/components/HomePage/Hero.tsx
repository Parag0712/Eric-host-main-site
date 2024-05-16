import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-5">
                <main className="text-4xl sm:text-5xl md:text-6xl font-bold">
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
                    <ul className='text-md sm:text-xl text-ericheading md:w-10/12 mx-auto lg:mx-0'>
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
                    <div className='text-[15px] leading-[20px] md:text-[19px]'>+3 Months Free</div>
                </div>
                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full py-2 md:w-1/3">Explore Plans</Button>
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
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

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};