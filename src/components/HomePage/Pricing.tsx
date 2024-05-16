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
    return (
        <section
            id="pricing"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Choose the plans that’s
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Plans{" "}
                </span>
                Access
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                reiciendis.
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ">
                {pricingList.map((pricing: PricingProps,index) => (
                    <PricingCard 
                        pricing={pricing}
                        plan={data.plans[index]}
                    />

                ))}
            </div>
        </section>
    );
};