import logo from '../../assets/king_black.png'
import {Color} from "../Color";
import {Cell} from "../Cell";

export enum FigureNames {
    Default = '',
    Pawn = 'Pawn',
    Knight = 'Knight',
    Bishop = 'Bishop',
    Rook = 'Rook',
    Queen = 'Queen',
    King = 'King',
}

export class Figure {

    public cell: Cell
    public color: Color
    public logo: typeof logo | null
    public name: FigureNames
    public id: number

    constructor(color: Color, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.Default
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) return false
        if (target.figure?.name === FigureNames.King) return false
        return true
    }

    moveFigure(target: Cell) {
        
    }
}