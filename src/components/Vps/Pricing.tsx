"use client"
import Container from "../Conatianers/Container";
import Heading from "../Heading/Heading";
import PricingCard from "./PricingCard";

export const Pricing = ({ data }: { data: any }) => {
    return (
        <Container
            id="pricing"
            className=" pb-12 md:pb-24"
        >
            <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
            </h2>

            <Heading
                classname="text-center justify-center items-center flex flex-col"
                headingContent={
                    <>
                        Choose Your VPS Hosting Plan
                    </>
                }
                descclassname="text-center"
                description={
                    "   Professional hosting plans at an affordable price , which meets your needs & budget."}
            />
            <div className="relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#525252,transparent)] mt-12">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3  lg:items-center">
                    {data.plans.slice(0, 12).map((pricing: any, index: any) => (
                        <PricingCard
                            pricing={""}
                            plan={data.plans[index]}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};