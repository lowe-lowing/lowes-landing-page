import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <div className="w-[50%] bg-secondary rounded-lg max-sm:w-[95%] max-md:w-[85%] max-lg:w-[65%]">{children}</div>;
};

export default SectionContainer;
