import React from 'react'
import Container from '@/components/General/Container'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroImage, RaingImage } from '@/assests/config'
import { FaCheckCircle } from "react-icons/fa"
import HeroSection from '@/components/HomePage/HeroSection'
import { Pricing } from '@/components/HomePage/Pricing'
import Card from '@/components/Card'
import { ChooseThePlans } from '@/components/HomePage/ChooseThePlans'
import { Hero } from '@/components/HomePage/Hero'
import BusinessInfo from '@/components/HomePage/BusinessInfo'
type Props = {}

const page = (props: Props) => {
  return (
    <section>
      <Hero />
      <Pricing />
      <ChooseThePlans />
      <BusinessInfo />
    </section>
  )
}

export default page