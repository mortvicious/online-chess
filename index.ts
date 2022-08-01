import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {socketUtils} from './utils/socketUtils'
import http from 'http'

dotenv.config()
const port = process.env.PORT || 8000

const app: Express = express()
const server = http.createServer(app)
const io = socketUtils.sio(server)
socketUtils.connection(io)

app.use(cors({credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const socketIOMiddleware = (req: any, res: Response, next: NextFunction) => {
  req.io = io
  next()
}

app.use('/api/test/', socketIOMiddleware, (req: any, res) => {
  req.io.emit('message', `Hello ${req.originalUrl}`)
  res.send('yo')
})

server.listen(port, () => {
  console.log(`⚡️ Server started on port ${port}`)
})
