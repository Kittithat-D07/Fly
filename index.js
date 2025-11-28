const net = require("net");

// ใช้ PORT จาก env ถ้ามี (fly จะส่งมา) ถ้าไม่มีก็ใช้ 7805
const PORT = process.env.PORT || 7805;

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    const msg = data.toString();
    console.log("DATA:", msg);
    // TODO: ตรงนี้ค่อยเพิ่มส่งต่อไป Telegram / LINE ทีหลังได้
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
