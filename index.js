const net = require("net");

const PORT = process.env.PORT || 7805;

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("DATA:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`TCP server listening on port ${PORT}`);
});
