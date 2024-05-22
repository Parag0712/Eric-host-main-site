import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string,[key: string]: any  };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`px-[15px]  sm:container  max-w-[1340px]   lg:max-w-[1300px]  ${className}`} {...props}>{children}</div>;
};

export default Container;