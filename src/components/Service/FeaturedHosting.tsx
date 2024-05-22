"use client"
import { useRouter } from "next/navigation";
import Heading from "../Heading/Heading";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "../ui/card";
interface FeatureProps {
    type: string,
    description: string,
    ratings: string,
    starting_price: string,
    explore_link: string,
    link: string
}
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Container from "../Conatianers/Container";

const hosting: FeatureProps[] = [
    {
        type: "Shared Hosting",
        description: "Perfect for small businesses and personal websites, our shared hosting plans offer cost-effective solutions without compromising on performance or security. Enjoy the benefits of robust hosting without breaking the bank at affordable cost.",
        ratings: "4.5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    },
    {
        type: "VPS Hosting",
        description: "For businesses that require more power and control, our VPS hosting plans are the ideal choice. Experience dedicated resources, enhanced security, and the flexibility to customize your server environment according to your specific needs.",
        ratings: "5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    },
    {
        type: "Dedicated Hosting",
        description: "When nothing but the best will do, our dedicated hosting solutions provide unparalleled performance and security. With a dedicated server, you have exclusive access to all resources, ensuring optimal speed, reliability, and customization options.",
        ratings: "5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    },
    {
        type: "WordPress Hosting",
        description: "Our specialized WordPress hosting plans are tailored for seamless compatibility and optimal performance. Experience one-click installations, automatic updates, and expert support specifically designed for WordPress websites.",
        ratings: "5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    },
    {
        type: "Reseller Hosting",
        description: "Start Your Journey to Become A Hosting Reseller With Our Reliable And Flexible Reseller Hosting Plans. Offer Hosting Services To Your Clients While Enjoying the Benefits Of Our Robust Infrastructure, Expert Support, and Unlimited Growth Potential.",
        ratings: "5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    },
    {
        type: "Cloud Hosting",
        description: "Experience the power of scalable and reliable cloud hosting. Our cloud hosting solutions offer on-demand resources, automatic failover, and easy scalability to handle sudden traffic spikes and ensure your website remains online.",
        ratings: "5/5",
        starting_price: "Rs.159/month",
        explore_link: "Explore Solution",
        link: ""
    }
];
export const FeaturedHosting = () => {
    const router = useRouter();
    return (
        <Container
            id="howItWorks"
            className="text-center  pt-[4rem] sm:pt-[4rem] md:py-[7rem] lg:sm:py-[6rem]"
        >
            {/* Which Type of Hosting is Right for You? */}
            <Heading
                headingContent={
                    <>
                        Which Type of <span className="pb-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Hosting is Right for You?<br />
                        </span>
                        We Provide You

                    </>
                }
                description="EricHost provides 99%+ uptime with top-notch speed at the affordable price."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:mt-10 place-items-start">
                {hosting.map(({ type, description, explore_link, link, ratings, starting_price }: FeatureProps, idx) => (
                    <Card
                        key={type}
                        className="bg-muted/50 pt-[2rem]  flex flex-col 
                        
                        border-[1px] transition-all duration-150 capitalize hover:shadow-xl  hover:scale-[1.01]
                        "
                    >
                        <CardHeader className="py-0 ">
                            <CardTitle className="text-primary pb-0 text-[20px] grid gap-4  place-items-start">
                                {idx + 1}{". "}{type}
                            </CardTitle>

                        </CardHeader>
                        <CardContent className=" text-[16px]  mt-0 text-left    ">
                            {description}
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3 items-start">
                            <div className="flex flex-col gap-1 justify-center">
                                <div className="flex gap-1">
                                    <span className="font-bold">Rating: {" "}</span>
                                    {" "}
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={parseFloat(ratings)}
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <span className="font-bold">Plans Starts: {starting_price}</span>
                                    {" "}
                                </div>
                            </div>
                            <div>
                                <Button onClick={() => { router }} className="w-full rounded-[4px] ">{explore_link}</Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </Container>
    );
};