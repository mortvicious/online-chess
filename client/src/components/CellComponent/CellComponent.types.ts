import {Color} from "../../models/Color";
import {Cell} from "../../models/Cell";

export interface ICellComponent {
    cell: Cell,
    selected: boolean,
    onClick: (cell: Cell) => void
}
