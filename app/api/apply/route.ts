import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, phone, position, experience, portfolio, cvLink, coverLetter } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !position || !experience || !cvLink || !coverLetter) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        // Get position title from ID
        const positions: Record<string, { title: string; department: string }> = {
            "1": { title: "Senior Full-Stack Developer", department: "Engineering" },
            "2": { title: "UI/UX Designer", department: "Design" },
            "3": { title: "Digital Marketing Specialist", department: "Marketing" },
            "4": { title: "Junior React Developer", department: "Engineering" },
            "5": { title: "Business Development Executive", department: "Sales & Business" },
            "6": { title: "DevOps Engineer", department: "Infrastructure" },
        }

        const positionData = positions[position] || { title: "Not Found", department: "Unknown" }
        const adminEmail = process.env.CONTACT_EMAIL || "programmernexus.com@gmail.com"

        // Email 1: Admin notification (your email)
        const adminEmailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "careers@programmernexus.com",
                to: adminEmail,
                replyTo: email,
                subject: `📄 New Job Application from ${firstName} ${lastName} - ${positionData.title}`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">📄 New Job Application</h1>
                            <p style="color: #ecfdf5; margin: 8px 0 0 0; font-size: 14px;">A candidate has applied for ${positionData.title}</p>
                        </div>

                        <!-- Content -->
                        <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 8px 8px;">
                            <!-- Position Info -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin-bottom: 20px;">
                                <h2 style="color: #059669; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Position Applied For</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Position:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #334155; font-weight: 600;">${positionData.title}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0;"><strong style="color: #475569;">Department:</strong></td>
                                        <td style="padding: 8px 0; color: #334155;">${positionData.department}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Candidate Info -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin-bottom: 20px;">
                                <h2 style="color: #0891b2; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">👤 Candidate Information</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Name:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${firstName} ${lastName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Email:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Phone:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}" style="color: #0d9488; text-decoration: none;">${phone}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0;"><strong style="color: #475569;">Experience:</strong></td>
                                        <td style="padding: 8px 0; color: #334155;">${experience}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Application Details -->
                            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
                                <h2 style="color: #f59e0b; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📋 Application Details</h2>
                                <table style="width: 100%; border-collapse: collapse;">
                                    ${portfolio ? `<tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">Portfolio:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="${portfolio}" style="color: #0d9488; text-decoration: none; word-break: break-all;">${portfolio}</a></td>
                                    </tr>` : ""}
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #475569;">CV/Resume:</strong></td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="${cvLink}" style="color: #0d9488; text-decoration: none; word-break: break-all;">Download CV</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; vertical-align: top;"><strong style="color: #475569;">Cover Letter:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; white-space: pre-wrap; word-wrap: break-word;">${coverLetter}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Call to Action -->
                            <div style="text-align: center; padding: 20px 0;">
                                <a href="mailto:${email}" style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; transition: transform 0.2s; margin-right: 10px;">
                                    Reply to Candidate
                                </a>
                                <a href="${cvLink}" style="background: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; transition: transform 0.2s;">
                                    View CV
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0;">Application received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>
                `,
            }),
        })

        // Email 2: Candidate confirmation (applicant's email)
        const candidateEmailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "noreply@programmernexus.com",
                to: email,
                subject: `✅ Application Received - ${positionData.title}`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">✅ Thank You!</h1>
                            <p style="color: #ecfdf5; margin: 8px 0 0 0; font-size: 14px;">We've received your application</p>
                        </div>

                        <!-- Content -->
                        <div style="background: #f8fafc; padding: 40px 30px; border-radius: 0 0 8px 8px;">
                            <!-- Greeting -->
                            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                                <p style="color: #334155; font-size: 16px; margin: 0 0 15px 0;">Hi <strong>${firstName}</strong>,</p>
                                <p style="color: #475569; line-height: 1.8; margin: 0; font-size: 15px;">
                                    Thank you for applying to <strong>Programmer Nexus</strong>! We're thrilled to receive your application for the <strong>${positionData.title}</strong> position. We've reviewed your submission and will evaluate your candidacy against our requirements.
                                </p>
                            </div>

                            <!-- Application Summary -->
                            <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                                <h3 style="color: #059669; margin: 0 0 15px 0; font-size: 15px; font-weight: 600;">📝 Application Summary</h3>
                                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Position:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${positionData.title}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Department:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${positionData.department}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #475569;"><strong>Experience:</strong></td>
                                        <td style="padding: 8px 0; color: #334155; text-align: right;">${experience}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- What's Next -->
                            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border: 2px solid #cffafe;">
                                <h3 style="color: #0891b2; margin: 0 0 15px 0; font-size: 15px; font-weight: 600;">⏭️ What's Next?</h3>
                                <ol style="color: #475569; line-height: 1.8; padding-left: 20px; margin: 0;">
                                    <li style="margin-bottom: 10px;"><strong>Review:</strong> Our team will carefully review your CV and cover letter</li>
                                    <li style="margin-bottom: 10px;"><strong>Assessment:</strong> We'll evaluate your qualifications against the position requirements</li>
                                    <li style="margin-bottom: 10px;"><strong>Contact:</strong> If you're a great fit, we'll reach out within <strong>5-7 business days</strong></li>
                                    <li><strong>Interview:</strong> We'll schedule a conversation to learn more about you</li>
                                </ol>
                            </div>

                            <!-- Tips -->
                            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                                <h3 style="color: #d97706; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">💡 Pro Tip</h3>
                                <p style="color: #92400e; margin: 0; font-size: 14px; line-height: 1.6;">
                                    Make sure your email is checked regularly. We may reach out through the email or phone number you provided. If you don't hear from us within 7 days, feel free to follow up!
                                </p>
                            </div>

                            <!-- Contact Info -->
                            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
                                <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">Have questions?</p>
                                <p style="margin: 10px 0;">
                                    <a href="mailto:programmernexus.com@gmail.com" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">📧 Email</a> |
                                    <a href="tel:+8809638677149" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">📞 Call</a> |
                                    <a href="https://m.me/programmernexus" style="color: #059669; text-decoration: none; font-weight: 600; margin: 0 10px;">💬 Messenger</a>
                                </p>
                            </div>

                            <!-- CTA Button -->
                            <div style="text-align: center; padding: 20px 0;">
                                <a href="https://programmernexus.com/careers" style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); color: white; padding: 14px 40px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600; font-size: 15px;">
                                    📚 Learn More About Us
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
        if (!adminEmailResponse.ok || !candidateEmailResponse.ok) {
            console.error("Admin email error:", adminEmailResponse.ok ? "OK" : await adminEmailResponse.text())
            console.error("Candidate email error:", candidateEmailResponse.ok ? "OK" : await candidateEmailResponse.text())
            return NextResponse.json(
                { error: "Failed to send emails" },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Application submitted successfully" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Application form error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
