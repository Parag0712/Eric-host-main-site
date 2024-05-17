"use client"
import { Card, CardContent, CardHeader, CardTitle, } from "../ui/card";
import { CloudIcon, LightingIcon, LockIcon, SecureIcon, ServerIcon, ThumIcon, WordPressIcon } from "../Cta-logo/Logo";
import Heading from "../Heading/Heading";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}


const features: FeatureProps[] = [
    {
        icon: <ServerIcon />,
        title: "Dedicated Secured Server",
        description: "A dedicated server, is a type of Internet hosting in which the client leases an entire server not shared with anyone else.",
    },
    {
        icon: <CloudIcon />,
        title: "Daily Backup Facility",
        description: "Never lose your website’s data while you host your website at our server. We have automatic daily cloud backups.",
    },
    {
        icon: <SecureIcon />,
        title: "99.9 % Uptime Guarantee",
        description: "Share processes and data secure lona need to know basis. You May check Server Status.",
    },
    {
        icon: <LockIcon />,
        title: "Free SSL Certificates",
        description: "SSL certificate is required for all websites for security purposes do we provide free Let's Encrypt SSL certificate in every cPanel.",
    },
    {
        icon: <LightingIcon />,
        title: "Powered by Litespeed",
        description:
            "LiteSpeed Web Server increases the performance & scalability of servers through its unique event driven architecture.",
    },

    {
        icon: <WordPressIcon />,
        title: "WordPress included",
        description:
            "WordPress Included in Every cPanel. WP is free in every cPanel. WordPress is a softaculous application and all the softaculous applications are installed in few clicks.",
    },
    {
        icon: <ServerIcon />,
        title: "FREE Migration",
        description:
            "A dedicated server, is a type of Internet hosting in which the client leases an entire server not shared with anyone else.",
    },
    {
        icon: <SecureIcon />,
        title: "Unmatched Security Measures",
        description:
            "Security is not an afterthought; it’s our top priority. We employ state-of-the-art security protocols, including firewalls, regular malware scans, and SSL certificates, to safeguard your website and customer data.",
    },
    {
        icon: <ThumIcon />,
        title: "Reliability at Its Best",
        description:
            "We pride ourselves on providing rock-solid reliability. With a 99.9% uptime guarantee, you can trust us to keep your website up and running, ensuring your visitors never face downtime.",
    },
];

export const ChooseThePlans = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center pb-24 sm:pb-[7rem] lg:sm:py-[7rem]"
        >
            <Heading
                headingContent={
                    <>
                        We Provide You<br />
                        <span className="pb-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {" "}  World Class{" "}
                        </span> <br /> Best Hosting Features For You
                    </>
                }
                description="EricHost provides 99%+ uptime with top-notch speed at the affordable price."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-10">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50 py-[2.5rem] justify-center flex flex-col gap-3
                        
                        border-[1px] transition-all duration-150 capitalize hover:shadow-xl  hover:scale-[1.01]
                        "
                    >
                        <CardHeader className="py-0 ">
                            <CardTitle className="pb-0 text-[20px] grid gap-4  place-items-center">
                                <div className="w-14  fill-primary  ">
                                    {icon}
                                </div>
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className=" text-[16px]  mt-0">{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};