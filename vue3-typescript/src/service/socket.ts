// import { reactive, ref } from 'vue'
import openSocket, { Socket } from 'socket.io-client'
// import { currentUrlWithPortNumber } from '@/utils/url-manipilation.ts'

export function useSocketIo(port: string): Socket {
    // return openSocket(currentUrlWithPortNumber(port))
    return openSocket(`http://localhost:${port}`, {
        transports: ["websocket"]
    })
}

export function useSocketPocker(socket: Socket) {
    // const message = reactive({
    //     userId: "",
    //     name: ""
    // });

    socket.on("get users", () => {
        console.log("get users")
    });

    function joinRoom(message: string): void {
        socket.emit("join-room", message);
    }

    function leaveRoom(message: string): void {
        socket.emit("leave", message);
    }


    return [joinRoom, leaveRoom];
}
