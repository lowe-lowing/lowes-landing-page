import React from "react";
import { Title } from "@/components/ui";
import Game from "./components/Game/Game";

export const SnakeGame: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-10" id="Game">
      <Title>Fun Game</Title>
      <Game />
    </section>
  );
};
