import { ImageRenderer } from "@/assets/images/Image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Project, LinkType } from "../ProjectData";
import { OpenInNewTab } from "@/utils";

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 rounded-lg bg-slate-700 shadow-black card-shadow h-min">
      <div className="text-2xl whitespace-nowrap text-primary">{project.title}</div>
      <ImageRenderer src={project.image} alt={project.title} width={300} height={300} className="rounded-lg" />
      <div className="w-full">
        <div className="flex flex-row items-center gap-2 p-1 bg-white rounded-lg w-fit">
          {project.icons.map((icon, i) => (
            <React.Fragment key={i}>{icon}</React.Fragment>
          ))}
        </div>
      </div>
      <div className="text-sm text-primary">{project.description}</div>
      <div className="flex justify-end w-full">
        {project.type === LinkType.Link && (
          <button className="flex items-center gap-1 text-primary" onClick={() => OpenInNewTab(project.link)}>
            Go to <FaArrowRight />
          </button>
        )}
        {project.type === LinkType.Buttons && (
          <div className="flex gap-2">
            {project.gotoButtons.map((button, i) => (
              <div key={i} className="cursor-pointer">
                {button}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
