import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const port = 3002;

const ws = new WebSocketServer({ port });

ws.on("connection", async (socket) => {
//   console.log(`Connected to ws server running on ws://localhost:${port}`);
  await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  socket.send("hi there...your are connected to the server.");
});
