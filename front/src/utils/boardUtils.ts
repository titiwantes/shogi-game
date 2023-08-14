import pawn from "@/assets/pawn.svg";
import pawnOp from "@/assets/pawn-op.svg";

import bishop from "@/assets/bishop.svg";
import bishopOp from "@/assets/bishop-op.svg";

import lance from "@/assets/lance.svg";
import lanceOp from "@/assets/lance-op.svg";

import silver from "@/assets/silver.svg";
import silverOp from "@/assets/silver-op.svg";

import gold from "@/assets/gold.svg";
import goldOp from "@/assets/gold-op.svg";

import knight from "@/assets/knight.svg";
import knightOp from "@/assets/knight-op.svg";

import king from "@/assets/king.svg";
import kingOp from "@/assets/king-op.svg";

import rook from "@/assets/rook.svg";
import rookOp from "@/assets/rook-op.svg";

import { Tpiece, Tboard, TpieceType, Ttile } from "@/types";

const getPieceSprite = (type: TpieceType, user: "sente" | "gote") => {
  switch (type) {
    case "pawn":
      return user === "sente" ? pawn : pawnOp;
    case "lance":
      return user === "sente" ? lance : lanceOp;
    case "knight":
      return user === "sente" ? knight : knightOp;
    case "silver":
      return user === "sente" ? silver : silverOp;
    case "gold":
      return user === "sente" ? gold : goldOp;
    case "bishop":
      return user === "sente" ? bishop : bishopOp;
    case "rook":
      return user === "sente" ? rook : rookOp;
    case "king":
      return user === "sente" ? king : kingOp;
  }
};

const getPieceForThisTile = (x: number, y: number): Tpiece | null => {
  const pieceData = {
    position: {
      x,
      y,
    },
    isPromoted: false,
    isCaptured: false,
  };
  if (y === 6 || y === 2) {
    return {
      user: y === 6 ? "sente" : "gote",
      type: "pawn",
      sprite: y === 6 ? pawn : pawnOp,
      ...pieceData,
    };
  }
  if (y === 8 || y === 0) {
    const type = ["lance", "knight", "bishop", "rook", "king"][x] as TpieceType;
    return {
      user: y === 8 ? "sente" : "gote",
      type,
      sprite: getPieceSprite(type, y === 8 ? "sente" : "gote"),
      ...pieceData,
    };
  }
  if (y === 7 || y === 1) {
    if (x === 1) {
      return {
        user: y === 7 ? "sente" : "gote",
        type: "silver",
        sprite: getPieceSprite("silver", y === 7 ? "sente" : "gote"),
        ...pieceData,
      };
    }
    if (x === 7) {
      return {
        user: y === 7 ? "sente" : "gote",
        type: "gold",
        sprite: getPieceSprite("gold", y === 7 ? "sente" : "gote"),
        ...pieceData,
      };
    }
  }

  return null;
};

export const createBoard = () => {
  const board: Tboard = {
    tiles: Array(9)
      .fill(0)
      .map((_, i) => {
        return Array(9)
          .fill(0)
          .map((_, j) => {
            const tile: Ttile = {
              x: i,
              y: j,
              piece: getPieceForThisTile(i, j),
              isHighlighted: false,
            };
            return tile;
          });
      }),
  };
  return board;
};
