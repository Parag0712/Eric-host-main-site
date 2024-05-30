import { Check } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { useRouter } from 'next/navigation'
import { sendGAEvent } from '@next/third-parties/google'

const PricingCard = ({ plan, isAnnual }: any) => {
    const currency = "₹"
    const year = isAnnual;
    const PlanPrice = year ? plan.annually : plan.monthly;
    enum PopularPlanType {
        NO = 0,
        YES = 1,
    }
    const router = useRouter();
    return (
        <Card
            key={plan.title}
            className={
                plan.popular === PopularPlanType.YES
                    ? "drop-shadow-2xl shadow-top shadow-black/10 capitalize dark:shadow-white/10 border-[1px] bg-[#F8FAFC] transition-all duration-150  hover:shadow-xl  hover:lg:scale-[1.04] border-none lg:scale-[1.03]"
                    : "drop-shadow-2xl shadow-top shadow-black/10 capitalize transition-all duration-150 border-none bg-[#F8FAFC] hover:shadow-xl  hover:lg:scale-[1.01] "
            }
        >
            <CardHeader>
                <CardTitle className="flex item-center justify-between ">
                    {plan.title}
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
                    <span className="text-3xl font-bold">{currency + PlanPrice}</span>
                    <span className="text-muted-foreground"> /month</span>
                </div>

                <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <Button
                    onClick={() => router.push(plan.href) }
                    className={`rounded-[4px]  w-full text-[16px] border-[1px] border-primary font-poppins py-5 ${plan.popular == 0 && "border-2 border-primary text-primary hover:text-primary"}`} variant={plan.popular == 0 ? "outline" : "default"} >Buy Now</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex flex-col justify-start items-start w-full">

                <div className="space-y-1 md:space-y-3">
                    {plan.features.map((benefit: any, index: number) => (
                        <span
                            key={index}
                            className="flex"
                        >
                            <Check className="text-green-500" />{" "}
                            <h3 className="text-sm lg:text-[16px] ml-2">{benefit.description}</h3>
                        </span>
                    ))}
                </div>

                {/* Security */}
                {plan?.security?.length > 0 && (
                    <>
                        <Button className="w-full my-6 py-3 rounded-[4px] ">Security</Button>
                        <div className="space-y-1 md:space-y-3">
                            {plan.security.map((benefit: any) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                                    <Check className="text-green-500" />{" "}
                                    <h3 className="text-sm lg:text-[16px] ml-2">{benefit.description}</h3>
                                </span>
                            ))}
                        </div>
                    </>
                )}

                {/* Support */}
                {
                    plan?.support?.length  > 0 && (
                        <>
                            <Button className="w-full my-6 py-3 rounded-[4px] ">Support</Button>
                            <div className="space-y-1 md:space-y-3">
                                {plan.support.map((benefit: any, index: any) => (
                                    <span
                                        key={index}
                                        className="flex"
                                    >
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="text-sm lg:text-[16px] ml-2">{benefit.description}</h3>
                                    </span>
                                ))}
                            </div></>
                    )
                }

                {
                    plan?.resources?.length > 0 && (
                        <>
                            <Button className="w-full my-6 py-3 rounded-[4px] ">Resources</Button>
                            <div className="space-y-1 md:space-y-3">
                                {plan.resources.map((benefit: any, index: any) => (
                                    <span
                                        key={index}
                                        className="flex"
                                    >
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="text-sm lg:text-[16px] ml-2">{benefit.description}</h3>
                                    </span>
                                ))}
                            </div></>
                    )
                }
                <Button
                    onClick={() => router.push(plan.href)}
                    className={`rounded-[4px] my-6 w-full text-[16px] border-[1px] border-primary font-poppins py-5 ${plan.popular == 0 && "border-2 border-primary text-primary hover:text-primary"}`} variant={plan.popular == 0 ? "outline" : "default"} >Buy Now</Button>

            </CardFooter>

        </Card>
    )
}

export default PricingCard