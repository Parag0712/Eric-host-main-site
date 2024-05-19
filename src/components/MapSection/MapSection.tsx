import React from 'react'
import Container from '../Conatianers/Container'
import { Button } from '../ui/button'
import Image from 'next/image'
import { map } from '@/assests/config'
import SmallHeading from '../Heading/SmallHeading'

type Props = {}

const MapSection = (props: Props) => {
    return (
        <Container
            id="pricing"
            className=" py-[3rem] sm:pt-[4rem] md:pt-[5rem] lg:pt-[6rem] flex flex-col gap-6 md:gap-7 lg:gap-9"
        >
            <div>
                <SmallHeading
                    headingContent={
                        <>
                            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                Data Centers
                                {" "}
                            </span>
                            All Around the World
                        </>
                    }
                    description='Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: Canada, United Kingdom, France, India, and Singapore.'
                />
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