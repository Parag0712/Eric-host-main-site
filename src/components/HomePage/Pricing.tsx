"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import PricingCard from "./PricingCard";
import data from '../../data/HomePage/pricing.json'
import { useState } from "react";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const pricingList: PricingProps[] = [
    {
        title: "Free",
        popular: 0,
        price: 0,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get Started",
        benefitList: [
            "1 Team member",
            "2 GB Storage",
            "Upto 4 pages",
            "Community support",
            "lorem ipsum dolor",
        ],
    },
    {
        title: "Premium",
        popular: 1,
        price: 5,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
            "4 Team member",
            "4 GB Storage",
            "Upto 6 pages",
            "Priority support",
            "lorem ipsum dolor",
        ],
    },
    {
        title: "Enterprise",
        popular: 0,
        price: 40,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
            "10 Team member",
            "8 GB Storage",
            "Upto 10 pages",
            "Priority support",
            "lorem ipsum dolor",
        ],
    },
];

export const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section
            id="pricing"
            className="container pb-24 sm:pb-32"
        >   
            <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center"> */}
                Choose the plans that’s
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Plans{" "}
                </span>
                Access
            </h2>
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16 mt-8">
                <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
                    </span>
                    <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} onClick={() => setIsAnnual(true)} aria-pressed={isAnnual}>Monthly </button>
                    <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`} onClick={() => setIsAnnual(false)} aria-pressed={!isAnnual}>Yearly </button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ">
                {pricingList.map((pricing: PricingProps, index) => (
                    <PricingCard
                        pricing={pricing}
                        plan={data.plans[index]}
                        isAnnual ={!isAnnual}
                    />

                ))}
            </div>
        </section>
    );
};