import React from "react";
import { useState } from "react";

function Body() {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [presentValue, setPresentValue] = useState("X");
  const calculate = (arr) => {
    const winningList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of winningList) {
      if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  };

  const operation = (i) => {
    console.log(i);
    arr[i] = presentValue;
    setArr([...arr]);
    setPresentValue(presentValue === "X" ? "0" : "X");
    let player = calculate(arr);
    if(player === "X" || player === "0"){
        return window.alert(`Player ${player === "X" ? '1' : '2'} won`)
    }
    if(!player){
        for(let i =0;i<arr.length;i++){
            if(arr[i] === null){
                return null
            }
        }
        return window.alert("Game Tie")
    }
  };

  return (
    <div className="main">
      <h1>Tic Tac Toe</h1>
      <h1>Player {presentValue === "X" ? "1" : "2"} is playing</h1>
      <div className="board">
        {arr.map((square, i) => (
          <button
            key={i}
            className={`square ${arr[i] ? "disable-square" : ""}`}
            onClick={() => operation(i)}
            disabled={arr[i]}
          >
            {square}
          </button>
        ))}
      </div>
      <div className="reset">
        <button
          onClick={() => {
            setArr(Array(9).fill(null));
            setPresentValue("X")
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default Body;
