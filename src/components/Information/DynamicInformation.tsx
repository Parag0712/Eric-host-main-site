"use client"
import React, { FormEvent } from 'react'
import Container from '../Conatianers/Container';
import SmallHeading from '../Heading/SmallHeading';

type Props = {
    title: string;
    subtitle: string;
    paragraphs: string[];
    buttonText: string;
    href: string;
}

const DynamicInformation = ({ title, subtitle, paragraphs, buttonText, href }: Props) => {
    
    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Container className="relative overflow-hidden">
            {/* Gradients */}
            
            {/* End Gradients */}

            <div className="relative z-10">
                <div className=" mx-auto sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className=" text-center mx-auto">
                        {/* Title */}
                        <div className="mt-5">

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
                        </div>
                        {/* End Title */}

                        <div className="mt-6 space-y-4">
                            {paragraphs.map((paragraph, index) => {
                                return <p key={index} className="text-sm lg:text-xl text-gray-600 ">{paragraph}</p>
                            })}
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 gap-3 flex justify-center">
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-indigo-600 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={handleClick} >
                                {buttonText}
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>

                        </div>
                        {/* End Buttons */}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DynamicInformation