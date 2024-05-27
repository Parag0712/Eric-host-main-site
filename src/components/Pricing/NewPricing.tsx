import { Check } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { useRouter } from 'next/navigation'

const NewPricing = ({ plan, isAnnual }: any) => {
    const currency = "₹"
    const year = isAnnual;
    const PlanPrice = year ? plan.monthly : plan.annually;
    enum PopularPlanType {
        NO = 0,
        YES = 1,
    }
    const router = useRouter();
    return (
        <div className={`flex flex-col ${PopularPlanType.YES ==plan.popular ? 'border-2 border-blue-600 shadow-xl' : 'border'} border-gray-200 text-center rounded-xl p-8 `}>
            {
                PopularPlanType.YES ===plan.popular && (
                    <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
                )
            }
            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">{plan.title}</h4>
            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl mr-0">{currency}</span>
                {PlanPrice}/m
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">{plan.description}</p>

            <ul className="mt-7 space-y-2.5 text-sm">
                {plan.features.map((benefit: any, index: number) => (
                    <li className="flex space-x-2" key={index}>
                        <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        <span className="text-gray-800 text-md dark:text-neutral-400">
                            {benefit.description}
                        </span>
                    </li>
                ))}

                <li className="flex space-x-2 w-full">
                    <span className="bg-gray-100  w-full text-center border-gray-200 py-3 px-4 text-md font-bold text-gray-800  ">
                        Security
                    </span>
                </li>

                {plan.security.map((benefit: any,index:any) => (
                    <li className="flex space-x-2" key={index}>
                        <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        <span className="text-gray-800 dark:text-neutral-400">
                            {benefit.description}
                        </span>
                    </li>
                ))}
                <li className="flex space-x-2 w-full">
                    <span className="bg-gray-100  w-full text-center border-gray-200 py-3 px-4 text-md font-bold text-gray-800  ">
                        Support
                    </span>
                </li>
                {plan.support.map((benefit: any,index:any) => (
                    <li className="flex space-x-2" key={index}>
                        <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        <span className="text-gray-800 dark:text-neutral-400">
                            {benefit.description}
                        </span>
                    </li>
                ))}
                <li className="flex space-x-2 w-full">
                    <span className="bg-gray-100  w-full text-center border-gray-200 py-3 px-4 text-md font-bold text-gray-800  ">
                        Resources
                    </span>
                </li>

                {plan.resources.map((benefit: any,index:any) => (
                    <li className="flex space-x-2" key={index}>
                        <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        <span className="text-gray-800 dark:text-neutral-400">
                            {benefit.description}
                        </span>
                    </li>
                ))}

            </ul>

            <a className={`mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border ${PopularPlanType.YES==plan.popular ? "border border-transparent bg-blue-600 text-white hover:bg-blue-700" : "border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600"}  disabled:opacity-50 disabled:pointer-events-none`} href={plan.href}>
                Buy Now
            </a>
        </div>
    )
}

export default NewPricing