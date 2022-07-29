import {Color} from "./Color";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly color: Color
    readonly x: number
    readonly y: number
    figure: Figure | null
    board: Board
    available: boolean
    id: number
    constructor(board: Board, x: number, y: number, color: Color, figure: Figure | null) {
        this.board = board
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.available = false
        this.id = Math.random()
    }
    public canMove() {

    }
}