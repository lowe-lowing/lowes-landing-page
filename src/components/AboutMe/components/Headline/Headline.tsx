import LightBulbImg from "@/assets/light.svg";
import { DowloadCVButtons } from "@/components/ui";
import Image from "next/image";
import React from "react";
import { SplitText } from "./components/SplittText";
import { Balancer } from "react-wrap-balancer";

export const Headline: React.FC = () => {
  return (
    <div className="titles-container pb-[-10]">
      <Image src={LightBulbImg} className="lightning" alt="lightning" />
      <div className="titles">
        <div className="name">
          <SplitText copy="Lowe Löwing" role="heading" animationDelay={0} />
        </div>
        <div className="job-title">
          <SplitText copy="Web Developer" role="heading" animationDelay={1.2} />
        </div>
        <p className="description">
          <Balancer>
            I am a developer based in Stockholm, Sweden with a passion for building engaging and user-friendly
            applications. I strive to create high-quality, functional, and visually appealing digital solutions that
            meet the needs of businesses and users.
          </Balancer>
        </p>
      </div>
      <div className="absolute bottom-[25%] animate-fade-in">
        <DowloadCVButtons />
      </div>
    </div>
  );
};
