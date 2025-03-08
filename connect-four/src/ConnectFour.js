import React, { useState } from "react";
import "./ConnectFour.css";

const initialBoard = () => {
  let board = [];
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
};
const ConnectFour = () => {
  const [mainBoard, setMainBoard] = useState(initialBoard());
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  const handleClick = (c) => {
    let board = mainBoard;
    for (let r = 5; r >= 0; r--) {
      if (!board[r][c]) {
        board[r][c] = player;
        break;
      }
    }

    const winner = checkWinner(board);
    if (winner) {
      setMainBoard(board);
      setWinner(player);
    } else {
      let value = player === 1 ? 2 : 1;
      setPlayer(value);
      setMainBoard(board);
    }
  };

  const checkVertically = (board) => {
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i - 1][j] &&
          board[i][j] === board[i - 2][j] &&
          board[i][j] === board[i - 3][j]
        ) {
          return board[i][j];
        }
      }
    }
  };

  const checkHorizontally = (board) => {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i][j + 2] &&
          board[i][j] === board[i][j + 3]
        ) {
          return board[i][j];
        }
      }
    }
  };

  const checkDiagonallyLeft = (board) => {
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 2][j - 2] &&
          board[i][j] === board[i - 3][j - 3]
        ) {
          return board[i][j];
        }
      }
    }
  };
  const checkDiagonallyRight = (board) => {
    for (let i = 3; i < 6; i++) {
      for (let j = 3; j < 7; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i - 1][j + 1] &&
          board[i][j] === board[i - 2][j + 2] &&
          board[i][j] === board[i - 3][j + 3]
        ) {
          return board[i][j];
        }
      }
    }
  };

  const checkTie = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  };

  const checkWinner = (board) => {
    return (
      checkVertically(board) ||
      checkHorizontally(board) ||
      checkDiagonallyRight(board) ||
      checkDiagonallyLeft(board)
    );
  };

  return (
    <div>
      <h1>Four in a row</h1>
      <div>
        <div>Winner : {winner && (winner === 1 ? "Red" : "Yellow")}</div>
        Tie: {checkTie(mainBoard) && "Its a Tie"}
      </div>
      <div className="board">
        {mainBoard.map((row, i) => {
          return (
            <div key={i} className="row">
              {row.map((cell, index) => {
                const color = cell ? (cell === 1 ? "red" : "yellow") : "";
                return (
                  <div
                    key={index}
                    className={`circle ${color}`}
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectFour;
