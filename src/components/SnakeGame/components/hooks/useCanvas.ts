import React from "react";

const useCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  return [canvas, ctx || null] as const;
};

export default useCanvas;
