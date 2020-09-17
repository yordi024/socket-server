import { Socket } from "socket.io";
import SocketIO from "socket.io";

export const disconect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
}

// Listening messages
export const message = (client: Socket, io: SocketIO.Server) => {
    client.on('message', ( payload: { from: string, message: string } ) => {
        console.log('Message recieved', payload);
        io.emit('message', payload);
    })
}

