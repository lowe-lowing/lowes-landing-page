import React from "react";
import { Title } from "@/components/ui";
import Game from "./components/Game/Game";
import SectionContainer from "../ui/SectionContainer";

export const SnakeGame: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-10 max-sm:hidden" id="Game">
      <Title>Fun Game</Title>
      <SectionContainer>
        <div className="p-5 flex flex-col items-center">
          <Game />
        </div>
      </SectionContainer>
    </section>
  );
};
