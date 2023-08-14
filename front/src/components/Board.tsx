import { useState } from "react";
import { createBoard } from "@/utils/boardUtils";
import { Ttile } from "@/types";

export const Board = () => {
  const [board, setBoard] = useState(createBoard());

  return (
    <div className="flex w-96 h-96 bg-blue-400">
      {board.tiles.map((row, i) => (
        <div className="w-90 h-10 bg-red-200">
          {row.map((tile: Ttile, j) => (
            <div className="w-16 h-16 border bg-white" key={`${i}-${j}`}>
              {tile.piece && (
                <img
                  className="w-full h-full"
                  src={tile.piece.sprite}
                  alt={`
                ${tile.piece.user}-${tile.piece.type}
                
                `}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
