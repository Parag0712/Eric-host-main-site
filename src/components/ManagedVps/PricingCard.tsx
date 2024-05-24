import React from 'react'

type Props = {}

const PricingCard = (props: Props) => {
  return (
     <div>
              {/* <!-- Card --> */}
              <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
                <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">Professional</h3>
                <div className="text-sm text-gray-500 dark:text-neutral-500">Everything a small team needs.</div>

                <div className="mt-5">
                  <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">$18</span>
                  <span className="text-lg font-bold text-gray-800 dark:text-neutral-200">.00</span>
                  <span className="ms-3 text-gray-500 dark:text-neutral-500">USD / monthly</span>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                  {/* <!-- List --> */}
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Up to 10 people
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Collect data
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Code extensibility
                      </span>
                    </li>
                  </ul>
                  {/* <!-- End List --> */}

                  {/* <!-- List --> */}
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Custom reports
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Product support
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Activity reporting
                      </span>
                    </li>
                  </ul>
                  {/* <!-- End List --> */}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">Cancel anytime.</p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">No card required.</p>
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800">Start free trial</button>
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}
            </div>
  )
}

export default PricingCard