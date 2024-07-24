import React from "react";
import { Headline } from "./components";
import { ImageRenderer } from "@/assets/images/Image";
import { Title } from "../ui";
import SectionContainer from "../ui/SectionContainer";

export const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe">
      <Headline />
      <div className="flex flex-col items-center">
        <Title>About Me</Title>
        <SectionContainer>
          <div className="grid gap-5 p-2 grid-cols-right-auto max-sm:block">
            <ImageRenderer
              src="CVPicture"
              alt="Picture of Me"
              width={200}
              className="aspect-[1/1.25] object-cover rounded-lg max-sm:w-24 max-sm:float-right order-last max-sm:ml-5 max-sm:mb-2"
            />
            <div className="order-first text-primary">
              <div className="mb-2 text-2xl underline">Web Developer</div>
              <div>
                {`
              Lived in Åkersberga, Stockholm, Sweden with family since 2009. Likes to keep fit and socialize with people
              whenever I get the chance. Has a burning passion in solving problems and simplifying people's lives with
              high-quality, functional, and visually appealing digital solutions.
              `}
              </div>
              <div className="m-2" />
              <div>
                I found my interest in programming during my gymnasium years at Åva Gymnasium where I studied their
                amazing programming courses. Furthermore, I taught myself what i needed to land my first junior role at
                QTE Development where I got introduced to the industry.
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
};
