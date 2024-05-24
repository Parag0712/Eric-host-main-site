import React from 'react'
import PricingCard from './PricingCard'

type Props = {}

const VpsPricing = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            Solo, agency or team? We’ve got you covered.
          </h2>
        </div>
        {/* <!-- End Title --> */}

        <div className="relative xl:w-10/12 xl:mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>

        <div className="mt-7 text-center">
          <p className="text-xs text-gray-400">
            Prices in USD. Taxes may apply.
          </p>
        </div>
      </div>
    </div>

  )
}

export default VpsPricing