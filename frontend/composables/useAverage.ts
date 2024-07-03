import type { Socket } from "socket.io-client";
import { useStore } from "~/store/index";
import type { DataInformation } from "~/types";

export const useAverage = (socket: Socket) => {
    socket.on('average', (message: DataInformation) => {
        const store = useStore();
        store.averages.unshift(message);
    })
}