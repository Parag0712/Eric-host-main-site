import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string,[key: string]: any  };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`px-[15px]  sm:container  max-w-[1340px]   lg:max-w-[1300px] xl:max-w-[1200px] 2xl:max-w-[1472px] 2xl:px-[80px] ${className}`} {...props}>{children}</div>;
};

export default Container; 