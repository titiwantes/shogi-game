import { Ttile } from "@/types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useAppContext from "@/utils/hooks/useAppContext";
import { isEqual } from "lodash";

export const Tile = ({ tile }: { tile: Ttile }) => {
  const { selectedPiece, setSelectedPiece, handlePieceClick, handlePieceMove } = useAppContext();
  const [style, setStyle] = useState<string>("bg-white");
  const handleClick = () => {
    if (tile.piece && tile.piece.user === "sente") {
      setSelectedPiece(tile.piece);
      handlePieceClick(tile.piece);

    }
    if (tile.isHighlighted && !tile.piece) handlePieceMove(tile);

  };

  useEffect(() => {
    if (selectedPiece && isEqual(selectedPiece, tile.piece))
      setStyle(cn(style, "bg-green-200"));
    else setStyle(cn(style, "bg-white"));
    if (tile.isHighlighted && !tile.piece) setStyle(cn(style, "bg-green-200"));
    if (tile.isHighlighted && tile.piece && tile.piece.user === "gote")
      setStyle(cn(style, "bg-red-200")
    );

  }, [selectedPiece]);

  return (
    <div
      onClick={handleClick}
      className={`w-16 h-16 border ${
        ((tile.piece && tile.piece.user === "sente") || (tile.isHighlighted)) && "cursor-pointer"
      } ${style}`}
    >
      {tile.piece && (
        // <span className="text-black">{tile.piece.type}</span>
        <img
          className="w-full h-full"
          src={tile.piece.sprite}
          alt={`
      ${tile.piece.user}-${tile.piece.type}
      `}
        />
      )}
    </div>
  );
};
