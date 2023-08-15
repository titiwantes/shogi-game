import { Tboard, Tpiece, Ttile } from "@/types";
import React, { createContext, useState } from "react";
import { createBoard, getPossibleMovesForPiece } from "@/utils/boardUtils";

export interface IAppContext {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  selectedPiece: Tpiece | null;
  setSelectedPiece: React.Dispatch<React.SetStateAction<Tpiece | null>>;
  board: Tboard;
  setBoard: React.Dispatch<React.SetStateAction<Tboard>>;
  handlePieceClick: (piece: Tpiece) => void;
  handlePieceMove: (destination: Ttile) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>("");
  const [board, setBoard] = useState(createBoard());
  const [selectedPiece, setSelectedPiece] = useState<Tpiece | null>(null);


  const handlePieceMove = (destination: Ttile) => {
    setBoard((prevBoard) => {
      prevBoard.tiles.map((row) => {
        row.map((tile) => {
          if (selectedPiece?.position.x === tile.x && selectedPiece?.position.y === tile.y) {
            tile.piece = null;
          }
          if (destination.x === tile.x && destination.y === tile.y) {
            tile.piece = selectedPiece;
          }
          tile.isHighlighted = false;
        });
      });
      console.log("coucou")
      return prevBoard;
    });
  };


  const handlePieceClick = (piece: Tpiece) => {
    const possibleMoves = getPossibleMovesForPiece(piece);

    setBoard((prevBoard) => {
      prevBoard.tiles.map((row) => {
        row.map((tile) => {
          const isPossibleMove = possibleMoves.find(
            (move: { x: number; y: number }) =>
              move.x === tile.x && move.y === tile.y
          );
          if (isPossibleMove) {
            tile.isHighlighted = true;
          } else {
            tile.isHighlighted = false;
          }
        });
      });
      return prevBoard;
    });
  };

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        selectedPiece,
        setSelectedPiece,
        board,
        setBoard,
        handlePieceClick,
        handlePieceMove
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
