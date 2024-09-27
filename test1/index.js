const WebSocket = require('ws');

const wss = new WebSocket.Server({ port : 8080});

wss.on("connection", (ws) => {
    console.log("Client đã được kết nối");


    ws.on("message", (message) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(message.toString("utf-8"))
            }
        })
    })

    ws.on("close", () => {
        console.log("Client đã ngắt kết nối")
    })
})

