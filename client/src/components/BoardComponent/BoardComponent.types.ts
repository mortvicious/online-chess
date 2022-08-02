import { Board } from '../../models/Board'

export interface IBoardComponent {
    board: Board
    setBoard: (board: Board) => void
}
