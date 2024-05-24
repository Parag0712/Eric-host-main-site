import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <section className='bg-gradient-to-r from-indigo-400 to-indigo-600 '>
            <section className="py-16 lg:py-28 relative z-0 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="text-3xl xl:text-5xl lg:max-w-[90%] mx-auto text-center font-poppins  font-bold  mb-5 md:leading-normal">
                        Your Own VPS, Fully Managed <br />by Experts
                    </h1>
                    <p className=" lg:max-w-2xl mx-auto text-center text-[15px] md:text-base font-poppins leading-7 mb-9">
                        Web hosting made easy & affordable, hosting services solution for successful personal and business websites.
                    </p>
                </div>
            </section>
        </section>
    )
}

export default HeroSection