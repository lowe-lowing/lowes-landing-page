import { DowloadCVButtons, Title } from "../ui";
import SectionContainer from "../ui/SectionContainer";
import { CVTitle, Certificate, Education, Employment } from "./components";

export const Career = () => {
  return (
    <section className="flex flex-col items-center pt-10" id="Career">
      <Title>Career</Title>
      <SectionContainer>
        <div className="p-5 text-primary">
          <div className="grid gap-10 grid-cols-right-auto max-sm:gap-5">
            <div className="flex flex-col gap-4">
              <div>
                <CVTitle title="Employments" />
                <div className="flex flex-col gap-2">
                  <Employment
                    company="Red River Consulting"
                    place="Remote"
                    position="Internship, Fullstack"
                    dateDisplay="September 2023 - Now"
                    description="This is my current position interning at Red River Consulting. We use Angular and C#/.NET where I work full stack in a team creating an advanced reporting system for firefighters and paramedics. Here I have learned how to work in a group, write good and future-proof code and focus on what is important to the customer."
                  />
                  <Employment
                    company={"QTE Development"}
                    position={"Fullstack Junior Developer"}
                    dateDisplay={"Februari 2023 - April 2023"}
                    description={
                      "During 3 months I got to learn a lot that I had never used before, such as working more with github and setting up a professional development environment. I was both thrown into an existing project and had to start a new project where I developed my experiences in postgresql, typescript and nestjs, etc."
                    }
                    place={"Stockholm"}
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
              <div>
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
              <div>ASP.NET 6.0</div>
              <div>Javascript</div>
              <div>HTML/CSS</div>
              <div>NodeJS</div>
              <div>React</div>
              <div>Angular</div>
              <div>NET</div>
              <div>Typescript</div>
              <div>Redux</div>
              <div>Tailwind</div>
              <div>Next.js</div>
              <div>Python</div>
              <div>Jest</div>
              <div>Docker</div>
              <div>Google</div>
              <div>Cloud</div>
              <div>Platform</div>
              <div>Azure</div>
              <div>AWS</div>
              <div>CI/CD</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <DowloadCVButtons />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
