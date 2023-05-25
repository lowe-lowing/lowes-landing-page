import React from "react";

type Props = {
  company: string;
  position: string;
  dateDisplay: string;
  description: string;
  place: string;
};

export const Employment: React.FC<Props> = ({ company, position, dateDisplay, description, place }) => {
  return (
    <div>
      <div className="text-lg">
        <span className="font-bold">{company}</span>, {place} - <span className="font-">{position}</span>
      </div>
      <div className="text-xs">{dateDisplay}</div>
      <div className="text-base">{description}</div>
    </div>
  );
};
