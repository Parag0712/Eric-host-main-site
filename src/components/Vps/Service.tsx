"use client"
import React from 'react'
import { Availability, Ddos, Dedicated, Ipv6, SdIcon } from './logo';
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
        title: "SSD Disk Drives",
        description:
            "You can never go wrong with our own top-notch dedicated servers loaded Credibly network leading-edge services vis-a-vis world-class niches. Seamlessly visualize end-to-end web-readiness",
        icon: <SdIcon />,
    },
    {
        title: "100 Mb/s Network",
        description:
            "We can guarantee an excellent experience and loading time for your successful Energistically synthesize just in time paradigms after resource-leveling e-business plagiarize cross-unit information",
        icon: <SdIcon />,
    },
    {
        title: "DDoS Protection",
        description:
            "With full root access you will be able to take full control of your server very easy Holisticly repurpose granular models and go forward schemas. Professionally scale magnetic portals before",
        icon: <Ddos />,
    },
    {
        title: "Dedicated IP",
        description:
            "One of many premium features is a dedicated IP cheapest VPS hosting plan Authoritatively formulate user-centric sources without emerging best practices. Monotonectally morph an expanded",
        icon: <Dedicated />,
    },
    {
        title: "IPv6 Support",
        description:
            "Our VPS hosting plan is fully packed with dedicated IPv6 Internet protocol IP Progressively maximize standardized catalysts for change via diverse initiatives. Monotonectally underwhelm",
        icon: <Ipv6 />,
    },
    {
        title: "Availability",
        description:
            "Our VPS solutions are perfect for hosting business applications in a production or pre-production environment. Our infrastructure offers minimal latency for your services, and hardware availability guaranteed by an SLA.",
        icon: <Availability  />,
    }
];
const VpsFeatured = (props: Props) => {
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
                                        <div className=""> 
                                            {icon}
                                        </div>
                                        <div className='text-center lg:text-left'>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription className="text-[15px] mt-2">
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

export default VpsFeatured