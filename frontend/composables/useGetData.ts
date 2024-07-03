import type { Socket } from "socket.io-client";
import { useStore } from "~/store";
import type { DataInformation } from "~/types";

export const useGetData = (socket: Socket, topic: string) => {
    const store = useStore();
    socket.on(topic, (message: DataInformation) => {
        if (topic === 'temperature') {
            store.temperatures.unshift(message)
            console.log(message)
            return store.temperatures
        }
        else if (topic === 'humidity') {
            store.humidities.unshift(message)
            console.log(message)
            return store.humidities
        }
        else if (topic === 'efficiency') {
            store.efficiencies.unshift(message)
            console.log(message)
            return store.efficiencies
        }
        else if (topic === 'average') {
            store.averages.unshift(message)
            console.log(message)
            return store.averages
        }
    })
}

// export class GetData {
//     data: number[]
//     constructor() {
//         this.data = []
//     }

//     static temperature(socket: Socket ,topic: string) {
//         socket.on(topic, (message: number) => {
//             store.temperatures.unshift(message)
//         })
//     }

//     humidity(socket: Socket ,topic: string) {
//         socket.on(topic, (message: number) => {
//             store.humidities.unshift(message)
//             this.data = store.humidities
//         })
//     }

//     efficiency(socket: Socket ,topic: string) {
//         socket.on(topic, (message: number) => {
//             store.efficiencies.unshift(message)
//             this.data = store.efficiencies
//         })
//     }

//     average(socket: Socket ,topic: string) {
//         socket.on(topic, (message: number) => {
//             store.averages.unshift(message)
//             this.data = store.averages
//         })
//     }
// }