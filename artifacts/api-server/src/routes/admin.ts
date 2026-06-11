import { Router } from "express";
import crypto from "crypto";

const router = Router();

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    console.error("ADMIN_USERNAME or ADMIN_PASSWORD environment variables are not set.");
    return res.status(503).json({ error: "Admin authentication is not configured." });
  }

  const usernameMatch = crypto.timingSafeEqual(
    Buffer.from(username),
    Buffer.from(expectedUsername)
  );
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(expectedPassword)
  );

  if (usernameMatch && passwordMatch) {
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token: crypto.randomBytes(32).toString("hex"),
    });
  }

  return res.status(401).json({ error: "Invalid credentials." });
});

export default router;
