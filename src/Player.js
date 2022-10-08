function Player(props) {
  var currentPlayer = props.val;
  if (currentPlayer === "X") {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  return (
    <div>
      <h2 className="current_player ">current {currentPlayer} </h2>
    </div>
  );
}
export default Player;
