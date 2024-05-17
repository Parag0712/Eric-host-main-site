"use client"
import React from 'react'
import Container from '../Conatianers/Container'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import SmallHeading from '../Heading/SmallHeading';

type Props = {
    title: string;
    subtitle: string;
    paragraphs: string[];
    buttonText: string;
    href:string;
}

const DynamicInformation = ({ title, subtitle, paragraphs, buttonText,href }: Props) => {

    const router = useRouter();
    return (
        <Container
            id="pricing"
            className="pb-24 sm:pb-[7rem] lg:mb-16 lg:py-[6rem] flex flex-col gap-6 md:gap-7 lg:gap-9"
        >
            <SmallHeading
                headingContent={
                    <>
                    {title} <br />
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {subtitle}
                </span>
                    </>
                }
            />
            <div className="text-center flex flex-col gap-5  md:gap-7">
                {/* Render paragraphs */}
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="w-full mx-auto text-sm md:text-xl text-ericheading">{paragraph}</p>
                ))}
            </div>
            <div className="flex justify-center mt-2">
                <Button 
                onClick={()=>router.push(href)}
                className="w-full my-6 py-6 text-[17px] max-w-[300px] mx-auto rounded-[4px] ">{buttonText}</Button>
            </div>
        </Container>
    )
}

export default DynamicInformation