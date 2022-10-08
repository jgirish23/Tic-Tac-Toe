import React from "react";

function Square(Props) {
  // var symbol = "X";
  // console.log(Props.val);
  // var ch=Props.val;

  // ()=>setCount(count='X')
  return (
    <div className="square">
      <button className="Box" onClick={Props.onClick}>
        {/* to create boxs */}
        <p>{Props.val}</p>
      </button>
    </div>
  );
}

export default Square;
