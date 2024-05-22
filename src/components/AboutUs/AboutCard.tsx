import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Image from 'next/image';

interface AboutCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const AboutCard = ({ imageSrc, imageAlt, title, description }: AboutCardProps) => {
  return (
    <Card
      className=" lg:min-h-[515px] border-none  lg:border-gray-800  shadow-none  lg:max-h-[515px] lg:bg-white justify-center flex lg:flex-col gap-3 w-full  transition-all duration-150 capitalize lg:shadow-xl  "
    >
      <CardHeader className="py-1 hidden lg:block ">
        <CardTitle className=" grid gap-4 place-items-center">
          <div className="mb-3 w-full lg:w-[70%] xl:w-auto fill-primary">
            <Image src={imageSrc} layout="responsive" alt={imageAlt} />
          </div>
        </CardTitle>
        <div className='hidden lg:block text-center font-semibold text-2xl mt-2'  >
          {title}
        </div>
      </CardHeader>
      <CardContent className="px-0 lg:p-6 text-center text-[15px] lg:text-[16px] mt-0">
        <div className='mb-3  lg:hidden text-center font-semibold text-2xl mt-2'  >
          {title}
        </div>
        {description}
      </CardContent>
    </Card>
  );
};

export default AboutCard;
