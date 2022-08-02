import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import socketUtils from './utils/socketUtils.js';
import http from 'http';
dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = socketUtils.sio(server);
socketUtils.connection(io);
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
const socketIOMiddleware = (req, res, next) => {
    req.io = io;
    next();
};
app.use('/api/test/', socketIOMiddleware, (req, res) => {
    req.io.emit('message', `Hello ${req.originalUrl}`);
    res.send('yo');
});
server.listen(port, () => {
    console.log(`⚡️ Server started on port ${port}`);
});
