import Container from '@/components/Conatianers/Container'
import { InstructionCard } from '@/components/Domain/InstructionCard'
import { FAQ } from '@/components/Faq/Faq'
import { Cta } from '@/components/affiliatesprogram/Cta'
import HeroSection from '@/components/affiliatesprogram/HeroSection'
import TermConditons from '@/components/affiliatesprogram/TermConditons'
import { servicesProps, termandcondition } from '@/data/Affiliatesprogram/data'
import faq from '@/data/Affiliatesprogram/faq.json'
import React from 'react'
type Props = {}

const affiliatesprogram = (props: Props) => {
    return (
        <section>
            <HeroSection
                title="Our Hosting Affiliate Program"
                description="We offer nice commissions, however most of our affiliates endorse US for a unique reason the standard of service. If you would like to advocate a number that will not fail your customers, readers, be part of our affiliate program!"
                label="Login Here"
                href='https://clients.erichost.com/affiliates.php'
            />
            <InstructionCard
                {...servicesProps[0]}
            />
            <section className='bg-primary
            '>
                
            <InstructionCard
                {...servicesProps[1]}
            />
            </section>
            <TermConditons 
            termandcondition={termandcondition}
            />
            <Cta />
            <FAQ faq={faq} />
        </section>
    )
}

export default affiliatesprogram