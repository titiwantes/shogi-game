export type TpieceType = "king" | "gold" | "silver" | "knight" | "lance" | "bishop" | "rook" | "pawn";

export type Tpiece = {
    user: "sente" | "gote";
    type: TpieceType;
    sprite: string;
    position: {
        x: number;
        y: number;
    };
    isPromoted: boolean;
    isCaptured: boolean;
};

export type Ttile = {
    sprite: string;
    x: number;
    y: number;
    piece: Tpiece | null;
    isHighlighted: boolean;
};

export type Tboard = {
    tiles: Ttile[][];
};

export type boardState = {
    board: Tboard;
    turn: "sente" | "gote";
    selectedPiece: Tpiece | null;
    selectedPiecePosition: {
        x: number;
        y: number;
    } | null;
    isPromoting: boolean;
    isChecking: boolean;
    isCheckmating: boolean;
    isDraw: boolean;
    isGameOver: boolean;
    isSenteWin: boolean;
    isGoteWin: boolean;
    isSenteTurn: boolean;
    isGoteTurn: boolean;
};

export type boardAction =
    | { type: "selectPiece"; payload: { piece: Tpiece; position: { x: number; y: number } } }
    | { type: "movePiece"; payload: { piece: Tpiece; position: { x: number; y: number } } }
    | { type: "promotePiece"; payload: { piece: Tpiece } }
    | { type: "capturePiece"; payload: { piece: Tpiece } }
    | { type: "checkPiece"; payload: { piece: Tpiece } }
    | { type: "checkmatePiece"; payload: { piece: Tpiece } }
    | { type: "drawPiece"; payload: { piece: Tpiece } }
    | { type: "gameOver"; payload: { piece: Tpiece } }
    | { type: "changeTurn" };

export type boardReducer = (state: boardState, action: boardAction) => boardState;

