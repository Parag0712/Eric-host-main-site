import { Check, ChevronDown, ChevronUp, Target, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import useCurrencyConverter from '@/Hooks/useCurrencyConverter'

const PricingCard = ({ plan, billingCycle, isAnnual, showMore, handleShowMore, className }: any) => {
    let discount;
    let PlanPrice;
    if (billingCycle == "annual") {
        PlanPrice = plan.annually;
        discount = true;
    } else if (billingCycle == "triennial") {
        PlanPrice = plan.triannually;
        discount = true;
    } else {
        PlanPrice = plan.monthly;
    }
    enum PopularPlanType {
        NO = 0,
        YES = 1,
    }
    const router = useRouter();
    const newId = plan.title.replace(" ", "_").toLowerCase();

    const scrollToPricingCard = () => {
        const element = document.getElementById(newId);
        if (element) {
            const offset = element.offsetTop;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            setTimeout(() => {
                handleShowMore(!showMore as boolean);
            }, 300);
        }
    };

    const { convertedAmount, currencySymbol, currencyCode } = useCurrencyConverter(PlanPrice);
    const { convertedAmount: convertedAmountMonthly } = useCurrencyConverter(plan.monthly);


    return (
        <section className={`w-full min-w-[262px] md:min-w-[200px] mx-auto max-w-[430px] ${className}`} id={newId}>
            <div className='flex rounded-t-2xl bg-primary text-white justify-center'>
                <h1 className='text-2xl lg:text-3xl font-poppins py-4 font-bold capitalize text-center'>{plan.title}</h1>
            </div>
            <Card
                key={plan.title}
                className={
                    plan.popular === PopularPlanType.YES
                        ? "drop-shadow-2xl shadow-top rounded-t-none  shadow-black/10 capitalize  rounded-b-2xl dark:shadow-white/10   bg-slate-50 transition-all duration-150  hover:shadow-xl  hover:lg:scale-[1.04]  lg:scale-[1.03]"
                        : "drop-shadow-2xl shadow-top rounded-t-none shadow-black/10 capitalize   rounded-b-2xl transition-all duration-150   bg-slate-50 hover:shadow-xl  hover:lg:scale-[1.01] "
                }
            >
                <CardHeader>
                    <CardTitle className="flex item-center  justify-between items-center">
                        {discount &&
                            <div className='flex  items-center gap-3 text-[14px]'>
                                <p className='line-through'>{currencySymbol}{convertedAmountMonthly}</p>
                                <Badge className='bg-blue-100 hover:bg-blue-100 hover:text-blue-950 text-[14px] px-3 py-1  text-blue-950'>Save {Math.round(((plan.monthly - PlanPrice) / plan.monthly) * 100)}%</Badge>
                            </div>
                        }
                        {plan.popular === PopularPlanType.YES ? (
                            <Badge
                                variant="secondary"
                                className="text-[11px] lg:text-sm text-primary"
                            >
                                Most popular
                            </Badge>
                        ) : null}
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">{currencySymbol}{convertedAmount}</span>
                        <span className="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription className={`${!discount ? "hidden" : "hidden"}`}>{plan.description}</CardDescription>
                    <CardDescription className='text-red-500 font-semibold'>Buy & Renew at same cost</CardDescription>
                </CardHeader>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex flex-col justify-start items-start w-full">

                    <div className="space-y-1 md:space-y-3">
                        {plan.features.map((benefit: any, index: number) => (
                            <span
                                key={index}
                                className="flex"
                            >
                                {benefit?.cross || (benefit?.monthly && billingCycle == "monthly") ? <X className='text-red-500' /> :
                                    <Check className="text-green-500" />
                                }
                                {" "}
                                <h3 className="text-sm lg:text-[17px] text-black font-[500] ml-2">{benefit.description}</h3>

                            </span>
                        ))}
                    </div>
                    <div className="text-center mt-3  order-5">
                        <button
                            onClick={() => {
                                if (showMore) {
                                    scrollToPricingCard();
                                } else {

                                    handleShowMore(!showMore as boolean)
                                }
                            }}
                            className={`${(plan?.security?.length == 0 || plan?.resources?.length == 0 || plan?.support?.length == 0) && "hidden"} text-center flex justify-center items-center gap-2   w-full text-[15px] lg:text-[18px] font-semibold hover:underline focus:outline-none`}

                        >
                            {showMore ? <ChevronUp className='bg-indigo-100 rounded-full  ' size={20} /> : <ChevronDown className='bg-indigo-100 rounded-full  ' size={20} />}
                            {showMore ? 'See Less Features' : 'See More Features'}
                        </button>
                    </div>
                    <Button
                        onClick={() => {
                            const planDetails = {
                                plan_name: plan.title,
                                plan_price: PlanPrice
                            };
                            window.gtag("event", "order_item", planDetails)
                            router.push(`${process.env.NEXT_PUBLIC_baseurl}${plan.href}&currency=${currencyCode == "INR" ? 1 : 2}&${process.env.NEXT_PUBLIC_}`)

                        }
                        }
                        className={`order-6 rounded-lg mt-6 w-full text-[16px]  border-primary font-poppins py-5 border-2  text-white `} >Buy Now</Button>


                    {/* See More */}

                    {showMore && (

                        <>
                            {plan?.security?.length > 0 && (
                                <>
                                    <Button variant={"outline"} className="font-bold w-full my-6 py-3 text-md hover:bg-white  rounded-lg ">Security</Button>
                                    <div className="space-y-1 md:space-y-3">
                                        {plan.security.map((benefit: any) => (
                                            <span
                                                key={benefit}
                                                className="flex"
                                            >
                                                <Check className="text-green-500" />{" "}
                                                <h3 className="text-sm lg:text-[17px] text-black font-[500] ml-2">{benefit.description}</h3>

                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Support */}
                            {
                                plan?.support?.length > 0 && (
                                    <>
                                        <Button variant={"outline"} className="w-full font-bold my-6 py-3 text-md hover:bg-white  rounded-lg ">Support</Button>
                                        <div className="space-y-1 md:space-y-3">
                                            {plan.support.map((benefit: any, index: any) => (
                                                <span
                                                    key={index}
                                                    className="flex"
                                                >
                                                    <Check className="text-green-500" />{" "}
                                                    <h3 className="text-sm lg:text-[17px] text-black font-[500] ml-2">{benefit.description}</h3>
                                                </span>
                                            ))}
                                        </div></>
                                )
                            }

                            {
                                plan?.resources?.length > 0 && (
                                    <>
                                        <Button variant={"outline"} className="w-full my-6 font-bold py-3 text-md hover:bg-white  rounded-lg ">Resources</Button>
                                        <div className="space-y-1 md:space-y-3">
                                            {plan.resources.map((benefit: any, index: any) => (
                                                <span
                                                    key={index}
                                                    className="flex"
                                                >
                                                    <Check className="text-green-500" />{" "}
                                                    <h3 className="text-sm lg:text-[17px] text-black font-[500] ml-2">{benefit.description}</h3>
                                                </span>
                                            ))}
                                        </div></>
                                )
                            }
                        </>
                    )
                    }
                </CardFooter>
            </Card>
        </section>
    )
}

export default PricingCard