"use client"
import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

type Testimonial = {
    name: string;
    testimonial: string;
};

type Props = {
    testimonials: Testimonial[];
};

const NewTestimonials = (props: Props) => {
    const { testimonials } = props;
    const sliderRef = useRef(null);
    const slider = useRef<any>(null);

    const animation = { duration: 80000, easing: (t: any) => t }

    useEffect(() => {
        if (sliderRef.current) {
            slider.current = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 2.5,
                            spacing: 32,
                        },
                    },
                },
                created(s) {
                    s.moveToIdx(5, true, animation)
                },
                updated(s) {
                    s.moveToIdx(s.track.details.abs + 5, true, animation)
                },
                animationEnded(s) {
                    s.moveToIdx(s.track.details.abs + 5, true, animation)
                },
            });
        }

        return () => {
            slider.current?.destroy();
        };
    }, []);

    return (
        <section className=" bg-[#4346C2]">
            <div className="mx-auto   px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="-mx-6  lg:col-span-2 lg:mx-0">
                    <div ref={sliderRef} className="keen-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className=" rounded-2xl keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-green-500">
                                            {/* Assuming a 5-star rating for simplicity */}
                                            {[...Array(5)].map((_, index) => (
                                                <svg key={index} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-2xl font-bold  sm:text-3xl">{testimonial.name}</p>
                                            <p className="mt-4 leading-relaxed text-gray-700">{testimonial.testimonial}</p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; {testimonial.name}
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewTestimonials;