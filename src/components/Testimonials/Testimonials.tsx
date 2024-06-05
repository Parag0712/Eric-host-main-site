"use client"
import React, { useState } from 'react'
import Card from './Card'
import testimonials from "../../data/HomePage/testimonials.json";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export const Testimonials = () => {

    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        // index -1 <0 ? setIndex(reviews.length-1) : setIndex(index-1);

        if (index - 1 < 0) setIndex(testimonials.testimonials.length - 1);
        else setIndex(index - 1);
    }
    function rightShiftHandler() {
        if (index + 1 >= testimonials.testimonials.length) setIndex(0);
        else setIndex(index + 1)
    }
    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * testimonials.testimonials.length);
        setIndex(randomIndex);
    }

    return (
        <section className='w-full bg-[#4346C2] mt-7 md:mt-0'>
            <div
                className='w-[85vw] md:w-[700px] mx-auto   flex flex-col
            justify-center items-center mt-10 py-10 md:p-10 transition-all duration-700 text-white
             rounded-md'>
                <div>
                    <Card review={testimonials.testimonials[index]} />
                </div>
                <div className='flex text-3xl mt-10 gap-3 text-gray-100 font-bold text-center justify-center'>    {/*  mx-auto */}
                    <button
                        className='cursor-pointer hover:text-gray-100'
                        onClick={leftShiftHandler}
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        onClick={rightShiftHandler}
                        className='cursor-pointer hover:text-gray-100'
                    >
                        <FiChevronRight />
                    </button>
                </div>
                <div className='hidden mt-6'>
                    <button
                        onClick={surpriseHandler}
                        className='bg-violet-500 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                        Surprise Me
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials