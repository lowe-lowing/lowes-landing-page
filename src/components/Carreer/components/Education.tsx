import React from "react";

type Props = {
  school: string;
  degree: string;
  dateDisplay: string;
  description: string;
  place: string;
};

export const Education: React.FC<Props> = ({ school, degree, dateDisplay, description, place }) => {
  return (
    <div>
      <div className="text-lg">
        <span className="font-bold">{school}</span>, {place} - <span className="font-">{degree}</span>
      </div>
      <div className="text-xs">{dateDisplay}</div>
      <div className="text-base">{description}</div>
    </div>
  );
};
