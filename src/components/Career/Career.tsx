import React from "react";
import { DowloadCVButtons, Title } from "../ui";
import { CVTitle, Certificate, Education, Employment } from "./components";
import { IconRenderer } from "@/assets/icons/Icon";
import { Button } from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

export const Career = () => {
  return (
    <section className="flex flex-col items-center pt-10" id="Career">
      <Title>Career</Title>
      <SectionContainer>
        <div className="text-primary p-5">
          <div className="grid grid-cols-right-auto gap-10 max-sm:gap-5">
            <div className="flex flex-col gap-4">
              <div>
                <CVTitle title="Employments" />
                <div className="flex flex-col gap-2">
                  <Employment
                    company={"QTE Development"}
                    position={"Fullstack Junior Developer"}
                    dateDisplay={"Februari 2023 - April 2023"}
                    description={
                      "During 3 months I got to learn a lot that I had never used before, such as working more with github and setting up a professional development environment. I was both thrown into an existing project and had to start a new project where I developed my experiences in postgresql, typescript and nestjs, etc."
                    }
                    place={"Stockholm"}
                  />
                  <Employment
                    company={"Österåkers kommun"}
                    position={"Musician"}
                    dateDisplay={"Juni 2020 - Juli 2020"}
                    description={
                      "Practiced about ten songs with a group in a practice room and then went around and performed the songs for about a week. It was a fun job as I got to do something that I thought was fun."
                    }
                    place={"Åkersberga"}
                  />
                </div>
              </div>
              <div>
                <CVTitle title="Education" />
                <Education
                  school={"Åva Gymnasium"}
                  degree={"Tech"}
                  dateDisplay={"Augusti 2019 - Juni 2022"}
                  description={
                    "During my high school years, I developed a great interest in programming and was often ahead of the curve in courses such as Programming, Web Development and Web Server Programming."
                  }
                  place={"Täby"}
                />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">Skills</div>
              <div>Javascript</div>
              <div>Typescript</div>
              <div>React</div>
              <div>Nextjs</div>
              <div>Tailwind</div>
              <div>MySQL</div>
              <div>PostgreSQL</div>
            </div>
          </div>
          <CVTitle title="Certificates" />
          <div className="flex flex-col gap-2">
            <Certificate
              title={"HTML"}
              source={"Sololearn"}
              date={"Dec 2022"}
              link={"https://www.sololearn.com/certificates/CT-2IHYO59T"}
            />
            <Certificate
              title={"CSS"}
              source={"Sololearn"}
              date={"Dec 2022"}
              link={"https://www.sololearn.com/certificates/CT-Y6PIVCUK"}
            />
            <Certificate
              title={"JavaScript"}
              source={"Sololearn"}
              date={"Dec 2022"}
              link={"https://www.sololearn.com/certificates/CT-W9FL5ZJ1"}
            />
            <Certificate
              title={"Responsive Web Design"}
              source={"Sololearn"}
              date={"Dec 2022"}
              link={"https://www.sololearn.com/certificates/CT-KFJ4EIBN"}
            />
            <Certificate
              title={"React + Redux"}
              source={"Sololearn"}
              date={"Dec 2022"}
              link={"https://www.sololearn.com/certificates/CT-PZE0GA2L"}
            />
          </div>
          <div className="flex flex-col items-center">
            <DowloadCVButtons />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
