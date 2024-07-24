import { OpenInNewTab } from "@/utils";
import React from "react";

type Props = {
  title: string;
  source: string;
  date: string;
  link: string;
};

export const Certificate: React.FC<Props> = ({ title, source, date, link }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 whitespace-nowrap">
      <div onClick={() => OpenInNewTab(link)} className="font-bold underline cursor-pointer">
        {title}
      </div>
      <div> - </div>
      <div>{source}, </div>
      <div>{date}</div>
    </div>
  );
};
