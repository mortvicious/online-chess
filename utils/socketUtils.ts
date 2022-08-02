import { Server } from 'socket.io'
import socketIOTypes from '../types/socketIOTypes'

namespace socketUtils {
    export const sio = (server: any): Server => {
        return new Server<
            socketIOTypes.ClientToServerEvents,
            socketIOTypes.ServerToClientEvents,
            socketIOTypes.InterServerEvents,
            socketIOTypes.SocketData
        >(server, {
            cors: {
                origin: '*',
            },
        })
    }

    export const connection = (io: any) => {
        io.on('connection', (socket: any) => {
            console.log('User is connected')
            socket.on('message', (message: any) => {
                console.log(`Message from ${socket.id}: ${message}`)
            })
        })
    }
}

export default socketUtils
