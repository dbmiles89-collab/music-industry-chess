import { Chess } from "chess.js";
import { useState } from "react";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

function Board() {
  const [game] = useState(() => new Chess());
  const [selected, setSelected] = useState(null);
  const [, setTick] = useState(0);

  const board = game.board();

  function squareName(r, c) {
    return FILES[c] + (8 - r);
  }

  const legalTargets = selected
    ? game.moves({ square: selected, verbose: true }).map((m) => m.to)
    : [];

  function handleClick(r, c) {
    const name = squareName(r, c);
    const piece = game.get(name);

    if (selected && legalTargets.includes(name)) {
      game.move({ from: selected, to: name, promotion: "q" });
      setSelected(null);
      setTick((t) => t + 1);
      return;
    }

    if (piece && piece.color === game.turn()) {
      setSelected(name);
    } else {
      setSelected(null);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 60px)",
        border: "2px solid #333",
        width: "fit-content",
      }}
    >
      {board.map((row, r) =>
        row.map((square, c) => {
          const name = squareName(r, c);
          const isTarget = legalTargets.includes(name);
          return (
            <div
              key={name}
              onClick={() => handleClick(r, c)}
              style={{
                width: 60,
                height: 60,
                position: "relative",
                backgroundColor:
                  selected === name
                    ? "#e0e0e0"
                    : (r + c) % 2 === 0
                    ? "#ffffff"
                    : "#eeeeee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {isTarget && (
                <div
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                />
              )}
              {square && (
                <img
                  src={`/pieces/${square.color === "w" ? "white" : "black"}-${pieceName(square.type)}.png`}
                  alt=""
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

function pieceName(type) {
  const names = { p: "pawn", r: "rook", n: "knight", b: "bishop", q: "queen", k: "king" };
  return names[type];
}

export default Board;