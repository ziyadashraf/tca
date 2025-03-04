import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // replace with your Gmail
    pass: "your-app-password", // replace with your Gmail app password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, description } = body;

    // Email content
    const mailOptions = {
      from: "your-email@gmail.com", // replace with your Gmail
      to: "your-email@gmail.com", // replace with recipient email
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Description: ${description}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Description:</strong> ${description}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { message: "Error processing form submission" },
      { status: 500 }
    );
  }
}
