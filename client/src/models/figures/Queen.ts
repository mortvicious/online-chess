import { Figure, FigureNames } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
import logoDark from '../../assets/queen_black.png'
import logoLight from '../../assets/queen_white.png'

export class Queen extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell)
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.Queen
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false
        if (this.cell.isEmptyVertical(target)) return true
        if (this.cell.isEmptyHorizontal(target)) return true
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}
