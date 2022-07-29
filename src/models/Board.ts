import {Cell} from "./Cell";
import {Color} from "./Color";

export class Board {
    cells: Cell[][] = []
    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) row.push(new Cell(this, j, i, Color.dark, null))
                else if ((i + j) % 2 !== 0) row.push(new Cell(this, j, i, Color.light, null ))
            }
            this.cells.push(row)
        }
    }
}