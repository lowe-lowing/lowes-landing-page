import React from "react";
import { Headline } from "./components";
import Image from "next/image";
import { ImageRenderer } from "@/assets/images/Image";
import { Title } from "../ui";

export const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe">
      <Headline />
      <div className="flex flex-col items-center">
        <Title>About Me</Title>
        <div className="grid grid-cols-right-auto bg-secondary p-10 max-w-4xl rounded-lg w-full">
          <div className="text-primary">
            <div className="text-2xl underline mb-2">Fullstack Developer</div>
            <div>
              I am a fullstack web developer based in Stockholm, Sweden. With a passion for building engaging and
              user-friendly web applications I strive to create high-quality, functional, and visually appealing digital
              solutions that meet the needs of businesses and users.
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
