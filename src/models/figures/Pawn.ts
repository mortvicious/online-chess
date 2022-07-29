import {Figure, FigureNames} from "./Figure";
import {Color} from "../Color";
import {Cell} from "../Cell";
import logoDark from "../../assets/pawn_black.png";
import logoLight from "../../assets/pawn_white.png";

export class Pawn extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.dark ? logoDark : logoLight
        this.name = FigureNames.Pawn
    }
}