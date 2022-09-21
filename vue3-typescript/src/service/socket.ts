// Refer: https://codesandbox.io/s/f0r5w?file=/src/App.vue:473-484
// import { ref } from 'vue'
import openSocket, { Socket } from 'socket.io-client'
// import { currentUrlWithPortNumber } from '@/utils/url-manipilation.ts'
import roomStore from "@/stores/pocker";


export function useSocketIo(port: string): Socket {
    const connectionSocket = process.env.NODE_ENV === 'production' ? `https://authen-api-1.herokuapp.com` : `http://localhost:${port}`;
    // return openSocket(currentUrlWithPortNumber(port))
    return openSocket(connectionSocket, {
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
        if (data) roomStore.removePlayer(data.player)
    });
    socket.on("new voting", data => {
        console.log("new voting", data)
        roomStore.voting(data)
    });
    socket.on("updatedRoomStartus", data => {
        console.log("updatedRoomStartus", data)
        roomStore.getRoomsById(data)
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
