import { Server } from 'socket.io';
export var socketUtils;
(function (socketUtils) {
    socketUtils.sio = (server) => {
        return new Server(server, {
            cors: {
                origin: '*'
            }
        });
    };
    socketUtils.connection = (io) => {
        io.on('connection', (socket) => {
            console.log('User is connected');
            socket.on('message', (message) => {
                console.log(`Message from ${socket.id}: ${message}`);
            });
        });
    };
})(socketUtils || (socketUtils = {}));
// export default socketUtils
