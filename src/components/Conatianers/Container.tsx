import React, { ReactNode } from "react";

type Props = { children?: ReactNode, className?: string,[key: string]: any  };

const Container: React.FC<Props> = ({ children, className, ...props }) => {
  return <div className={`container  max-w-[1340px]  lg:max-w-[96%] xl:max-w-[1440px]  ${className}`} {...props}>{children}</div>;
};

export default Container;