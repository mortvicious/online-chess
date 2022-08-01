import {Figure, FigureNames} from "./Figure";
import {Color} from "../Color";
import {Cell} from "../Cell";
import logoDark from "../../assets/knight_black.png";
import logoLight from "../../assets/knight_white.png";

export class Knight extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.Knight
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}