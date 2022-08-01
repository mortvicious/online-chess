import {Figure, FigureNames} from "./Figure";
import {Color} from "../Color";
import {Cell} from "../Cell";
import logoDark from '../../assets/king_black.png'
import logoLight from '../../assets/king_white.png'

export class King extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.King
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false
        return true
    }
}