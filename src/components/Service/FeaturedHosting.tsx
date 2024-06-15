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
import useCurrencyConverter from "@/Hooks/useCurrencyConverter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import currency from "currency.js";

const hosting: FeatureProps[] = [
    {
        type: "Shared Hosting",
        description: "Perfect for small businesses and personal websites, our shared hosting plans offer cost-effective solutions without compromising on performance or security. Enjoy the benefits of robust hosting without breaking the bank at affordable cost.",
        ratings: "4.5/5",
        starting_price: "39",
        explore_link: "Explore Solution",
        link: "/shared-hosting"
    },
    {
        type: "VPS Hosting",
        description: "For businesses that require more power and control, our VPS hosting plans are the ideal choice. Experience dedicated resources, enhanced security, and the flexibility to customize your server environment according to your specific needs.",
        ratings: "5/5",
        starting_price: "599",
        explore_link: "Explore Solution",
        link: "/vps-server"
    },
    {
        type: "Mini Hosting",
        description: "Perfect for small websites or blogs, our Mini Hosting plans offer an affordable yet powerful solution. Enjoy reliable uptime, essential features, and easy scalability as your site grows.",
        ratings: "4.5/5",
        starting_price: "39",
        explore_link: "Explore Solution",
        link: "/mini-hosting"
    },
    {
        type: "Unlimited Hosting",
        description: "Experience the freedom of Unlimited Hosting, where you get unlimited storage, bandwidth, and websites. Ideal for growing businesses, large websites, or developers managing multiple sites.",
        ratings: "5/5",
        starting_price: "999",
        explore_link: "Explore Solution",
        link: "/unlimited-hosting"
    },
    {
        type: "Reseller Hosting",
        description: "Start Your Journey To Become A Hosting Reseller With Our Reliable And Flexible Reseller Hosting Plans. Offer Hosting Services To Clients While Enjoying The Benefits Of Our Robust Infrastructure, Support, And Unlimited Growth Potential.",
        ratings: "5/5",
        starting_price: "1199",
        explore_link: "Explore Solution",
        link: "/reseller-hosting"
    },
    {
        type: "Cloud Hosting",
        description: "Experience the power of scalable and reliable cloud hosting. Our cloud hosting solutions offer on-demand resources, automatic failover, and easy scalability to handle sudden traffic spikes and ensure your website remains online.",
        ratings: "5/5",
        starting_price: "29",
        explore_link: "Explore Solution",
        link: "/indian-cloud-hosting"
    }
];
export const FeaturedHosting = () => {
    const router = useRouter();
    const { currencyRate, currencySymbol } = useSelector((state: RootState) => state.reducer);

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
                        className="bg-muted/50 pt-[2rem] min-h-[380px] flex flex-col justify-between border-[1px] transition-all duration-150 capitalize hover:shadow-xl   hover:scale-[1.01]
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
                                    <span className="font-bold">Plans Starts: {currencySymbol}{
                                        currency(starting_price).multiply(currencyRate).value
                                    }/Month </span>
                                    {" "}
                                </div>
                            </div>
                            <div>
                                <Button onClick={() => { router.push(link) }} className="w-full rounded-[4px] ">{explore_link}</Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        </Container>
    );
};