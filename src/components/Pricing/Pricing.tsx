"use client";
import { useState } from "react";
import Container from "../Conatianers/Container";
import Heading from "../Heading/Heading";
import PricingCard from "./PricingCard";

export const Pricing = ({ data, title }: { data: any, title: string }) => {
    const [showMore, setShowMore] = useState(false);
    const [billingCycle, setBillingCycle] = useState("annual");

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Container id="pricing" className="pb-12 md:pb-24">
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold text-center"></h2>

            <Heading
                classname="text-center"
                headingContent={
                    <>
                        Best
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {" "}
                            {title}
                            {" "}
                        </span>
                        Hosting Plans
                    </>
                }
            />

            <div className="flex justify-center max-w-[18rem] xl:max-w-[20rem] m-auto mb-8 lg:mb-16 mt-8">
                <div className="relative w-full sm:w-fit self-center bg-primary rounded-lg p-1 flex">
                    <button
                        type="button"
                        className={`px-[13px] ml-0.5 relative w-1/3 border rounded-md py-2 text-sm whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${billingCycle === "triennial"
                            ? 'bg-slate-50 border-slate-50 font-bold text-slate-900'
                            : 'border-transparent text-white'
                            }`}
                        onClick={() => setBillingCycle("triennial")}
                    >
                        Triennial 
                    </button>
                    <button
                        type="button"
                        className={`px-[13px] relative w-1/3 border rounded-md py-2 text-sm whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${billingCycle === "annual"
                            ? 'bg-slate-50 border-slate-50 font-bold text-slate-900'
                            : 'border-transparent text-white'
                            }`}
                        onClick={() => setBillingCycle("annual")}
                    >
                        Yearly 
                    </button>
                    <button
                        type="button"
                        className={`px-[13px] relative w-1/3 rounded-md py-2 text-sm whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${billingCycle === "monthly"
                            ? 'bg-slate-50 border-slate-50 font-bold text-slate-900'
                            : 'border-transparent text-white'
                            }`}
                        onClick={() => setBillingCycle("monthly")}
                    >
                        Monthly 
                    </button>
                </div>
            </div>

            <div className={`grid md:grid-cols-3  lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mx-auto md:place-content-center`}>
                {data.plans.map((pricing: any, index: any) => (
                    <PricingCard
                        key={index}
                        pricing={""}
                        showMore={showMore}
                        handleShowMore={handleShowMore}
                        plan={data.plans[index]}
                        billingCycle={billingCycle}
                        className={data.plans.length <= 1 ? "col-start-2" : ""}
                    />
                ))}
            </div>
        </Container>
    );
};
