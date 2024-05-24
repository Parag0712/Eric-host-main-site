"use client"
import React from 'react'
import { ChartIcon, WalletIcon, MagnifierIcon } from './Logo';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Container from '../Conatianers/Container';
import Heading from '../Heading/Heading';

type Props = {}

interface ServiceProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
    {
        title: "Code Collaboration",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <ChartIcon />,
    },
    {
        title: "Project Management",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <WalletIcon />,
    },
    {
        title: "Task Automation",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <MagnifierIcon />,
    },
    {
        title: "Project Management",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <WalletIcon />,
    },
    {
        title: "Project Management",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <WalletIcon />,
    },
    {
        title: "Project Management",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        icon: <WalletIcon />,
    }
];
const Service = (props: Props) => {
    return (
        <div className='bg-[#4346C2] '>
            <Container className="py-16 lg:py-28 ">
                <div className="grid gap-8 place-items-center">
                    <div>
                        <h2 className="text-white text-center lg:text-left text-3xl md:text-4xl font-bold lg:text-[3rem] lg:leading-[3.7rem] ">
                            <span className="text-white bg-clip-text">
                                Our VPS Hosting Platform Best Features{" "}
                            </span>
                        </h2>

                        <p className="text-white text-center md:text-xl mt-4 mb-8  lg:text-left">
                            Uniquely restore open-source products via open-source relationships.
                            Enthusiastically deliver competitive systems and client-centric.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {serviceList.map(({ icon, title, description }: ServiceProps) => (
                                <Card key={title}>
                                    <CardHeader className="space-y-1 flex lg:flex-row justify-start items-center lg:items-start gap-4">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                                            {icon}
                                        </div>
                                        <div className='text-center lg:text-left'>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription className="text-md mt-2">
                                                {description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Service