import { Router } from "express";

const router = Router();

router.post("/quote", async (req, res) => {
  const { name, email, company, services, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  res.status(200).json({
    success: true,
    message: "Quote request received! Our team will prepare a customized proposal within 24 hours.",
    referenceId: `MH-${Date.now().toString(36).toUpperCase()}`,
  });
});

export default router;
