import React from 'react'

import Container from '@/components/Conatianers/Container'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RaingImage, RaingImage2 } from '@/assests/config'
import { FaCheckCircle } from "react-icons/fa"
import { MdSizeHeroImage } from '@/assests/HeroSection/assets'
type Props = {}

const HeroSection = (props: Props) => {
    return (
        <>
            <Container className=''>
                <div className='flex px-3 md:px-0 py-[2rem] md:py-[4rem] items-center justify-between flex-col md:gap-7 lg:flex-row'>
                    <div className='left w-full lg:w-[50%] order-1 lg:order-1 text-ericheading '>
                        <div className='flex flex-col gap-3 items-center lg:items-start lg:text-left '>
                            {/* Heading */}
                            <div className='flex flex-col gap-4 md:gap-5'>
                                <div className='font-[500] text-[16px] leading-[16px] md:leading-[25px] md:text-[20px] xl:text-[25px] font-poppins text-center lg:text-left'>Elevate Your Business with Our Cutting-Edge</div>
                                <div className='font-[600] ml-[-1px] font-poppins text-center leading-[30px] md:leading-[55px] md:text-left text-[25px] md:text-[45px] lg:text-[50px]'>Business Hosting Solutions!</div>
                            </div>
                            {/* List of Feature */}
                            <div className=' mt-2'>
                                <ul className='text-[17px] md:text-[20px] lg:text-[22px]'>
                                    <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                                        <FaCheckCircle className='text-green-600' />
                                        <p>Premium Servers</p>
                                    </li>
                                    <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                                        <FaCheckCircle className='text-green-600' />
                                        <p>Free Website Migration</p>
                                    </li>
                                    <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                                        <FaCheckCircle className='text-green-600' />
                                        <p>24/7 Customer Support</p>
                                    </li>
                                    <li className='flex gap-2 items-center justify-center lg:justify-normal'>
                                        <FaCheckCircle className='text-green-600' />
                                        <p>99.9% uptime guarantee</p>
                                    </li>
                                </ul>
                            </div>
                            {/* Pricing */}
                            <div>
                                <div className='text-[15px] md:text-[20px]'>
                                    <span className='text-[30px] md:text-[45px] font-bold'>₹2.99</span>/month
                                </div>
                                <div className='text-[15px] leading-[20px] md:text-[20px]'>+3 Months Free</div>
                            </div>
                            {/* Button */}
                            <div className='flex gap-5 sm:gap-6 mt-4 flex-col  w-[70%] sm:flex-row '>
                                <Button className='bg-primary rounded-[4px]  w-full text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4'>Explore Plans</Button>
                                <Button className='text-primary rounded-[4px]  w-full border-2 border-primary text-[14px] md:text-[16px] font-semibold py-5 sm:py-6 px-4 hover:text-primary' variant={"outline"}>02:30:17:20</Button>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className='right w-full order-2  lg:order-2 lg:block lg:w-[53%] xl:w-[50%] mt-12 md:mt-0 '>
                        <Image
                            src={MdSizeHeroImage}
                            height={100}
                            width={100}
                            layout='responsive'
                            alt='HeroImage'
                            className='h-auto sm:max-h-[400px] object-contain lg:max-h-[100%]'
                        />
                    </div>
                </div>
                <div className='w-full mt-7 hidden md:block'>
                    <Image
                        src={RaingImage}
                        height={100}
                        width={200}
                        layout='responsive'
                        alt='Rating Image'
                    />
                </div>

                <div className='w-full mt-7 max-w-[80%] sm:max-w-[70%] m-auto md:hidden'>
                    <Image
                        src={RaingImage2}
                        height={100}
                        width={200}
                        layout='responsive'
                        alt='Rating Image'
                    />
                </div>
            </Container>

        </>

    )
}

export default HeroSection