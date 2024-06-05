import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import aimg from './pngegg.png' 
import Image from 'next/image'
export const Card = ({ review }: { review: any }) => {
    return (
        <div className='flex flex-col md:relative '>
            {/* <div className='absolute top-[-7rem] z-[10] mx-auto'> */}
            <div className=' mx-auto'>
                <Image
                    className='aspect-square rounded-full w-[80px] md:w-[120px]   z-25'
                    src={aimg} alt='' />
                <div className='w-[80px] md:w-[120px]  md:h-[100px] bg-white rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold tracking-wider text-2xl capitalize'>{review.name}</p>
                <p className='text-white uppercase text-sm'>{review?.city}</p>
            </div>
            <div className='text-white mx-auto mt-5'>
                <FaQuoteLeft />
            </div>
            <div className='text-center mt-4 text-white'>
                {review.testimonial}
            </div>
            <div className='text-white mx-auto mt-5'>
                <FaQuoteRight />
            </div>
        </div>
    )
}

export default Card