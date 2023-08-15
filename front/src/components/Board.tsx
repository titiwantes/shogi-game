
import { Ttile } from "@/types";
import { Tile } from "./Tile";
import useAppContext from "@/utils/hooks/useAppContext";

export const Board = () => {
  const {board} = useAppContext();

  return (
    <div className="flex w-96 h-96 bg-blue-400">
      {board.tiles.map((row, i) => (
        <div className="w-90 h-10 bg-red-200" key={i}>
          {row.map((tile: Ttile, j) => (
            <Tile key={`${i}-${j}`} tile={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};
