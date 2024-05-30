"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import testimonials from "../../data/HomePage/testimonials.json";
import SmallHeading from '../Heading/SmallHeading';

interface Testimonial {
    name: string;
    testimonial: string;
}


const Testimonial = () => {
    useEffect(() => {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: true,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 100
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 32,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className=" pt-20 pb-24 bg-primary ">
            <div className="mx-auto max-w-full   px-10 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <SmallHeading 
                    headingContent = "Our Lovely Client Say About Us"
                    classname='text-white'
                    />
                </div>
                {/*Slider wrapper*/}
                <div className="swiper mySwiper ">
                    <div className="swiper-wrapper w-max">
                        {testimonials.testimonials.map((testimonial, index) => (
                            <div className="swiper-slide " key={index}>

                                <div
                                    className=" text-black bg-white w-[350px] max-w-full relative rounded-2xl border flex-shrink-0  px-8 py-6 md:w-[600px]"

                                >
                                    <blockquote className="flex flex-col gap-2">
                                        <div
                                            aria-hidden="true"
                                            className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                        ></div>
                                        <div className="relative z-20 mt-6  flex flex-row items-center">
                                            <span className="flex flex-col gap-1">
                                                <span className="font-bold text-sm md:text-lg leading-[1.6] text-black font-poppins">
                                                    {testimonial.name}
                                                </span>
                                            </span>
                                        </div>

                                        <span className="relative z-20 sm:mb-3 text-sm md:text-lg leading-[1.6] text-black font-poppins">
                                            {testimonial.testimonial}
                                        </span>

                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
