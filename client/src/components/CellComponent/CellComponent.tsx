import React, { FC } from 'react'
import styles from './CellComponent.module.scss'
import { ICellComponent } from './CellComponent.types'

export const CellComponent: FC<ICellComponent> = ({
    cell,
    selected,
    onClick,
}) => {
    return (
        <div
            className={
                styles['cell-component'] +
                ` ` +
                styles[cell.color] +
                ` ` +
                (selected ? styles['selected'] : '') +
                ` ` +
                (cell.available && cell.figure ? styles['enemy-available'] : '')
            }
            onClick={() => onClick(cell)}
        >
            {cell.available && !cell.figure && (
                <div className={styles['available']}></div>
            )}
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}
