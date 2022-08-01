import React, {useEffect, useState} from 'react';
import {BoardComponent} from "./components/BoardComponent/BoardComponent";
import {Board} from "./models/Board";
import {io} from 'socket.io-client'

function App() {
  
    useEffect(() => {
        const socket = io('http://127.0.0.1:8080')
        socket.on('connect', () => {
            console.log(socket.id)
        });

        socket.on('disconnect', () => {
            console.log(`disconnected`)
        });



        return () => {
            socket.off('connect');
            socket.off('disconnect');
      };
    }, []);
  

    const [board, setBoard] = useState<Board>(new Board())

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    return (
        <div className="app">
        <BoardComponent
            board={board}
            setBoard={setBoard}
        />
        </div>
    );
}

export default App;
