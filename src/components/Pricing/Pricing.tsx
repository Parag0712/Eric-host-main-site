"use client"
import { useState } from "react";
import Container from "../Conatianers/Container";
import Heading from "../Heading/Heading";
import PricingCard from "./PricingCard";

export const Pricing = ({ data, title }: { data: any, title: string }) => {

    const [showMore, setShowMore] = useState(false);
    
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

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
                        Best
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            {" "}
                            {title}
                            {" "}

                            {" "}
                        </span>
                        Hosting
                        Plans
                    </>
                }
            />
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16 mt-8">

                <div className=" relative self-center bg-primary rounded-lg p-1 flex">
                    <button
                        type="button"
                        className={`px-[10px] relative w-1/2 rounded-md py-2 text-sm whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${isAnnual
                            ? 'bg-slate-50 border-slate-50  font-bold text-slate-900'
                            : 'border rounded-md py-2  border-1  text-sm  whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-white shadow-sm'
                            }`}
                        onClick={() => setIsAnnual(true)}
                    >
                        Monthly Plan
                    </button>
                    <button
                        type="button"
                        className={`px-[10px] ml-0.5 relative w-1/2 border rounded-md py-2 text-sm whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${isAnnual
                            ? 'border-transparent text-white'
                            : 'bg-slate-50 border-slate-50 font-bold text-slate-900 shadow-sm '
                            }`}
                        onClick={() => setIsAnnual(false)}
                    >
                        Yearly Plan
                    </button>

                </div>
            </div>
            <div className={`  grid md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mx-auto place-content-center`}>
                {data.plans.map((pricing: any, index: any) => (
                    <PricingCard
                        pricing={""}
                        showMore={showMore}
                        handleShowMore={handleShowMore}
                        plan={data.plans[index]}
                        isAnnual={!isAnnual}
                        className={data.plans.length <= 1 ? "col-start-2 " : ""}
                    />

                ))}
            </div>

            {/* <div className="w-full overflow-hidden">
    <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={3} // Adjust as needed
        slidesToScroll={1}
        className="flex gap-4"
    >
        {data.plans.map((pricing: any, index: any) => (
            <PricingCard
                key={index}
                pricing={""}
                showMore={showMore}
                handleShowMore={handleShowMore}
                plan={data.plans[index]}
                isAnnual={!isAnnual}
                className={"w-full min-w-[320px]"}
            />
        ))}
    </Slider>
</div> */}
        </Container>
    );
};