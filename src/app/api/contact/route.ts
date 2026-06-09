import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, encrypt sensitive data and store in database
    // or send to email service
    console.log("Contact form submitted:", {
      name: formData.name,
      email: formData.email,
      // Don't log the full message
    });

    // TODO: Send email using nodemailer or similar service
    // TODO: Store encrypted data in database

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
