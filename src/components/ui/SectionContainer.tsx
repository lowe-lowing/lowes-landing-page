import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <div className="w-full px-2">
      <div className="container rounded-lg bg-secondary">{children}</div>
    </div>
  );
};

export default SectionContainer;
