const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({limit: "20mb"}));

// BURAYA AI STUDIO API KEY
const API_KEY = "AQ.Ab8RN6LIUp_TtDeXQAEk_lEnjPJIeZulJAbcbcOORkxop-GfXA";

app.post("/analyze", async (req, res) => {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Sunucu hatası" });
  }
});

app.listen(3000, () => console.log("Server çalışıyor: http://localhost:3000"));
