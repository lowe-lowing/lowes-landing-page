import React from "react";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { Title } from "../ui";
import { OpenInNewTab } from "@/utils";
import { useRouter } from "next/router";

export const Contact: React.FC = () => {
  return (
    <section id="Contact" className="mt-16 text-primary">
      <footer className="flex flex-col items-center pb-20 text-white bg-secondary max-sm:pb-10">
        <Title>Contact</Title>
        <div className="container flex justify-center gap-5 px-2 max-sm:flex-col">
          <div className="flex flex-col gap-2">
            <ContactButton
              href="mailto:lowe.lowing@gmail.com"
              Icon={<GrMail />}
              text={"lowe.lowing@gmail.com"}
              openInNewTab={false}
            />
            <ContactButton
              href="https://www.linkedin.com/in/lowe-l%C3%B6wing-9b7740231/"
              Icon={<AiFillLinkedin />}
              text={"Lowe Löwing"}
              openInNewTab={true}
            />
            <ContactButton href="tel:+46702666823" Icon={<AiFillPhone />} text={"+46702666823"} openInNewTab={false} />
          </div>
          <div>Feel free to contact me to discuss future possibilities or if you have any questions.</div>
        </div>
      </footer>
    </section>
  );
};

type ContactButtonProps = {
  href: string;
  Icon: React.ReactNode;
  text: string;
  openInNewTab: boolean;
};

const ContactButton: React.FC<ContactButtonProps> = ({ href, Icon, text, openInNewTab }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => (openInNewTab ? OpenInNewTab(href) : router.push(href))}
      className="flex items-center gap-2 cursor-pointer w-fit"
    >
      <div className="p-2 border border-red-400 rounded-full w-fit">{Icon}</div> {text}
    </div>
  );
};
