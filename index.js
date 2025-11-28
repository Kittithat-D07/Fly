const net = require("net");

// ใช้ PORT จากระบบ หรือ fallback = 7805
const PORT = process.env.PORT || 7805;

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    console.log("DATA:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

server.listen(PORT, () => {
  console.log(`TCP server listening on port ${PORT}`);
});
