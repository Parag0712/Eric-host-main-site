import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  headingContent: React.ReactNode;
  description?: string;
  classname?:string
};

const SmallHeading = ({ headingContent, description,classname }: Props) => {
  return (
    <>
      <h2 className={cn("text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold  text-center",classname)}>
        {headingContent}
      </h2>
      {
        description && 
        <p className="text-sm sm:text-xl text-muted-foreground mt-2  mx-auto lg:mx-0 text-center">
          {description}
        </p>
      }     
    </>
  );
};

export default SmallHeading;
