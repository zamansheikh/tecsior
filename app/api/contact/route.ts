import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, company, projectType, budget, message } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !projectType || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        // Send email using Resend
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "sales@programmernexus.com", // Change this to your Resend verified domain
                to: process.env.CONTACT_EMAIL || "programmernexus.com@gmail.com",
                replyTo: email,
                subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #059669;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ""}
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <h3 style="color: #059669;">Project Details:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
            }),
        })

        if (!response.ok) {
            console.error("Resend API error:", await response.text())
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
