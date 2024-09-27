const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8080});

const rooms = {
    room1: [],
    room2: [],
    room3: []
};

wss.on('connection', (ws) => {
    console.log("Tạo server Thành Công!")
    let currentRoom = null;
    let username = null;

    ws.on("message", (message) => {
        console.log(Buffer.from(message))
        ws.send(JSON.stringify(message));
        
    })
})


