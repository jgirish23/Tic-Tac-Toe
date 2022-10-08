import React, { useState } from "react";
import Player from "./Player";
import Square from "./Square";

function Board() {
  var [store, setStore] = useState(Array(9).fill(null));
  var [symbol, setSymbol] = useState("x");
  var [win, setWin] = useState(1);
  var [disable, setDisable] = useState(0);
  var memory = [...store];
  // console.log("store: " + store);
  function checkWinner() {
    // console.log(memory);
    if (
      memory[0] === memory[1] &&
      memory[1] === memory[2] &&
      memory[0] != null
    ) {
      if (memory[0] === "X") {
        return 1;
      } else if (memory[0] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[3] === memory[4] &&
      memory[4] === memory[5] &&
      memory[3] != null
    ) {
      if (memory[3] === "X") {
        return 1;
      } else if (memory[3] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[6] === memory[7] &&
      memory[7] === memory[8] &&
      memory[7] != null
    ) {
      if (memory[6] === "X") {
        return 1;
      } else if (memory[6] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[0] === memory[3] &&
      memory[3] === memory[6] &&
      memory[0] != null
    ) {
      if (memory[3] === "X") {
        return 1;
      } else if (memory[3] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[1] === memory[4] &&
      memory[7] === memory[4] &&
      memory[4] != null
    ) {
      if (memory[4] === "X") {
        return 1;
      } else if (memory[4] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[2] === memory[5] &&
      memory[5] === memory[8] &&
      memory[2] != null
    ) {
      if (memory[2] === "X") {
        return 1;
      } else if (memory[2] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[0] === memory[4] &&
      memory[4] === memory[8] &&
      memory[0] != null
    ) {
      if (memory[0] === "X") {
        return 1;
      } else if (memory[0] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
    if (
      memory[2] === memory[4] &&
      memory[4] === memory[6] &&
      memory[2] != null
    ) {
      if (memory[2] === "X") {
        return 1;
      } else if (memory[2] === "O") {
        return 2;
      } else {
        return 0;
      }
    }
  }
  function change(val) {
    if (disable === 0) {
      if (symbol === "X" && store[val] === null) {
        // condition to check we donn't mark the same marked element twice
        memory[val] = "X";
        setStore(memory);
        setSymbol("O");
      } else {
        if (store[val] === null) {
          // condition to check we donn't mark the same marked element twice
          memory[val] = "O";
          setStore(memory);
          setSymbol("X");
        }
      }
      var winner = checkWinner();
      if (winner === 1) {
        setSymbol("X");
        setDisable(1);
        setWin(0);
        console.log(winner);
      } else if (winner === 2) {
        setSymbol("O");
        setDisable(1);
        setWin(0);
        console.log(winner);
      }
    }

    // setCount("X");
  }
  function clearOptions() {
    setStore(Array(9).fill(null));
    setWin(1);
    setDisable(0);
    setSymbol("O");
  }
  return (
    <div className="Board">
      {win ? <Player val={symbol} /> : <p>player {symbol} won </p>}
      {/* <Player val={symbol} winStatus={notWonYet} /> */}
      <div className="Row1">
        {/*1 st row*/}
        <Square val={memory[0]} onClick={() => change(0)} />
        <Square val={memory[1]} onClick={() => change(1)} />
        <Square val={memory[2]} onClick={() => change(2)} />
      </div>
      <div className="Row2">
        {/*2 st row*/}
        <Square val={memory[3]} onClick={() => change(3)} />
        <Square val={memory[4]} onClick={() => change(4)} />
        <Square val={memory[5]} onClick={() => change(5)} />
      </div>
      <div className="Row3">
        {/*3 st row*/}
        <Square val={memory[6]} onClick={() => change(6)} />
        <Square val={memory[7]} onClick={() => change(7)} />
        <Square val={memory[8]} onClick={() => change(8)} />
      </div>
      <div>
        <button className="clearButton" onClick={() => clearOptions()}>
          clear
        </button>
      </div>
    </div>
  );
}

export default Board;
