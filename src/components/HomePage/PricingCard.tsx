import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Check } from 'lucide-react'

type Props = {}

const PricingCard = ({ pricing, plan,isAnnual }: any) => {
    const currency = "₹"
    const year = isAnnual;
    const PlanPrice = year ? plan.monthly : plan.annually;
    enum PopularPlanType {
        NO = 0,
        YES = 1,
    }

    return (
        <Card
            key={plan.title}
            className={
                plan.popular === PopularPlanType.YES
                    ? "drop-shadow-xl shadow-black/10 capitalize dark:shadow-white/10 border-[1px] transition-all duration-150  hover:shadow-xl  hover:border-primary  lg:scale-[1.03]"
                    : "border-[1px] transition-all duration-150 capitalize hover:shadow-xl  hover:border-primary "
            }
        >
            <CardHeader>
                <CardTitle className="flex item-center justify-between ">
                    {plan.title}
                    {plan.popular === PopularPlanType.YES ? (
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
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

            <CardFooter className="flex flex-col justify-start items-start w-full">

                <div className="space-y-4">
                    {plan.features.map((benefit: any, index: number) => (
                        <span
                            key={index}
                            className="flex"
                        >
                            <Check className="text-green-500" />{" "}
                            <h3 className="ml-2">{benefit.description}</h3>
                        </span>
                    ))}
                </div>
                <Button className="w-full my-6">Security</Button>

                <div className="space-y-4">
                    {plan.security.map((benefit: any) => (
                        <span
                            key={benefit}
                            className="flex"
                        >
                            <Check className="text-green-500" />{" "}
                            <h3 className="ml-2">{benefit.description}</h3>
                        </span>
                    ))}
                </div>
                <Button className="w-full my-6">Support</Button>

                <div className="space-y-4">
                    {plan.security.map((benefit: any,index:any) => (
                        <span
                            key={index}
                            className="flex"
                        >
                            <Check className="text-green-500" />{" "}
                            <h3 className="ml-2">{benefit.description}</h3>
                        </span>
                    ))}
                </div>
                <Button className="w-full my-6">Resources</Button>

                <div className="space-y-4">
                    {plan.resources.map((benefit: any,index:any) => (
                        <span
                            key={index}
                            className="flex"
                        >
                            <Check className="text-green-500" />{" "}
                            <h3 className="ml-2">{benefit.description}</h3>
                        </span>
                    ))}
                </div>
                
            </CardFooter>

        </Card>
    )
}

export default PricingCard