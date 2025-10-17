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

        const adminEmail = process.env.CONTACT_EMAIL || "programmernexus.com@gmail.com"

        // Email 1: Admin notification (your email)
        const adminEmailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "sales@programmernexus.com",
                to: adminEmail,
                replyTo: email,
                subject: `📨 New Contact Form Submission from ${firstName} ${lastName}`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">📨 New Inquiry</h1>
                            <p style="color: #ecfdf5; margin: 8px 0 0 0; font-size: 14px;">A potential client has reached out</p>
                        </div>

                        <!-- Content -->
                        <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 8px 8px;">
                            <!-- Client Info -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin-bottom: 20px;">
                                <h2 style="color: #059669; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📋 Client Information</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Name:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${firstName} ${lastName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Email:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    ${company ? `<tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Company:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${company}</td>
                                    </tr>` : ""}
                                </table>
                            </div>

                            <!-- Project Info -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin-bottom: 20px;">
                                <h2 style="color: #0891b2; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Project Details</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Project Type:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><span style="background: #cffafe; color: #0c4a6e; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">${projectType}</span></td>
                                    </tr>
                                    ${budget ? `<tr>
                                        <td style="padding: 8px 0;"><strong style="color: #475569;">Budget Range:</strong></td>
                                        <td style="padding: 8px 0; color: #334155;">${budget}</td>
                                    </tr>` : ""}
                                </table>
                            </div>

                            <!-- Message -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
                                <h2 style="color: #f59e0b; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">💬 Message</h2>
                                <p style="color: #334155; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
                            </div>

                            <!-- Call to Action -->
                            <div style="text-align: center; padding: 20px 0;">
                                <a href="mailto:${email}" style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; transition: transform 0.2s;">
                                    Reply to ${firstName}
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0;">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>
                `,
            }),
        })

        // Email 2: Client confirmation (user's email)
        const clientEmailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "noreply@programmernexus.com",
                to: email,
                subject: `✅ We've Received Your Inquiry - Thank You!`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">✅ Thank You!</h1>
                            <p style="color: #ecfdf5; margin: 8px 0 0 0; font-size: 14px;">We've received your inquiry</p>
                        </div>

                        <!-- Content -->
                        <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 8px 8px;">
                            <!-- Greeting -->
                            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                                <p style="color: #334155; font-size: 16px; margin: 0 0 15px 0;">Hi <strong>${firstName}</strong>,</p>
                                <p style="color: #475569; line-height: 1.8; margin: 0; font-size: 15px;">
                                    Thank you for reaching out to <strong>ProgrammerNexus</strong>! We're excited to learn more about your project and explore how we can help bring your vision to life.
                                </p>
                            </div>

                            <!-- Confirmation Details -->
                            <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                                <h3 style="color: #059669; margin: 0 0 15px 0; font-size: 15px; font-weight: 600;">📝 Your Submission Summary</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Project Type:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${projectType}</td>
                                    </tr>
                                    ${company ? `<tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Company:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${company}</td>
                                    </tr>` : ""}
                                    ${budget ? `<tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Budget Range:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${budget}</td>
                                    </tr>` : ""}
                                </table>
                            </div>

                            <!-- What's Next -->
                            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #cffafe;">
                                <h3 style="color: #0891b2; margin: 0 0 15px 0; font-size: 15px; font-weight: 600;">⏭️ What's Next?</h3>
                                <ol style="color: #475569; line-height: 1.8; padding-left: 20px; margin: 0;">
                                    <li style="margin-bottom: 10px;"><strong>Review:</strong> Our team will review your project details carefully</li>
                                    <li style="margin-bottom: 10px;"><strong>Analysis:</strong> We'll analyze your requirements and scope</li>
                                    <li style="margin-bottom: 10px;"><strong>Contact:</strong> We'll reach out within <strong>24 hours</strong> with our insights</li>
                                    <li><strong>Discuss:</strong> We'll discuss the best approach for your project</li>
                                </ol>
                            </div>

                            <!-- Contact Info -->
                            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
                                <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Need immediate assistance?</p>
                                <p style="margin: 10px 0;">
                                    <a href="https://wa.me/8801735069723?text=Hi%20ProgrammerNexus%2C%20I%20submitted%20a%20form" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">💬 WhatsApp</a> |
                                    <a href="tel:+8809638677149" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">📞 Call</a> |
                                    <a href="https://m.me/programmernexus" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">👥 Messenger</a>
                                </p>
                            </div>

                            <!-- CTA Button -->
                            <div style="text-align: center; padding: 20px 0;">
                                <a href="https://calendly.com/programmernexus" style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); color: white; padding: 14px 40px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 15px;">
                                    📅 Schedule a Consultation
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="text-align: center; padding: 25px 30px; background: #f1f5f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #64748b; font-size: 13px; margin: 0 0 10px 0;">
                                <strong>ProgrammerNexus Pvt Ltd</strong>
                            </p>
                            <p style="color: #94a3b8; font-size: 12px; margin: 0; line-height: 1.6;">
                                Email: <a href="mailto:programmernexus.com@gmail.com" style="color: #0891b2; text-decoration: none;">programmernexus.com@gmail.com</a><br>
                                Phone: <a href="tel:+8809638677149" style="color: #0891b2; text-decoration: none;">+880 963 8677149</a><br>
                                Website: <a href="https://programmernexus.com" style="color: #0891b2; text-decoration: none;">www.programmernexus.com</a>
                            </p>
                            <p style="color: #cbd5e1; font-size: 11px; margin: 15px 0 0 0;">
                                This is an automated email. Please do not reply to this address.
                            </p>
                        </div>
                    </div>
                `,
            }),
        })

        // Check if both emails were sent successfully
        if (!adminEmailResponse.ok || !clientEmailResponse.ok) {
            console.error("Admin email error:", adminEmailResponse.ok ? "OK" : await adminEmailResponse.text())
            console.error("Client email error:", clientEmailResponse.ok ? "OK" : await clientEmailResponse.text())
            return NextResponse.json(
                { error: "Failed to send emails" },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Emails sent successfully" },
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
