import React, { useState } from "react";
import "./TicTacToe.css";
const arrayBoxes = [null, null, null, null, null, null, null, null, null];

const TicTacToe = () => {
  const [mainBoard, setMainBoard] = useState(arrayBoxes);
  const [player, setPlayer] = useState("");

  const handleClick = (i) => {
    if (winner || mainBoard[i]) {
      return false;
    }

    let currentPlayer = player === "X" ? "O" : "X";
    let board = [...mainBoard];
    board[i] = currentPlayer;
    setPlayer(currentPlayer);
    setMainBoard(board);
  };

  const checkWinner = () => {
    let winnerBoxes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let box of winnerBoxes) {
      let [x, y, z] = box;
      if (
        mainBoard[x] &&
        mainBoard[x] === mainBoard[y] &&
        mainBoard[x] === mainBoard[z]
      ) {
        return mainBoard[x];
      }
    }

    return null;
  };

  const newGame = () => {
    setMainBoard(arrayBoxes);
    setPlayer("");
  };

  const winner = checkWinner();

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>
        <button onClick={newGame} className="restartButton">
          New Game
        </button>
        {winner && <div>Winner: {player}</div>}
        {!winner && mainBoard.every(Boolean) && <div>It's a Tie!!</div>}
      </div>
      <div className="boxContainer">
        {mainBoard.map((box, i) => {
          return (
            <div key={i} className="box" onClick={() => handleClick(i)}>
              {box}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
