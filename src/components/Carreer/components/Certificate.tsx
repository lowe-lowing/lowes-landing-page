import { OpenInNewTab } from "@/utils";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  source: string;
  date: string;
  link: string;
};

export const Certificate: React.FC<Props> = ({ title, source, date, link }) => {
  return (
    <div className="flex flex-row gap-2">
      <div onClick={() => OpenInNewTab(link)} className="font-bold underline cursor-pointer">
        {title}
      </div>
      <div> - </div>
      <div>{source}, </div>
      <div>{date}</div>
    </div>
  );
};
