import React, { FC, useEffect, useState } from 'react'
import styles from './BoardComponent.module.scss'
import { CellComponent } from '../CellComponent/CellComponent'
import { Color } from '../../models/Color'
import { IBoardComponent } from './BoardComponent.types'
import { Cell } from '../../models/Cell'

export const BoardComponent: FC<IBoardComponent> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const cells = board.getCells()

    const highlightCells = () => {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    const handleClick = (cell: Cell) => {
        if (
            selectedCell &&
            selectedCell !== cell &&
            selectedCell.figure?.canMove(cell)
        ) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            updateBoard()
        } else {
            setSelectedCell(cell)
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    return (
        <div className={styles['board-component']}>
            {cells.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map((cell) => (
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                            selected={
                                cell.x === selectedCell?.x &&
                                cell.y === selectedCell?.y
                            }
                            onClick={handleClick}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}
