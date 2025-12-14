import express from "express";
const router = express.Router();

/**
 * BULB
 */
router.post("/bulb/on", (req, res) => {
  console.log("Bulb ON command received");
  // later: send HTTP to real bulb
  res.json({ device: "bulb", state: "on" });
});

router.post("/bulb/off", (req, res) => {
  console.log("Bulb OFF command received");
  res.json({ device: "bulb", state: "off" });
});

export default router;