import { LogoIcon } from "../HomePage/Logo";
import navData from '../../data/Navbar/data.json'
import { Facebook, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/assests/config";
import Image from "next/image";
import link from '../../data/Navbar/link.json'

export const Footer = () => {
    const navbar = navData.navbar;
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto" />

            <section className="container py-20 grid grid-cols-1 sm:grid-cols-2 text-center md:text-left md:grid-cols-3  xl:grid-cols-5 gap-x-12 gap-y-8">
                <div className="col-span-full xl:col-span-2 flex  justify-start flex-col items-center-center  xl:items-start gap-4">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="font-bold text-xl flex"
                    >
                        <Image
                            src={Logo}
                            layout="responsive"
                            alt="logo"
                            className="lg:max-h-9 max-h-6"
                        />
                    </a>
                    <p className="text-center xl:text-left">
                        We are a web hosting company with a mission to help everyone who goes online succeed. We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience
                    </p>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Our Service </h3>

                    {
                        navbar[1].options.map((data) => (
                            <div>
                                <a
                                    rel="noreferrer noopener"
                                    href={data.href}
                                    className="opacity-100 hover:text-primary"
                                >
                                    {data.title}
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Server</h3>
                    {
                        navbar[3].options.map((data) => (
                            <div>
                                <a
                                    rel="noreferrer noopener"
                                    href={data.href}
                                    className="opacity-100 hover:text-primary"
                                >
                                    {data.title}
                                </a>
                            </div>
                        ))
                    }

                    <div className="flex flex-col gap-2 mt-5">
                        <h3 className="font-bold text-lg">Company</h3>
                        {
                            navbar[5].options.map((data) => (
                                <div>
                                    <a
                                        rel="noreferrer noopener"
                                        href={data.href}
                                        className="opacity-100 hover:text-primary"
                                    >
                                        {data.title}
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="flex items-center md:flex-col gap-2 flex-col sm:flex-row sm:justify-between md:justify-normal sm:col-span-2 md:col-span-1">
                    <div className="flex items-center flex-col gap-2  min-w-[50%] md:items-start">
                        <h3 className="font-bold text-lg">Quick Contact</h3>
                        <div className="text-center xl:text-left">
                            <a
                                rel="noreferrer noopener"
                                href={`mailto:${link.email}`}
                                className="flex gap-2 opacity-100 hover:text-primary"
                            >
                                <Mail />
                                {link.email}
                            </a>
                        </div>

                        <div>
                            <a
                                rel="noreferrer noopener"
                                href={`tel:${link.phone}`}
                                className="flex gap-2 opacity-100 hover:text-primary"
                            >
                                <Phone />
                                {link.phone}
                            </a>
                        </div>
                    </div>


                    <div className="flex flex-col gap-2 mt-5  min-w-[50%] items-center md:items-start">
                        <h3 className="font-bold text-lg">Quick Contact</h3>

                        <div className="flex gap-8 mt-2">

                            <a
                                rel="noreferrer noopener"
                                href={link.youtube}
                                className="flex gap-2 opacity-60 hover:opacity-100"
                            >
                                <Youtube />
                            </a>
                            <a
                                rel="noreferrer noopener"
                                href={link.facebook}
                                className="flex gap-2 opacity-60 hover:opacity-100"
                            >
                                <Facebook />

                            </a>
                            <a
                                rel="noreferrer noopener"
                                href={link.twitter}
                                className="flex gap-2 opacity-60 hover:opacity-100"
                            >
                                <Twitter />
                            </a>
                            <a
                                rel="noreferrer noopener"
                                href={link.linkdin}
                                className="flex gap-2 opacity-60 hover:opacity-100"
                            >
                                <Linkedin />

                            </a>
                        </div>
                    </div>
                </div>

            </section>

            <section className="container pb-14 text-center">
                <h3>
                    &copy; 2024 Eric Web Solutions Private Limited{" "}
                    <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="/"
                        className="text-primary transition-all border-primary hover:border-b-2"
                    >
                        All Rights Reserved.
                    </a>
                </h3>
            </section>
        </footer>
    );
};