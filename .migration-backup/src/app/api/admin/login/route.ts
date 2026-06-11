import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const credentials = await req.json();

    // Validate credentials
    // In production, verify against hashed passwords in database
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "secure123";

    if (
      credentials.username === adminUsername &&
      credentials.password === adminPassword
    ) {
      // In production, generate a secure JWT token
      return NextResponse.json(
        {
          success: true,
          message: "Login successful",
          token: `auth-token-${Date.now()}`,
        },
        {
          headers: {
            "Set-Cookie": `auth_token=${Date.now()}; Path=/; HttpOnly; Secure; SameSite=Strict`,
          },
        }
      );
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
