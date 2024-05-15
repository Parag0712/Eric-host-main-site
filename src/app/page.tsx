import React from 'react'
import Container from '@/components/General/Container'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroImage, RaingImage } from '@/assests/config'
import { FaCheckCircle } from "react-icons/fa"
import HeroSection from '@/components/HomePage/HeroSection'
type Props = {}

const page = (props: Props) => {
  return (
    <section>
      {/* Hero Seciton */}
      <HeroSection />
    </section>
  )
}

export default page