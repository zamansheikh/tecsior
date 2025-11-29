"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, ArrowRight, Bold, Italic, Link as LinkIcon, Code } from "lucide-react"

export default function MailServerPage() {
    const [key, setKey] = useState("")
    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const [formData, setFormData] = useState({
        sendFrom: "noreply@programmernexus.com",
        senderEmail: "",
        to: "",
        subject: "",
        message: "",
    })
    const [preview, setPreview] = useState(false)

    // no demo key: server will verify actual key using /api/mail-server/auth

    const handleKeySubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitStatus("idle")
        try {
            const res = await fetch('/api/mail-server/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key })
            })
            if (res.ok) {
                setAuthorized(true)
                setSubmitStatus('idle')
            } else {
                setSubmitStatus('error')
                setTimeout(() => setSubmitStatus('idle'), 3000)
            }
        } catch (err) {
            console.error('Auth error', err)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 3000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const insertAtCursor = (tagOpen: string, tagClose: string) => {
        const textArea = document.getElementById("message") as HTMLTextAreaElement | null
        if (!textArea) return
        const { selectionStart, selectionEnd, value } = textArea
        const selected = value.substring(selectionStart, selectionEnd)
        const before = value.substring(0, selectionStart)
        const after = value.substring(selectionEnd)
        const newVal = `${before}${tagOpen}${selected}${tagClose}${after}`
        setFormData((p) => ({ ...p, message: newVal }))
        // reposition the cursor inside the inserted content
        setTimeout(() => {
            const pos = selectionStart + tagOpen.length + selected.length + tagClose.length
            textArea.focus()
            textArea.selectionStart = textArea.selectionEnd = pos
        }, 0)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/mail-server", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key, ...formData }),
            })

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({ sendFrom: "noreply@programmernexus.com", senderEmail: "", to: "", subject: "", message: "" })
                setTimeout(() => setSubmitStatus("idle"), 5000)
            } else if (response.status === 401) {
                setSubmitStatus("error")
                setAuthorized(false)
                setTimeout(() => setSubmitStatus("idle"), 3000)
            } else {
                setSubmitStatus("error")
                setTimeout(() => setSubmitStatus("idle"), 5000)
            }
        } catch (err) {
            console.error("Mail send error:", err)
            setSubmitStatus("error")
            setTimeout(() => setSubmitStatus("idle"), 5000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
            <div className="container mx-auto max-w-4xl px-4">
                <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50/50 px-4 py-2 rounded-full mb-6">
                    <Send className="mr-2 h-4 w-4" />
                    Mail Server
                </Badge>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                    {!authorized ? (
                        <form onSubmit={handleKeySubmit} className="space-y-4">
                            <Label htmlFor="secret" className="text-sm font-medium text-slate-700">
                                Secret Key
                            </Label>
                            <Input id="secret" type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter secret key" className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500" required />

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">Invalid key</div>
                            )}

                            <div className="flex items-center gap-2">
                                <Button type="submit" className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-2 px-6">Unlock</Button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="sendFrom" className="text-sm font-medium text-slate-700">Send From (Verified Sender)</Label>
                                    <select id="sendFrom" value={formData.sendFrom} onChange={(e) => {
                                        const value = e.target.value
                                        setFormData((p) => ({ ...p, sendFrom: value, senderEmail: value === "noreply@programmernexus.com" ? p.senderEmail : "" }))
                                    }} className="w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-white/60">
                                        <option value="noreply@programmernexus.com">noreply@programmernexus.com</option>
                                        <option value="hello@programmernexus.com">hello@programmernexus.com</option>
                                        <option value="support@programmernexus.com">support@programmernexus.com</option>
                                        <option value="careers@programmernexus.com">careers@programmernexus.com</option>
                                        <option value="sales@programmernexus.com">sales@programmernexus.com</option>
                                    </select>
                                    <p className="text-xs text-slate-500 mt-1">
                                        {formData.sendFrom === "noreply@programmernexus.com" ? (
                                            <>This will be sent from <strong>{formData.sendFrom}</strong> (automated). <em>No replies will be delivered.</em></>
                                        ) : (
                                            <>This will be sent from <strong>{formData.sendFrom}</strong>. Replies will go to this address. Sender email is not required.</>
                                        )}
                                    </p>
                                </div>
                                {formData.sendFrom === "noreply@programmernexus.com" && (
                                    <div className="space-y-2">
                                        <Label htmlFor="senderEmail" className="text-sm font-medium text-slate-700">Sender Email (optional) — used for confirmation only</Label>
                                        <Input id="senderEmail" placeholder="sender@example.com" value={formData.senderEmail} onChange={handleChange} />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="to" className="text-sm font-medium text-slate-700">To (Recipient Email)</Label>
                                <Input id="to" placeholder="recipient@example.com" value={formData.to} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</Label>
                                <Input id="subject" placeholder="Email subject" value={formData.subject} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message (HTML is supported)</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <button type="button" className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md" onClick={() => insertAtCursor("<strong>", "</strong>")}><Bold className="h-4 w-4" />Bold</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md" onClick={() => insertAtCursor("<em>", "</em>")}><Italic className="h-4 w-4" />Italic</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md" onClick={() => insertAtCursor("<code>", "</code>")}><Code className="h-4 w-4" />Code</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md" onClick={() => {
                                        const url = prompt("Enter URL:", "https://") || "https://"
                                        insertAtCursor(`<a href=\"${url}\">`, `</a>`)
                                    }}><LinkIcon className="h-4 w-4" />Link</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-md" onClick={() => setPreview((p) => !p)}>{preview ? "Hide" : "Preview"}</button>
                                </div>
                                <Textarea id="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} className="min-h-[160px]" required />
                                {preview && (
                                    <div className="mt-3 p-3 bg-slate-50 rounded-md border text-slate-700">
                                        <div dangerouslySetInnerHTML={{ __html: formData.message.replace(/\n/g, "<br />") }} />
                                    </div>
                                )}
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">✓ Email sent successfully</div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">✕ Failed to send message. Please check the key or inputs.</div>
                            )}

                            <div className="flex items-center gap-2">
                                <Button type="submit" disabled={loading} className="py-3 px-6">
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    {loading ? "Sending..." : "Send Message"}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="ghost" onClick={() => { setAuthorized(false); setKey("") }}>Lock</Button>
                            </div>
                            <div className="mt-2">
                                {formData.sendFrom === "noreply@programmernexus.com" ? (
                                    <p className="text-xs text-slate-500">Auto-generated: <strong>do not reply</strong>. Replies will not be delivered.</p>
                                ) : (
                                    <p className="text-xs text-slate-500">Replies will be delivered to <strong>{formData.sendFrom}</strong>. No sender email required.</p>
                                )}
                                <p className="text-xs text-slate-500 mt-2">By using this page, you agree this is for internal usage. It will send a copy to the admin and to the sender when provided.</p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
