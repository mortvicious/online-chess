import React, {FC} from "react";
import styles from './BoardComponent.module.scss'
import {CellComponent} from "../CellComponent/CellComponent";
import {Color} from "../../models/Color";
import {Board} from "../../models/Board";
import {IBoardComponent} from "./BoardComponent.types";

export const BoardComponent:FC<IBoardComponent> = ({board, setBoard}) => {
    return (
        <div className={styles['board-component']}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                            />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}