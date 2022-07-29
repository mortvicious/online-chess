import React, {FC} from "react";
import styles from './CellComponent.module.scss'
import {ICellComponent} from "./CellComponent.types";


export const CellComponent:FC<ICellComponent> = ({cell}) => {
    return (
        <div className={styles['cell-component'] + ` ` + styles[cell.color]}>

        </div>
    )
}