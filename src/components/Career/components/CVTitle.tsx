import React from "react";

export const CVTitle: React.FC<{ title: string }> = ({ title }) => {
  return <div className="text-2xl underline mb-2 font-bold">{title}</div>;
};
