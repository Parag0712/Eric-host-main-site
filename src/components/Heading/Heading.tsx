import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  headingContent: React.ReactNode;
  description?: string | React.ReactNode;
  classname?:string;
  descclassname?:string;
};

const Heading = ({ headingContent, description,classname,descclassname }: Props) => {
  return (
    <>
      <h2 className={cn("text-3xl md:text-4xl lg:text-[3rem] lg:leading-[3.7rem] font-bold",classname)}>
        {headingContent}
      </h2>
      {
        description && 
        <p className={cn("md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground",descclassname)} >
          {description}
        </p>
      }
    </>
  );
};

export default Heading;
