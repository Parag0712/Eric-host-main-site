import React from 'react'
import Container from '../General/Container'
import { Button } from '../ui/button'
import Image from 'next/image'
import { map } from '@/assests/config'

type Props = {}

const MapSection = (props: Props) => {
    return (
        <Container
            id="pricing"
            className=" py-24 sm:pt-[7rem] sm:pb-0 sm:py-[8rem]  lg:pt-[7rem] lg:pb-0 flex flex-col gap-6 md:gap-7 lg:gap-9"
        >
            <div>
                <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
                    Data Centers All Around the World
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        {" "}
                        {" "}
                    </span>
                </h2>
                <p className="text-center md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                    Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: Canada, United Kingdom, France, India, and Singapore.</p>
            </div>
            <div className="text-center flex flex-col gap-5  md:gap-7">
                <Image
                    alt='map'
                    layout='responsive'
                    src={map}
                    className='object-cover'
                />
            </div>
        </Container>
    )
}

export default MapSection