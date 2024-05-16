import React from 'react'
import Container from '../General/Container'
import { Button } from '../ui/button'

type Props = {}

const BusinessInfo = (props: Props) => {
    return (
        <Container
            id="pricing"
            className=" pb-24 sm:pb-[7rem] lg:mb-16 lg:py-[6rem] flex flex-col gap-6 md:gap-7 lg:gap-9"
        >
            <h2 className=" text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center">
                Business
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Hosting{" "}
                </span>
                <br />
                Where Reliability Meets Results
            </h2>
            <div className="text-center flex flex-col gap-5  md:gap-7">
                {/* Here Paragraph */}
                <p className="w-full mx-auto  text-sm md:text-xl text-ericheading">
                    Business Hosting is not just a hosting solution, it’s a smart investment in your business’s online success. It’s about having the support, flexibility and resources to outperform your competitors and fulfilling your customers’ expectations. Business Hosting provides the foundation for your digital triumphs whether you’re running an e-commerce empire, managing a portfolio of websites, or establishing your brand’s online presence.
                </p>
                <p className='"w-full mx-auto  text-sm md:text-xl text-ericheading'>
                    Ready to elevate your business to new heights of online excellence?
                </p>

                <p className='w-full mx-auto  text-sm md:text-xl text-ericheading'>
                    Experience the power of Business Hosting with EricHost. Sign up now and embark on a hosting journey where results meets reliability and where your aspirations become digital realities.
                </p>
                
                <p className='w-full mx-auto  text-sm md:text-xl text-ericheading'>
                    Let’s redefine your online presence together – where performance is unbeatable, support is unwavering, and success is inevitable!
                </p>
            </div>
            <div className='flex justify-center mt-2'>
                
            <Button className="w-full my-6 py-6 text-[17px] max-w-[400px] mx-auto">Explore All Plans</Button>
            </div>
        </Container>
    )
}

export default BusinessInfo