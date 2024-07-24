import { useState, useEffect, useRef, FC, SetStateAction } from "react";
import { Key } from "ts-key-enum";
import useCanvas from "../hooks/useCanvas";
import { Canvas } from "./components/Canvas";

export type GameState = {
  score: number;
  paused: boolean;
  gameOver: boolean;
};

enum Difficulty {
  Easy = 5,
  Medium = 10,
  Hard = 15,
}

export type GameSettings = {
  difficulty: Difficulty;
  borders: boolean;
};

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [game, setGame] = useState<GameState | null>(null);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    difficulty: Difficulty.Medium,
    borders: false,
  });

  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    const highScore = localStorage.getItem("highScore");
    if (highScore) {
      setHighScore(parseInt(highScore));
    }
  }, []);

  function NewGame() {
    setGame({
      score: 0,
      gameOver: false,
      paused: false,
    });
  }

  const toggleBorders = () => setGameSettings((prev) => ({ ...prev, borders: !prev.borders }));
  const changeDifficulty = (difficulty: Difficulty) => () => setGameSettings((prev) => ({ ...prev, difficulty }));

  return (
    <div className="flex flex-col items-center p-2 sm:p-4 md:p-6 lg:p-10">
      <div className="flex flex-col items-center text-primary">
        <div className="text-">This is a snake game that i made within my first months of working with javascript</div>
        <div className="underline">Controls</div>
        <div className="text-sm">Arrow keys to move</div>
        <div className="mb-2 text-sm">Esc to pause</div>
        <div>Highscore: {highScore}. Can you beat my highscore of 45?</div>
        <br />
      </div>
      <div className="relative">
        {game ? (
          <Canvas
            canvasRef={canvasRef}
            game={game}
            setGame={setGame}
            gameSettings={gameSettings}
            setHighScore={setHighScore}
          />
        ) : (
          <div className="w-[400px] h-[400px] bg-black flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center p-5 text-white bg-slate-400">
              <div className="flex flex-row gap-1">
                <p>Difficulty:</p>
                <button
                  onClick={changeDifficulty(Difficulty.Easy)}
                  className={gameSettings.difficulty === Difficulty.Easy ? "text-green-300" : ""}
                >
                  Easy
                </button>
                <button
                  onClick={changeDifficulty(Difficulty.Medium)}
                  className={gameSettings.difficulty === Difficulty.Medium ? "text-green-300" : ""}
                >
                  Medium
                </button>
                <button
                  onClick={changeDifficulty(Difficulty.Hard)}
                  className={gameSettings.difficulty === Difficulty.Hard ? "text-green-300" : ""}
                >
                  Hard
                </button>
              </div>
              <div className="flex flex-row gap-1">
                <p>Borders: </p>
                <input type="checkbox" checked={gameSettings.borders} onChange={toggleBorders} />
              </div>
              <button onClick={NewGame} className="text-lg">
                New Game
              </button>
            </div>
          </div>
        )}
        {game && game?.paused && (
          <div className="absolute top-0 text-white flex flex-col justify-center items-center w-[100%] h-[100%]">
            <div className="flex flex-col items-center justify-center p-5 bg-slate-400 opacity-70">
              <div className="text-2xl underline">{game?.gameOver ? "Game Over" : "Paused"}</div>
              {game.gameOver ? (
                <>
                  <div>Score: {game.score}</div>
                  <button onClick={NewGame}>Try Again</button>
                </>
              ) : (
                <button onClick={() => setGame((prev) => (prev ? { ...prev, paused: false } : null))}>Resume</button>
              )}
              <button onClick={() => setGame(null)}>Main Menu</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
