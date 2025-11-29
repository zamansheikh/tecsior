import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { key, sendFrom, senderEmail, to, subject, message } = body

        // Basic key check - prefer env var but fallback to pnx@123
        const expectedKey = process.env.MAIL_SERVER_KEY || "pnx@123"
        if (!key || key !== expectedKey) {
            return NextResponse.json({ error: "Unauthorized - invalid key" }, { status: 401 })
        }

        // Validate required fields
        if (!to || !subject || !message || !sendFrom) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // White-list verified senders - ensure we only use verified domains
        // Allow a comma separated list of additional verified senders via env: SEND_FROM_LIST or single SEND_FROM
        const envAddrs = (process.env.SEND_FROM_LIST || process.env.SEND_FROM || "")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        const WHITELIST = [
            "noreply@programmernexus.com",
            "hello@programmernexus.com",
            "support@programmernexus.com",
            "careers@programmernexus.com",
            "sales@programmernexus.com",
            ...envAddrs,
        ].filter(Boolean)

        if (!WHITELIST.includes(sendFrom)) {
            return NextResponse.json({ error: `Invalid sendFrom: not allowed` }, { status: 400 })
        }

        const adminEmail = process.env.CONTACT_EMAIL || "programmernexus.com@gmail.com"

        // Prepare message HTML - preserve newlines
        const htmlMessage = `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${message.replace(/\n/g, "<br />")}</div>`

        // Decide reply-to behavior:
        // - If sendFrom is noreply, do NOT set replyTo (automated message)
        // - Otherwise set replyTo to sendFrom so replies go to the public address
        const isNoreply = sendFrom === "noreply@programmernexus.com"
        const replyToAddr = isNoreply ? undefined : sendFrom

        // Email 1: Send to actual recipient using a verified from value (sendFrom)
        const recipientResp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: sendFrom,
                to,
                replyTo: replyToAddr,
                subject,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
                        <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                            ${htmlMessage}
                            <div style="padding: 12px 16px; background: #ffffff; border-left: 4px solid #059669; border-radius: 6px; margin-top: 24px; font-size: 12px; color: #64748b;">
                                <p style="margin: 0;">This message was sent from <strong>${sendFrom}</strong>.</p>
                                <p style="margin: 0; margin-top: 4px;">${replyToAddr ? `Replies will go to <strong>${replyToAddr}</strong>.` : `This is an automated message. Please do not reply.`}</p>
                            </div>
                        </div>
                    </div>
                `,
            }),
        })

        // Email 2: Notification to admin (copy)
        const adminResp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "sales@programmernexus.com",
                to: adminEmail,
                replyTo: replyToAddr || senderEmail || undefined,
                subject: `📨 Mail server sent to ${to} - ${subject}`,
                html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
              <h2 style="color: #059669;">Mail Server Notification</h2>
                            <p><strong>From:</strong> ${sendFrom}</p>
                            <p><strong>Reply To:</strong> ${replyToAddr ? replyToAddr : "(no replies - automated)"}</p>
                            ${senderEmail ? `<p><strong>Initiated by:</strong> ${senderEmail}</p>` : ""}
              <p><strong>To:</strong> ${to}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 12px; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #059669;">
                <div style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
          </div>
        `,
            }),
        })

        // Email 3: confirmation to sender
        let senderResp = { ok: true }
        if (senderEmail) {
            senderResp = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                },
                body: JSON.stringify({
                    from: "noreply@programmernexus.com",
                    to: senderEmail,
                    subject: `✅ Your message was sent to ${to}`,
                    html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                <p>Hi,</p>
                <p>Your message to <strong>${to}</strong> has been sent successfully via our mail server. Here's a copy:</p>
                <div style="margin-top: 12px; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #059669;">
                  <div style="white-space: pre-wrap;">${message}</div>
                </div>
                <p style="margin-top: 12px;">Thanks,<br/>ProgrammerNexus</p>
              </div>
            </div>
          `,
                }),
            })
        }

        if (!recipientResp.ok || !adminResp.ok || (senderEmail && !senderResp.ok)) {
            console.error("Error emails:", { recipient: await recipientResp.text(), admin: await adminResp.text() })
            return NextResponse.json({ error: "Failed to send one or more emails" }, { status: 500 })
        }

        return NextResponse.json({ success: true, message: "Emails sent successfully" }, { status: 200 })
    } catch (error) {
        console.error("Mail server error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
