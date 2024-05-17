import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { } from "@radix-ui/react-icons";
import { CloudIcon, LightBulbIcon } from "./Logo";
import Logo from '../../../public/logo.svg'
import { FaFacebook } from "react-icons/fa";
import Container from "../General/Container";
import { heroimg } from "@/assests/config";
import Image from "next/image";
import link from '../../data/Navbar/link.json'

export const HeroCards = () => {
    return (
        <Container className=" lg:max-w-full xl:max-w-full  px-0  hidden lg:flex flex-row flex-wrap gap-8 relative  w-[400px] lg:w-[600px] xl:w-[700px] h-[500px]">
            <Image
                src={heroimg}
                alt=""
                layout="responsive"
                className="xl:hidden object-cover bg-left"
            >

            </Image>
            {/* Testimonial */}
            <Card className="hidden  xl:block absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-2 pb-2 ">
                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Ben James</CardTitle>
                    </div>
                </CardHeader>

                <CardContent>
                    Erichost: superb support, easy navigation, fast servers, unbeatable pricing.
                </CardContent>
            </Card>

            {/* XL CARD */}
            {/* Team */}
            <Card className="hidden absolute xl:right-[20px] xl:top-4 w-80 xl:flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">

                    <div
                        className="absolute grayscale-[0%] -top-12 rounded-full w-20 bg-slate-50 flex items-center justify-center border-2  fill-primary h-20 p-4 aspect-square object-contain"
                    >

                        <CloudIcon />
                    </div>
                    <CardTitle className="text-center">Eric Host</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                        ERIC WEB SOLUTIONS PRIVATE LIMITED
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p className="capitalize">we offers affordable hosting solutions, including Domains, Hosting, Cloud Hosting, Reseller Hosting, and Dedicated Servers.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href={link.facebook}
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">FaceBookIcon</span>
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href={link.twitter}
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">X icon</span>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-foreground w-5 h-5"
                            >
                                <title>X</title>
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>

                        <a
                            rel="noreferrer noopener"
                            href={link.linkdin}
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* LG CARD */}
            <Card className="xl:hidden absolute bottom-0 left-[00px] w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    {/* <img
                        src="/logo.svg"
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 bg-primary  h-24 aspect-square object-contain"
                    /> */}
                    <div
                        className="absolute grayscale-[0%] -top-12 rounded-full w-20 bg-slate-50 flex items-center justify-center border-2  fill-primary h-20 p-4 aspect-square object-contain"
                    >

                        <CloudIcon />
                    </div>
                    <CardTitle className="text-center">Eric Host</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                        ERIC WEB SOLUTIONS PRIVATE LIMITED
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p className="capitalize">we offers affordable hosting solutions, including Domains, Hosting, Cloud Hosting, Reseller Hosting, and Dedicated Servers.
                    </p>
                </CardContent>

                <CardFooter>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/leoMirandaa"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Github icon</span>
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href="https://twitter.com/"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">X icon</span>
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-foreground w-5 h-5"
                            >
                                <title>X</title>
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>

                        <a
                            rel="noreferrer noopener"
                            href="https://www.linkedin.com/company/erichost/?originalSubdomain=in"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Linkedin icon</span>
                            <Linkedin size="20" />
                        </a>
                    </div>
                </CardFooter>
            </Card>

            {/* Pricing */}
            <Card className="hidden xl:block absolute top-[160px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Bronze
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            Most popular
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">₹399</span>
                        <span className="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription>Enhanced Capabilities For Growing Businesses
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full rounded-[4px] ">Buy Now</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["100 Websites", "100 Gb Disk Space", "Free Ssl Certificate", "50 Sub-Domains"].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                                    <Check className="text-green-500" />{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card className="hidden xl:block absolute w-[350px] -right-[10px] bottom-[45px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon />
                    </div>
                    <div>
                        <CardTitle> LiteSpeed Servers</CardTitle>
                        <CardDescription className="text-md mt-2">Get Blazing Fast LiteSpeed Servers
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </Container>
    );
};