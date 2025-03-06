import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Debug: Log env variables (mask part of the password)
console.log("Environment Check:");
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);
if (process.env.GMAIL_APP_PASSWORD) {
  const maskedPass =
    process.env.GMAIL_APP_PASSWORD.substring(0, 4) +
    "..." +
    process.env.GMAIL_APP_PASSWORD.substring(
      process.env.GMAIL_APP_PASSWORD.length - 4
    );
  console.log("GMAIL_APP_PASSWORD (masked):", maskedPass);
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, ""), // Remove any spaces from the password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    // Check if SMTP is configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("SMTP configuration missing");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, description, contactEmail } = body;

    console.log("Received form submission:", {
      name,
      email,
      phone,
      contactEmail,
    });

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // If no contactEmail provided, use the GMAIL_USER as fallback
    const recipientEmail = contactEmail || process.env.GMAIL_USER;

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      replyTo: email, // So replies go to the person who filled the form
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Description: ${description || "No description provided"}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Description:</strong> ${description || "No description provided"}</p>
      `,
    };

    console.log("Attempting to send email to:", recipientEmail);

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
