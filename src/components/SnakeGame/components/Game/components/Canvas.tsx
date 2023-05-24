import { useState, useEffect } from "react";
import { Key } from "ts-key-enum";
import { GameSettings, GameState } from "../Game";
import { get } from "http";

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

type SnakePosition = {
  headX: number;
  headY: number;
};

type SnakeTail = {
  x: number;
  y: number;
};

type Apple = {
  x: number;
  y: number;
};

type SnakeKeys = keyof SnakePosition;

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  game: GameState;
  setGame: React.Dispatch<React.SetStateAction<GameState | null>>;
  gameSettings: GameSettings;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
}

export const Canvas: React.FC<CanvasProps> = ({ canvasRef, game, setGame, gameSettings, setHighScore }) => {
  const [direction, setDirection] = useState(Direction.Up);
  const [snake, setSnake] = useState<SnakePosition>({
    headX: 10,
    headY: 10,
  });
  function handleChangeSnake<K extends SnakeKeys>(key: K, value: SnakePosition[K]) {
    setSnake((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const initialSnakeTail: SnakeTail[] = [
    { x: 10, y: 13 },
    { x: 10, y: 12 },
    { x: 10, y: 11 },
  ];
  const [snakeTail, setSnakeTail] = useState<SnakeTail[]>(initialSnakeTail);
  const resetSnake = () => {
    setSnake({ headX: 10, headY: 10 });
    setSnakeTail(initialSnakeTail);
    setDirection(Direction.Up);
  };

  const [apple, setApple] = useState<Apple>({
    x: 5,
    y: 5,
  });

  const setGameOver = () => {
    const currentHighScore = localStorage.getItem("highScore");
    if (game.score > parseInt(currentHighScore || "0")) {
      localStorage.setItem("highScore", game.score.toString());
      setHighScore(game.score);
    }
    setGame((prev) => (prev ? { ...prev, gameOver: true } : null));
  };

  const tileCount = 20;
  const tileSize = canvasRef.current ? canvasRef.current.width / tileCount - 2 : 0;

  const getCanvas = (
    canvasRef: React.RefObject<HTMLCanvasElement>
  ): [HTMLCanvasElement | null, CanvasRenderingContext2D | null] => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    return [canvas, context || null];
  };

  // Checks keypress and sets direction or pauses game
  function checkKey(e: KeyboardEvent) {
    if (e.key === Key.ArrowUp) {
      e.preventDefault();
      setDirection(Direction.Up);
    } else if (e.key === Key.ArrowDown) {
      e.preventDefault();
      setDirection(Direction.Down);
    } else if (e.key === Key.ArrowLeft) {
      e.preventDefault();
      setDirection(Direction.Left);
    } else if (e.key === Key.ArrowRight) {
      e.preventDefault();
      setDirection(Direction.Right);
    } else if (e.key == Key.Escape) {
      setGame((prev) => (prev ? { ...prev, paused: !prev.paused } : null));
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", checkKey);
    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, []);

  // Sets the position of the snake and its tail
  function changeSnakePosition(snake: SnakePosition) {
    setSnake((prev) => {
      const { headX, headY } = prev;
      switch (direction) {
        case Direction.Up:
          return { headY: headY - 1, headX };
        case Direction.Down:
          return { headY: headY + 1, headX };
        case Direction.Left:
          return { headX: headX - 1, headY };
        case Direction.Right:
          return { headX: headX + 1, headY };
      }
    });
    setSnakeTail((prev) => {
      const newTail = [...prev];
      newTail.shift();
      newTail.push({ x: snake.headX, y: snake.headY });
      return newTail;
    });
  }

  // Checks if the snake collides with the wall
  const wallDetection = (snake: SnakePosition) => {
    const { headX, headY } = snake;
    const { borders } = gameSettings;
    if (headX <= -1) {
      borders ? setGameOver() : handleChangeSnake("headX", tileCount - 1);
    } else if (headX >= tileCount) {
      borders ? setGameOver() : handleChangeSnake("headX", 0);
    } else if (headY <= -1) {
      borders ? setGameOver() : handleChangeSnake("headY", tileCount - 1);
    } else if (headY >= tileCount) {
      borders ? setGameOver() : handleChangeSnake("headY", 0);
    }
  };

  // Check if the snake collides with its own tail and sets game over
  function snakeTailCollision() {
    const [canvas, ctx] = getCanvas(canvasRef);
    if (!ctx || !canvas) return;
    const gameOver = snakeTail.some((part) => part.x === snake?.headX && part.y === snake?.headY);
    if (gameOver || game.gameOver) {
      setGameOver();
      var audio = new Audio("/audio/gameover.wav");
      audio.play();

      ctx.font = "50px Verdana";

      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "magenta");
      gradient.addColorStop(0.5, "blue");
      gradient.addColorStop(1.0, "red");

      ctx.fillStyle = gradient;
      ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2.5);
      setGame((prev) => (prev ? { ...prev, gameOver: true, paused: true } : null));
      resetSnake();
    }
    return gameOver;
  }

  // Draws the score on the screen
  function drawScore(game: GameState) {
    const [canvas, ctx] = getCanvas(canvasRef);
    if (!ctx || !canvas) return;

    ctx.fillStyle = "white";
    ctx.font = "20px Verdana";
    ctx.fillText(`Score: ${game.score}`, canvas.width - 100, 20);
  }

  // Clears the screen to get ready for the next frame
  function clearScreen(game?: GameState) {
    // if (game.paused) return;
    const [canvas, ctx] = getCanvas(canvasRef);
    if (!ctx || !canvas) return;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // draws the snake and its tail from the snakes position
  function drawSnake(snake: SnakePosition) {
    const { headX, headY } = snake;
    const [canvas, ctx] = getCanvas(canvasRef);
    if (!ctx) return;
    ctx.fillStyle = "green";
    for (let i = 0; i < snakeTail.length; i++) {
      let part = snakeTail[i];
      ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }

    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
  }

  // Sets the position of the apple
  function drawApple() {
    const [canvas, ctx] = getCanvas(canvasRef);
    if (!ctx) return;
    const { x, y } = apple;
    ctx.fillStyle = "red";
    ctx.fillRect(x * tileCount, y * tileCount, tileSize, tileSize);
  }

  // Checks if the snake has collided with the apple
  function checkAppleCollision(snake: SnakePosition) {
    const { headX, headY } = snake;
    const { x: appleX, y: appleY } = apple;
    if (appleX === headX && appleY == headY) {
      const appleAudio = new Audio("/audio/apple-crunch.wav");
      appleAudio.play();
      let newAppleX = appleX;
      let newAppleY = appleY;
      // this only checks if the apple is on the same position as before and as the snake head
      while (
        appleX === newAppleX &&
        appleY === newAppleY &&
        appleX === headX &&
        appleY === headY &&
        !snakeTail.some((part) => part.x === newAppleX && part.y === newAppleY)
      ) {
        newAppleX = Math.floor(Math.random() * tileCount);
        newAppleY = Math.floor(Math.random() * tileCount);
        if (!snakeTail.some((part) => part.x === newAppleX && part.y === newAppleY)) {
          setApple({ x: newAppleX, y: newAppleY });
        }
      }
      // setApple({ x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) });
      // snakeTail.forEach((tailpart) => {
      //   while (appleX === tailpart.x && appleY === tailpart.y) {
      //     setApple({ x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) });
      //   }
      // });

      setSnakeTail([...snakeTail, { x: headX, y: headY }]);
      setGame((prev) => (prev ? { ...prev, score: prev.score + 1 } : null));
    }
  }

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Game Loop
  const drawGame = async (snake: SnakePosition, game: GameState) => {
    drawSnake(snake);
    if (!game.paused) {
      await wait(1000 / gameSettings.difficulty);
      changeSnakePosition(snake);
      clearScreen();
      wallDetection(snake);
      if (snakeTailCollision()) return;
      drawApple();
      checkAppleCollision(snake);
      drawScore(game);
    }
  };

  useEffect(() => {
    if (!game) return;
    drawGame(snake, game);
  }, [snake, game]);

  return (
    <canvas
      ref={canvasRef}
      id="game"
      width="400"
      height="400"
      className={gameSettings.borders ? "border-red-600 border-[1px]" : ""}
    />
  );
};
