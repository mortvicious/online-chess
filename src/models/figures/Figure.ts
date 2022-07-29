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
    color: Color
    logo: typeof logo | null
    cell: Cell
    name: FigureNames
    id: number
    constructor(color: Color, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.Default
        this.id = Math.random()
    }
}