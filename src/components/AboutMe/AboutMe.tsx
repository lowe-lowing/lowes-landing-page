import React from "react";
import { Headline } from "./components";
import { ImageRenderer } from "@/assets/images/Image";
import { Title } from "../ui";

export const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe">
      <Headline />
      <div className="flex flex-col items-center">
        <Title>About Me</Title>
        <div className="grid grid-cols-right-auto bg-secondary p-10 max-w-[50%] rounded-lg w-full">
          <div className="text-primary">
            <div className="text-2xl underline mb-2">Fullstack Developer</div>
            <div>
              {`
              Lived in Åkersberga, Stockholm, Sweden with family since 2009. Likes to keep fit and socialize with people
              whenever I get the chance. Has a burning passion in solving problems and simplifying people's lives with
              high-quality, functional, and visually appealing digital solutions.
            `}
            </div>
            <br />
            <div>
              I found my interest in programming during my gymnasium years at Åva Gymnasium where I studied their
              amazing programming courses. Furthermore, I taught myself what i needed to land my first junior role at
              QTE Development where I got introduced to the industry.
            </div>
          </div>
          <ImageRenderer
            src="CVPicture"
            alt="Picture of Me"
            width={200}
            className="aspect-[1/1.25] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
