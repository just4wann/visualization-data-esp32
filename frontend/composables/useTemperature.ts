import type { Socket } from "socket.io-client";
import { useStore } from "~/store/index";
import type { DataInformation } from "~/types";

export const useTemperature = (socket: Socket) => {
    socket.on('temperature', (message: DataInformation) => {
        const store = useStore();
        store.temperatures.unshift(message);
    });
}