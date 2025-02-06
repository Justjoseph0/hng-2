import  { useState, useEffect } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const ColorGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setScore(0);
    setGameStatus("");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct!");
    } else {
      setGameStatus(`Wrong! The correct color was ${targetColor}.`);
    }
    setTimeout(startNewGame, 1000); 
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-xl font-bold mb-4" data-testid="gameInstructions">
        Guess the correct color!
      </h1>
      <div
        className="w-32 h-32 rounded-md mb-4"
        style={{ backgroundColor: targetColor }}
        data-testid="colorBox"
      ></div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {colors.map((color) => (
          <button
            key={color}
            className="w-20 h-10 rounded text-white"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            data-testid="colorOption"
          >
            {color}
          </button>
        ))}
      </div>
      <p className="text-lg font-semibold" data-testid="gameStatus">{gameStatus}</p>
      <p className="text-lg" data-testid="score">Score: {score}</p>
      <button
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        onClick={startNewGame}
        data-testid="newGameButton"
      >
        New Game
      </button>
    </div>
  );
};

export default ColorGame;
