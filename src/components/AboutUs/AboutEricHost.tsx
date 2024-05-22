"use client"
import React from 'react'
import Container from '../Conatianers/Container'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import SmallHeading from '../Heading/SmallHeading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { AboutUs_1, AboutUs_2 } from '@/assests/AboutUs/assets';
import AboutCard from './AboutCard';

const AboutEricHost = () => {

  const router = useRouter();

  // Static data with lorem ipsum text
  const title = "About ";
  const subtitle = "Erichost";
  const paragraphs = [
    "ERIC WEB SOLUTIONS PRIVATE LIMITED is India's leading web hosting provider. Since 2019, ERIC WEB SOLUTIONS PRIVATE LIMITED has been offering reliable hosting services at the most competitive rates. We emphasize on providing best services and ensure that you are accompanied in every step of the process. All our hosting accounts are supported by a comprehensive control panel through which you can fully control and manage your site. You can create emails, install a blog & add sub domains all by yourself by a simple click of the mouse.",
  ];
  const buttonText = "Learn More";
  const href = "/learn-more";

  return (
    <Container
      id="about-eric"
      className="py-16 sm:py-[6rem] lg:py-[7rem] flex flex-col gap-6 md:gap-7 lg:gap-9"
    >
      <SmallHeading
        headingContent={
          <>
            {title}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {subtitle}
            </span>
          </>
        }
      />
      <div className="text-center flex flex-col gap-5 md:gap-7">
        {/* Render paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="w-full mx-auto text-sm md:text-xl text-ericheading">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="grid  lg:grid-cols-2 gap-8 md:mt-10 place-items-start">
        <AboutCard
          imageSrc={AboutUs_1}
          title='Why you should choose Erichost?'
          imageAlt='about-1'
          description=' EricHost is providing the best hosting services in India with high-speed Indian servers. EricHost provides an easy-to-manage dashboard with a CPanel control panel that lets you install different apps, scripts, and cms through Softaculous and free SSLs in all domains, which helps beginners create their first blog and grow.'
        />

        <AboutCard
          imageSrc={AboutUs_2}
          title='Dedicated Secured Servers'
          imageAlt='about-2'
          description='We offer high-speed dedicated secure servers with NVMe SSD storage, free SSL certificates, easy-to-manage control panels, daily backups, global server locations, and a seven to thirty-day money-back guarantee. We are affordable and one of the best web hosting company in India.'
        />

      </div>
    </Container>
  )
}

export default AboutEricHost;
