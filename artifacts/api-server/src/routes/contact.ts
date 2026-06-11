import { Router } from "express";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  res.status(200).json({
    success: true,
    message: "Thank you for contacting us! We will get back to you within 24 hours.",
  });
});

export default router;
