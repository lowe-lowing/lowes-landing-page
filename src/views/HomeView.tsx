import { AboutMe, Carreer, Contact, Projects, SnakeGame } from "@/components";
import { Navbar } from "@/components/NavBar";
import { FC } from "react";

export const HomeView: FC = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <div className="flex flex-col">
        <Projects />
        <Carreer />
        <SnakeGame />
        <Contact />
      </div>
    </>
  );
};
