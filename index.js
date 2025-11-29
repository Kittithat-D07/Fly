export default async function handler(req, res) {
  try {
    console.log("🔥 NEW DATA:", req.query);

    // ดึงข้อมูลที่ WiFi-UART ส่งมา
    const data = JSON.stringify(req.query);

    // ส่งไป Telegram (ตัวอย่าง)
    const botToken = "8581800406:AAFCziKbQpDZX15fuZvF_F_0X0XdMpUqLO0";
    const chatId = "8477285785";

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(data)}`);

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.toString() });
  }
}
