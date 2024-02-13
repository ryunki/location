import { io } from "socket.io-client"

export const connectWithSocketServer = () => {
  // const socket = io("http://localhost:3000")
  const socket = io("http://192.168.45.179:3000");
  
  socket.on("connect", () => {
    console.log('successfully connected with socket.io server')
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  })
}