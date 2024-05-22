"use client"
import { useState } from "react";
import PricingCard from "./PricingCard";
import Heading from "../Heading/Heading";
import Container from "../Conatianers/Container";

export const Pricing = ({ data }: { data: any }) => {
    const [isAnnual, setIsAnnual] = useState(true);
    return (
        <Container
            id="pricing"
            className=" pb-12 md:pb-24"
        >
            <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
            </h2>

            <Heading
                classname="text-center"
                headingContent={
                    <>
                        Choose the plans that’s
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {" "}
                            Plans{" "}
                        </span>
                        Access

                    </>
                }
            />
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16 mt-8">
                <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                    </span>
                    <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} onClick={() => setIsAnnual(true)} aria-pressed={isAnnual}>Monthly </button>
                    <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`} onClick={() => setIsAnnual(false)} aria-pressed={!isAnnual}>Yearly </button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 ">
                {data.plans.map((pricing: any, index: any) => (
                    <PricingCard
                        pricing={""}
                        plan={data.plans[index]}
                        isAnnual={!isAnnual}
                    />

                ))}
            </div>
        </Container>
    );
};