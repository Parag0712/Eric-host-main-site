"use client"
import useCurrencyConverter from '@/Hooks/useCurrencyConverter';
import React, { useState } from 'react';

type Props = {
  title: string;
  description: string;
  label: string;
  placeholder: string;
  redirectBaseUrl: string;
};

const HeroSection = ({ title, description, label, placeholder, redirectBaseUrl }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {currencyCode} = useCurrencyConverter(10);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden bg-primary">
        {/* <!-- Gradients --> */}
        {/* <!-- End Gradients --> */}
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-28">
            <div className="max-w-[55rem] text-center mx-auto">
              {/* <!-- Title --> */}
              <div className="mt-5">
                <h1 className="block font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              </div>
              {/* <!-- End Title --> */}
              <div className="mt-5 max-w-3xl mx-auto">
                <p className="text-md lg:text-lg text-white text-center">
                  {description}
                </p>
              </div>
              {/* <!-- Buttons --> */}
              <div className="mt-8 gap-3">
                <form className="w-[80%] md:w-[60%] mx-auto" action={`${process.env.NEXT_PUBLIC_baseurl}${redirectBaseUrl}&currency=${currencyCode === "USD" ? 2 : 1}`}  method="post">
                  <div className="relative z-10 flex space-x-3 p-1 md:p-2 bg-white border rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                    <div className="flex-[1_0_0%]">
                      <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white">
                        <span className="sr-only">{label}</span>
                      </label>
                      <input
                        type="text"
                        name="query"  
                        id="hs-search-article-1"
                        className="py-2.5 px-4 block focus:border-none focus:outline-none w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-[0_0_auto]">
                      <button
                        type="submit"
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <svg
                          className="flex-shrink-0 size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- End Buttons --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default HeroSection;
