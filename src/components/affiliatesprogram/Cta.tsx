import { Button } from "../ui/button";

export const Cta = () => {
    return (
        <section
            id="cta"
            className="bg-muted/50 py-12  bg-primary text-white"
        >
            <div className="container flex flex-col  gap-4 justify-between items-center">
                <div className="lg:col-start-1">
                    <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-bold ">
                        Ready To Become An Affiliate?
                    </h2>
                    <p className="mt-4 text-lg font-[400]">
                        join the Erichost Affiliate Program to get cash quickly. Earn up to 30% per referral !
                    </p>
                </div>
                <Button
                    variant="outline"
                    className=" text-[18px] text-black py-6 px-8 w-full md:w-auto max-w-[200px]"
                >Login Now
                </Button>
            </div>
        </section>
    );
};