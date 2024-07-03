import type { Socket } from "socket.io-client";
import { useStore } from "~/store/index";
import type { DataInformation } from "~/types";

export const useHumidity = (socket: Socket) => {
    socket.on('humidity', (message: DataInformation) => {
        const store = useStore();
        store.humidities.unshift(message);
    })
}