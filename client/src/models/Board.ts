import { Cell } from './Cell'
import { Color } from './Color'
import { Pawn } from './figures/Pawn'
import { Rook } from './figures/Rook'
import { Knight } from './figures/Knight'
import { Bishop } from './figures/Bishop'
import { Queen } from './figures/Queen'
import { King } from './figures/King'

export class Board {
    private cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0)
                    row.push(new Cell(this, j, i, Color.dark, null))
                else if ((i + j) % 2 !== 0)
                    row.push(new Cell(this, j, i, Color.light, null))
            }
            this.cells.push(row)
        }
    }

    public getCells() {
        return this.cells
    }

    private addKings(): void {
        new King(Color.light, this.getCell(4, 0))
        new King(Color.dark, this.getCell(4, 7))
    }

    private addQueens(): void {
        new Queen(Color.light, this.getCell(3, 0))
        new Queen(Color.dark, this.getCell(3, 7))
    }

    private addRooks(): void {
        new Rook(Color.light, this.getCell(0, 0))
        new Rook(Color.light, this.getCell(7, 0))
        new Rook(Color.dark, this.getCell(0, 7))
        new Rook(Color.dark, this.getCell(7, 7))
    }

    private addKnights(): void {
        new Knight(Color.light, this.getCell(1, 0))
        new Knight(Color.light, this.getCell(6, 0))
        new Knight(Color.dark, this.getCell(1, 7))
        new Knight(Color.dark, this.getCell(6, 7))
    }

    private addBishops(): void {
        new Bishop(Color.light, this.getCell(2, 0))
        new Bishop(Color.light, this.getCell(5, 0))
        new Bishop(Color.dark, this.getCell(2, 7))
        new Bishop(Color.dark, this.getCell(5, 7))
    }

    private addPawns(): void {
        for (let i = 0; i < 8; i++) {
            new Pawn(Color.light, this.getCell(i, 1))
            new Pawn(Color.dark, this.getCell(i, 6))
        }
    }

    public addFigures(): void {
        this.addKings()
        this.addQueens()
        this.addRooks()
        this.addKnights()
        this.addBishops()
        this.addPawns()
    }

    public getCell(x: number, y: number): Cell {
        return this.cells[y][x]
    }

    public addFisherFigures() {}

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }
}
