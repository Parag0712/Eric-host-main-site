"use client"
import { Card, CardContent, CardHeader, CardTitle, } from "../ui/card";
import { CloudIcon, LightingIcon, LockIcon, SecureIcon, ServerIcon, WordPressIcon } from "./Logo";

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
];

export const ChooseThePlans = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center pb-24 sm:pb-[7rem]"
        >
            <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem]  font-bold  ">
                We Provide You
                <span className="pb-2 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}  World Class{" "}
                </span> <br /> Best Hosting Features For You
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                EricHost provides 99%+ uptime with top-notch speed at the affordable price.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-10">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50 py-[2.5rem] justify-center flex flex-col gap-3"
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