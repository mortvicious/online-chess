interface IGameController {
    start: () => void
    end: () => void
}

class GameController implements IGameController {
    public start(): void {
        
    }
    public end(): void {

    }
}

export default new GameController()