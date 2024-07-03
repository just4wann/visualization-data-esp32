import { Socket, io } from "socket.io-client";

export const useSocket = (uri: string): Socket => {
    const socket = io(uri);
    socket.on('connect', () => {
        if(socket.connected) {
            console.log('Connected to Server!');
        }
        else if (socket.disconnected) {
            console.log('Disconnected from Server');
        }
    })
    return socket;
}