import { Router } from "express";

const router = Router();

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  if (username === "admin" && password === "mission2024") {
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token: `demo-token-${Date.now()}`,
    });
  }

  return res.status(401).json({ error: "Invalid credentials." });
});

export default router;
