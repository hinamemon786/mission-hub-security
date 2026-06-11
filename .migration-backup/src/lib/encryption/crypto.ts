import crypto from "crypto";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "your-default-key-32-chars-long!!!";
const algorithm = "aes-256-cbc";

export const encryptData = (data: string): string => {
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(ENCRYPTION_KEY, "salt", 32);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
};

export const decryptData = (encryptedData: string): string => {
  const parts = encryptedData.split(":");
  const iv = Buffer.from(parts[0], "hex");
  const encrypted = parts[1];
  const key = crypto.scryptSync(ENCRYPTION_KEY, "salt", 32);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export const hashPassword = (password: string): string => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

export const validatePassword = (
  password: string,
  hash: string
): boolean => {
  return hashPassword(password) === hash;
};
