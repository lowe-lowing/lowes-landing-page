import React from "react";
import { Title } from "@/components/ui";
import Game from "./components/Game/Game";
import SectionContainer from "../ui/SectionContainer";

export const SnakeGame: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-10 max-sm:hidden" id="Game">
      <Title>Fun Game</Title>
      <SectionContainer>
        <Game />
      </SectionContainer>
    </section>
  );
};
