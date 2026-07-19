import { Chess } from "chess.js";
import { useState } from "react";

function Board() {
  const [game] = useState(() => new Chess());

  return <div>{game.fen()}</div>;
}

export default Board;