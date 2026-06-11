import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const quoteData = await req.json();

    // Validate required fields
    if (!quoteData.name || !quoteData.email || !quoteData.services?.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, encrypt and store the quote request
    console.log("Quote request submitted:", {
      name: quoteData.name,
      email: quoteData.email,
      company: quoteData.company,
      services: quoteData.services,
      // Don't log sensitive data
    });

    // TODO: Send email to admin
    // TODO: Store encrypted data in database
    // TODO: Send confirmation email to client

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
      quoteId: `QUOTE-${Date.now()}`,
    });
  } catch (error) {
    console.error("Quote request error:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}
