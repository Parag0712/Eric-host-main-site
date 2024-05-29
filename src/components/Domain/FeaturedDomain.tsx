"use client"
import { com, in as in_, info, net, org, xyz } from "@/assests/Domain/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "../Conatianers/Container";
import Heading from "../Heading/Heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

const domain = [
    {
        "type": "com",
        "renewal_transfer": { "inr": 949.00, "usd": 11.00 },
        "registration": { "inr": 899.00, "usd": 11.00 },
        "img": com,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    },
    {
        "type": "in",
        "renewal_transfer": { "inr": 699.00, "usd": 13.00 },
        "registration": { "inr": 699.00, "usd": 2.50 },
        "img": in_,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    },
    {
        "type": "info",
        "renewal_transfer": { "inr": 1549.00, "usd": 9.00 },
        "registration": { "inr":  499.00, "usd": 9.00 },
        "img": info,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    },
    {
        "type": "net",
        "renewal_transfer": { "inr": 1199.00, "usd": 13.00 },
        "registration": { "inr": 1199.00, "usd": 13.00 },
        "img": net,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    },
    {
        "type": "org",
        "renewal_transfer": { "inr": 549.00, "usd": 10.50 },
        "registration": { "inr": 549.00, "usd": 16.00 },
        "img": org,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    },
    {
        "type": "xyz",
        "renewal_transfer": { "inr": 1199.00, "usd": 6.50 },
        "registration": { "inr": 1199.00, "usd": 20.50 },
        "img": xyz,
        "registerurl":"https://clients.erichost.com/cart.php?a=add&domain=register",
        "transferurl":"https://clients.erichost.com/cart.php?a=add&domain=transfer"
    }
];

export const FeaturedDomain = ({ showDollar = false }) => {
    const router = useRouter();
    return (
        <Container
            id="howItWorks"
            className="text-center pt-[4rem] sm:pt-[4rem] md:py-[7rem] lg:sm:py-[6rem]"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 md:mt-10 place-items-start">
                {domain.map(({ type, renewal_transfer, registration, img ,transferurl,registerurl}, idx) => (
                    <Card
                        key={idx}
                        className="bg-muted/50 w-full pt-[2rem] flex flex-col justify-between border-[1px] transition-all duration-150 capitalize hover:shadow-xl hover:scale-[1.01]"
                    >
                        <CardHeader className="py-0">
                            <CardTitle className="font-poppins font-[500]">
                                Renewal / Transfer: {showDollar ? `$${renewal_transfer.usd}` : `₹${renewal_transfer.inr}`} / Year
                            </CardTitle>
                            <CardTitle className="font-poppins pb-0 text-[20px] grid gap-4 place-items-center">
                                Registration: {showDollar ? `$${registration.usd}` : `₹${registration.inr}`} 
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center ">
                            <Image
                                className="object-contain h-14"
                                src={img}
                                alt={type}
                            />
                        </CardContent>
                        <CardFooter className="flex w-full flex-col gap-3 items-start">
                            <div className="flex gap-3 w-full">
                                <a className="w-full justify-center py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent duration-200 bg-primary text-white hover:bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none" href={registerurl}>
                                    Register
                                </a>
                                <a className="w-full justify-center py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent duration-200 bg-white text-primary hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href={transferurl}>
                                    Transfer
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
