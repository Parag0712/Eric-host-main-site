import React from 'react'
import { Button } from '../ui/button'
import { FaCheckCircle } from 'react-icons/fa'
import { Statistics } from './Stattistics'

type Props = {}

const HeroAboutSection = (props: Props) => {
    return (
        <section className='bg-gradient-to-r from-indigo-400 to-indigo-600 '>
          
            <section className="py-16 lg:py-28 relative z-0 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                <h1 className="text-3xl xl:text-5xl lg:max-w-[90%] mx-auto text-center font-poppins  font-bold  mb-5 md:leading-normal">
                    Affordable High-Performance<span className=""><br /> Hosting Solutions</span>
                    </h1>
                    <p className=" lg:max-w-2xl mx-auto text-center text-[15px] md:text-base font-poppins leading-7 mb-9">
                    ERIC WEB SOLUTIONS PRIVATE LIMITED is India's leading web hosting provider. Since 2019, ERIC WEB SOLUTIONS PRIVATE LIMITED has been offering reliable hosting services at the most competitive rates.
                  </p>
                </div>
            </section>

        </section>

    )
}

export default HeroAboutSection