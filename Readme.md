
# Home Automation System

A full-stack **Home Automation** project with a **Node.js + Express backend** running on a **Raspberry Pi** and a **Vite + React frontend**.  
The system allows controlling smart devices (Bulb, Fan, TV, AC) over Wi-Fi using REST APIs.

---

## 📌 Project Structure

```
home-automation/
├─ Backend/ (Runs on Raspberry Pi)
│  ├─ routes/
│  │  └─ devices.js
│  ├─ server.js
│  ├─ package.json
│  └─ .env (optional)
├─ Frontend/ (Runs on laptop / mobile browser)
│  ├─ src/
│  ├─ package.json
│  └─ vite.config.js
└─ README.md
```

---

## ⚙️ Prerequisites

### For Raspberry Pi (Backend)
- Raspberry Pi OS
- Node.js **v18 or higher**
- npm
- Git

Check installation: run `node -v` and `npm -v`.

---

## 📥 Clone the Repository (ON RASPBERRY PI)

Clone the repository and enter the folder: `git clone <your-repo-url> home-automation` then `cd home-automation`.

---

## 🔧 Backend Setup (Raspberry Pi)

### Step 1: Go to Backend folder

Change to the backend folder: `cd Backend`.

### Step 2: Install dependencies

Install dependencies with `npm install`.

### Step 3: Environment variables (optional)

Create a `.env` file containing `PORT=5000` if you need to override the default port (default is 5000).

---

### Step 4: Backend server code

The backend server implementation is in `Backend/server.js`. It registers the routes from `Backend/routes/devices.js` and exposes a health check at `/ping`.

### Step 5: Sample routes file

See `Backend/routes/devices.js` for the sample device routes (bulb on/off).

### Step 6: Start backend on Raspberry Pi

Start the backend with `npm start`. You should see a message like: Backend running on port 5000.

### Step 7: Test backend from another device

From a browser on another device, open http://raspberrypi.local:5000/ping. Expected response: { "device": "raspberry-pi", "status": "online" }.

`raspberrypi.local` works on any router using mDNS — no IP handling needed.

---

## 🎨 Frontend Setup (Laptop / Development Machine)


### Frontend Setup (Laptop / Development Machine)

Change to the frontend folder (`cd ../Frontend`), install dependencies (`npm install`) and start the dev server (`npm run dev`). The frontend typically runs at http://localhost:5173.

---

## 🔗 Frontend ↔ Backend Connection

Backend Base URL (recommended): http://raspberrypi.local:5000. From the frontend you'll POST to endpoints under `/api`, for example `/api/bulb/on`.

---

## 🌐 Network Architecture

React App (Browser) → HTTP (Wi‑Fi) → Raspberry Pi (Node + Express) → HTTP → Smart Devices (Bulb / Fan / TV / AC)

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
