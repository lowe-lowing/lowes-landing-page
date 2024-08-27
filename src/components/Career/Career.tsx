import { DowloadCVButtons, Title } from "../ui";
import SectionContainer from "../ui/SectionContainer";
import { CVTitle, Certificate, Education, Employment } from "./components";

const skills = [
  "Javascript",
  "Typescript",
  "React",
  "Nextjs",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "ASP.NET 6.0",
  "Javascript",
  "HTML/CSS",
  "NodeJS",
  "React",
  "Angular",
  "NET",
  "Typescript",
  "Redux",
  "Tailwind",
  "Next.js",
  "Python",
  "Jest",
  "Docker",
  "Google",
  "Cloud",
  "Platform",
  "Azure",
  "AWS",
  "CI/CD",
];

export const Career = () => {
  return (
    <section className="flex flex-col items-center pt-10" id="Career">
      <Title>Career</Title>
      <SectionContainer>
        <div className="p-2 sm:p-4 md:p-6 lg:p-10 text-primary">
          <div className="flex flex-col gap-10 lg:grid grid-cols-right-auto max-sm:gap-5">
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
                    company="QTE Development"
                    position="Fullstack Junior Developer"
                    dateDisplay="February 2023 - April 2023"
                    description="During the 3 months I got to learn about technologies that I would never use on my own, such as working more with github and setting up a professional development environment. I was both thrown into an existing project and had to start a new project where I developed my experiences in postgresql, typescript and nestjs, etc."
                    place="Stockholm"
                  />
                </div>
              </div>
              <div>
                <CVTitle title="Education" />
                <div className="space-y-2">
                  <Education
                    school="Medieinstitutet"
                    degree="Mjukvarutestning"
                    dateDisplay="April 2024 - June 2024"
                    description="A very educational course where I learned how to test applications using Jest and Cypress."
                    place="Remote"
                  />
                  <Education
                    school="IT-Högskolan"
                    degree="Devops"
                    dateDisplay="April 2024 - June 2024"
                    description="A course about Devops and Azure. I learned how to set up a CI/CD pipeline and how to work with Azure."
                    place="Remote"
                  />
                  <Education
                    school="Blekinge Tekniska Högskolan"
                    degree="Smart industry: automation and artificial intelligence in Industry 4.0"
                    dateDisplay="January 2024 - June 2024"
                    description="During the course, I learned about machine learning, neural networks, and how to use Python to build solutions with the help of AI."
                    place="Remote"
                  />
                  <Education
                    school="Åva Gymnasium"
                    degree="Tech"
                    dateDisplay="August 2019 - June 2022"
                    description="During my high school years, I developed a great interest in programming and was often ahead of the curve in courses such as Programming, Web Development and Web Server Programming."
                    place="Täby"
                  />
                </div>
              </div>
              <div>
                <CVTitle title="Certificates" />
                <div className="flex flex-col gap-2">
                  <Certificate
                    title="Microsoft Certified: Azure Developer Associate"
                    source="Microsoft"
                    date="August 2024"
                    link="https://learn.microsoft.com/api/credentials/share/en-us/LoweLwing-8635/2237645445B97139?sharingId=F25743419594C0A2"
                  />
                  <Certificate
                    title="Microsoft Certified: Azure AI Fundamentals"
                    source="Microsoft"
                    date="June 2024"
                    link="https://learn.microsoft.com/api/credentials/share/en-us/LoweLwing-8635/C56F159686D3335E?sharingId=F25743419594C0A2"
                  />
                  <Certificate
                    title="Google UX Design Specialization"
                    source="Coursea"
                    date="Mars 2024"
                    link="https://coursera.org/share/f3b10c864a384af9e4f6d634b0ac56be"
                  />
                  <Certificate
                    title="Microsoft Certified: Azure Fundamentals"
                    source="Microsoft"
                    date="Mars 2024"
                    link="https://learn.microsoft.com/api/credentials/share/en-us/LoweLwing-8635/7A634472776B2C5D?sharingId=F25743419594C0A2"
                  />
                  <Certificate
                    title="HTML"
                    source="Sololearn"
                    date="Dec 2022"
                    link="https://www.sololearn.com/certificates/CT-2IHYO59T"
                  />
                  <Certificate
                    title="CSS"
                    source="Sololearn"
                    date="Dec 2022"
                    link="https://www.sololearn.com/certificates/CT-Y6PIVCUK"
                  />
                  <Certificate
                    title="JavaScript"
                    source="Sololearn"
                    date="Dec 2022"
                    link="https://www.sololearn.com/certificates/CT-W9FL5ZJ1"
                  />
                  <Certificate
                    title="Responsive Web Design"
                    source="Sololearn"
                    date="Dec 2022"
                    link="https://www.sololearn.com/certificates/CT-KFJ4EIBN"
                  />
                  <Certificate
                    title="React + Redux"
                    source="Sololearn"
                    date="Dec 2022"
                    link="https://www.sololearn.com/certificates/CT-PZE0GA2L"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold">Skills</div>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                {skills.map((skill) => (
                  <div key={skill}>{skill}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <DowloadCVButtons />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
