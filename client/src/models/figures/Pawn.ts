import { Figure, FigureNames } from './Figure'
import { Color } from '../Color'
import { Cell } from '../Cell'
import logoDark from '../../assets/pawn_black.png'
import logoLight from '../../assets/pawn_white.png'

export class Pawn extends Figure {
    isFirstStep: boolean = true

    constructor(color: Color, cell: Cell) {
        super(color, cell)
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.Pawn
    }

    moveFigure(target: Cell) {
        super.moveFigure(target)
        this.isFirstStep = false
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false
        const direction = this.cell.figure?.color === Color.light ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Color.light ? 2 : -2

        if (
            (target.y === this.cell.y + direction ||
            (this.isFirstStep &&
            target.y === this.cell.y + firstStepDirection)) &&
            target.x === this.cell.x &&
            this.cell.board.getCell(target.x, target.y).isEmpty()
        ) {
            return true
        }

        if (
            target.y === this.cell.y + direction &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            this.cell.isEnemy(target)
        ) {
            return true
        }

        return false
    }
}
