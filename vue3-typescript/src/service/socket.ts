// Refer: https://codesandbox.io/s/f0r5w?file=/src/App.vue:473-484
// import { ref } from 'vue'
import openSocket, { Socket } from 'socket.io-client'
// import { currentUrlWithPortNumber } from '@/utils/url-manipilation.ts'
import roomStore from "@/stores/pocker";


export function useSocketIo(port: string): Socket {
    // return openSocket(currentUrlWithPortNumber(port))
    return openSocket(`http://localhost:${port}`, {
        transports: ["websocket"]
    })
}

export function useSockertListening(socket: Socket) { 
    socket.on("get users", data => {
        console.log("get users", data)
        roomStore.addPlayer(data.player)
    });
    socket.on("user leaves", data => {
        console.log("user leaves", data)
        roomStore.removePlayer(data.player)
    });
}

export function useSocketPocker(socket: Socket) {
    function joinRoom(message: string): void {
        socket.emit("join-room", message);
    }

    function leaveRoom(message: string): void {
        socket.emit("leave", message);
    }


    return [joinRoom, leaveRoom];
}
