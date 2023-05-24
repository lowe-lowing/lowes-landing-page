import React from "react";
import LightBulbImg from "@/assets/light.svg";
import Image from "next/image";
import { SplitText } from "./components/SplittText";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/assets/icons/Icon";
import { downloadPDF } from "@/utils/downloadPdf";

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
          I am a fullstack developer based in Stockholm, Sweden. With a passion for building engaging and user-friendly
          applications I strive to create high-quality, functional, and visually appealing digital solutions that meet
          the needs of businesses and users.
        </p>
      </div>
      <div className="absolute bottom-[25%] animate-fade-in">
        <p className="text-lg text-primary">Download my full resume here:</p>
        <div className="flex justify-center gap-2">
          <Button onClick={() => downloadPDF("/files/Resume-Lowe-SV.pdf", "lowes_resume_sv")}>
            <div className="flex flex-row gap-2">
              <IconRenderer src="Sweden" alt="Sweden" height={20} /> Swedish
            </div>
          </Button>
          <Button onClick={() => downloadPDF("/files/Resume-Lowe-EN.pdf", "lowes_resume_en")}>
            <div className="flex flex-row gap-2">
              <IconRenderer src="Usa" alt="Sweden" height={20} /> English
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
