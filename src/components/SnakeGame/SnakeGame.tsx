import React from "react";
import { Title } from "@/components/ui";
import Game from "./components/Game/Game";

export const SnakeGame: React.FC = () => {
  return (
    <section className="flex flex-col items-center pt-10" id="Game">
      <Title>Fun Game</Title>
      <div className="w-[50%] bg-secondary p-5 rounded-xl flex flex-col items-center">
        <Game />
      </div>
    </section>
  );
};
