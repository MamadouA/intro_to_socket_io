import express, { Response, Request } from 'express'
import { createServer } from 'http';
import { Server } from 'socket.io'

const app = express();
const httpServer = createServer(app);
const socket = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173"],
        exposedHeaders: ['Content-Type']
    }
});

socket.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (message) => {
        console.log(message);
    });
});

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world!");
});

httpServer.listen(3000, () => {
    console.log("Server listening on port 3000");
})