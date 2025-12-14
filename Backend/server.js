import express from "express";
import cors from "cors";
import dontenv from "dotenv";

import deviceRoutes from "./routes/devices.js";

dontenv.config();

const app = express(); // Initialize the Express app
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", deviceRoutes);

// health check (VERY IMPORTANT)
app.get("/ping", (req, res) => {
  res.json({
    device: "raspberry-pi",
    status: "online",
  });
});

// listen on all Wi-Fi interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
