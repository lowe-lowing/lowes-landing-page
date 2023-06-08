import { AboutMe, Career, Contact, Projects, SnakeGame } from "@/components";
import { Navbar } from "@/components/NavBar";
import { FC } from "react";

export const HomeView: FC = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Career />
      <SnakeGame />
      <Contact />
    </>
  );
};
