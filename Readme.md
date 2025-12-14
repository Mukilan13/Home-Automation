
# Home Automation System

A full-stack **Home Automation** project with a **Node.js + Express backend** running on a **Raspberry Pi** and a **Vite + React frontend**.  
The system allows controlling smart devices (Bulb, Fan, TV, AC) over Wi-Fi using REST APIs.

---

## 📌 Project Structure

home-automation/
│
├── Backend/ # Runs on Raspberry Pi
│   ├── routes/
│   │   └── devices.js
│   ├── server.js
│   ├── package.json
│   └── .env # optional
│
├── Frontend/ # Runs on laptop / mobile browser
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

---

## ⚙️ Prerequisites

### For Raspberry Pi (Backend)
- Raspberry Pi OS
- Node.js **v18 or higher**
- npm
- Git

Check installation:

```sh
node -v
npm -v
```

---

## 📥 Clone the Repository (ON RASPBERRY PI)

```sh
git clone <your-repo-url> home-automation
cd home-automation
```

---

## 🔧 Backend Setup (Raspberry Pi)

### Step 1: Go to Backend folder

```sh
cd Backend
```

### Step 2: Install dependencies

```sh
npm install
```

### Step 3: Environment variables (optional)

Create `.env` file:

```env
PORT=5000
```

If not created, default port **5000** is used.

---

### Step 4: Backend server code (`server.js`)

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import deviceRoutes from "./routes/devices.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", deviceRoutes);

// Health check
app.get("/ping", (req, res) => {
    res.json({
        device: "raspberry-pi",
        status: "online"
    });
});

// IMPORTANT: Listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
```

### Step 5: Sample routes file (`routes/devices.js`)

```js
import express from "express";

const router = express.Router();

router.post("/bulb/on", (req, res) => {
    console.log("Bulb ON command received");
    res.json({ status: "bulb on" });
});

router.post("/bulb/off", (req, res) => {
    console.log("Bulb OFF command received");
    res.json({ status: "bulb off" });
});

export default router;
```

### Step 6: Start backend on Raspberry Pi

```sh
npm start
```

Expected output:

```text
Backend running on port 5000
```

### Step 7: Test backend from another device

From laptop / phone browser:

```sh
http://raspberrypi.local:5000/ping
```

Expected response:

```json
{
    "device": "raspberry-pi",
    "status": "online"
}
```

`raspberrypi.local` works on any router using mDNS — no IP handling needed.

---

## 🎨 Frontend Setup (Laptop / Development Machine)

### Step 1: Go to Frontend folder

```sh
cd ../Frontend
```

### Step 2: Install dependencies

```sh
npm install
```

### Step 3: Start frontend

```sh
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔗 Frontend ↔ Backend Connection

Backend Base URL (recommended):

```js
const PI_BASE_URL = "http://raspberrypi.local:5000";
```

Example API call from React:

```js
fetch(`${PI_BASE_URL}/api/bulb/on`, { method: "POST" });
```

---

## 🌐 Network Architecture

```
React App (Browser)
                ↓ HTTP (Wi-Fi)
Raspberry Pi (Node + Express)
                ↓ HTTP
Smart Devices (Bulb / Fan / TV / AC)
```

Backend must run on Raspberry Pi.

Frontend runs anywhere but both must be on the same Wi-Fi network.

---

## 🛠️ Notes & Troubleshooting

- Backend must be started on Raspberry Pi (not your laptop).
- Use `0.0.0.0` to allow LAN access.
- If `.local` doesn’t work on Windows, install Bonjour.
- If CORS errors appear, backend already has CORS enabled.
- For production, consider running backend with `pm2`.

---

## ⚡ Quick Commands Summary

Raspberry Pi

```sh
cd Backend
npm install
npm start
```

Frontend

```sh
cd Frontend
npm install
npm run dev
```

---

## ✅ Final Takeaway

The React app does not send Wi-Fi signals — it sends HTTP requests over Wi-Fi. The Raspberry Pi acts as the central controller. Using the `.local` hostname (mDNS) makes the system router-independent.

This README is ready to paste and use.
