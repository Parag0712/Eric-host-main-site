"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  description: string;
  label: string;
  href: string;
};

const HeroSection = ({ title, description, label, href }: Props) => {
  const router = useRouter();
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
                <Button onClick={() => router.push(href)} className="w-9/12 text-black rounded-[4px]  sm:w-1/3 text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4" variant={"outline"}>
                  {label}
                </Button>
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
