import type { Socket } from "socket.io-client";
import { useStore } from "~/store/index";
import type { DataInformation } from "~/types";

export const useEfficiency = (socket: Socket) => {
    socket.on('efficiency', (message: DataInformation) => {
        const store = useStore();
        store.efficiencies.unshift(message);
    })
}