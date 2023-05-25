import { AboutMe, Career, Contact, Projects, SnakeGame } from "@/components";
import { Navbar } from "@/components/NavBar";
import { FC } from "react";

export const HomeView: FC = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <div className="flex flex-col">
        <Projects />
        <Career />
        <SnakeGame />
        <Contact />
      </div>
    </>
  );
};
