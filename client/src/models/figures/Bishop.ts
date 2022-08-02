import { Figure, FigureNames } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
import logoDark from '../../assets/bishop_black.png'
import logoLight from '../../assets/bishop_white.png'

export class Bishop extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell)
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.Bishop
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}
