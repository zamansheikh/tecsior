"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// Textarea replaced with WYSIWYG editor
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
    const [preview, setPreview] = useState(true)
    const editorRef = useRef<HTMLDivElement | null>(null)

    const initialTemplates = [
        {
            id: "welcome",
            name: "Welcome",
            subject: "Welcome to ProgrammerNexus",
            message: `Hi there,<br/><br/>Thanks for reaching out — we will review your request and get back to you within 24 hours.<br/><br/>Best,<br/>ProgrammerNexus`,
        },
        {
            id: "consult",
            name: "Consultation",
            subject: "Let's schedule a free consultation",
            message: `Hi,<br/><br/>Thanks for your interest — let's book a 30-minute consultation to review your project goals.<br/><br/>Regards,<br/>ProgrammerNexus`,
        },
        {
            id: "proposal",
            name: "Proposal",
            subject: "Project proposal and next steps",
            message: `Hi,<br/><br/>Please find a brief proposal attached. We're ready to discuss scope and timing.`,
        },
    ]
    const [templates, setTemplates] = useState(initialTemplates)

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

    // WYSIWYG tools using deprecated execCommand (works in modern browsers)
    const exec = (cmd: string, value?: string) => {
        try {
            if (editorRef.current) editorRef.current.focus()
            document.execCommand(cmd, false, value)
            setFormData((p) => ({ ...p, message: editorRef.current?.innerHTML || "" }))
        } catch (e) {
            console.error("exec error", e)
        }
    }

    useEffect(() => {
        // load templates from localStorage
        try {
            const raw = localStorage.getItem("pnx_templates")
            if (raw) setTemplates(JSON.parse(raw))
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== formData.message) {
            editorRef.current.innerHTML = formData.message
        }
    }, [formData.message])

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

                            <div className="pt-2">
                                <Label className="text-sm font-medium text-slate-700">Templates</Label>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {templates.map((t) => (
                                        <div key={t.id} className="bg-white border border-slate-100 rounded-md p-2 shadow-sm">
                                            <div className="text-sm font-semibold text-slate-700">{t.name}</div>
                                            <div className="text-xs text-slate-500 truncate max-w-[220px]" dangerouslySetInnerHTML={{ __html: t.message }} />
                                            <div className="flex gap-2 mt-2">
                                                <button type="button" className="text-sm text-emerald-600 underline" onClick={() => { setFormData((p) => ({ ...p, subject: t.subject, message: t.message })); if (editorRef.current) editorRef.current.innerHTML = t.message }}>Apply</button>
                                                <button type="button" className="text-sm text-slate-500" onClick={() => {
                                                    if (!confirm(`Delete template ${t.name}?`)) return
                                                    const next = templates.filter((x) => x.id !== t.id)
                                                    setTemplates(next)
                                                    localStorage.setItem("pnx_templates", JSON.stringify(next))
                                                }}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</Label>
                                <Input id="subject" placeholder="Email subject" value={formData.subject} onChange={handleChange} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message (HTML is supported)</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => exec("bold")} title="Bold"><Bold className="h-4 w-4 text-emerald-600" /></button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => exec("italic")} title="Italic"><Italic className="h-4 w-4 text-emerald-600" /></button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => exec("insertHTML", "<pre><code></code></pre>")} title="Code"><Code className="h-4 w-4 text-emerald-600" /></button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => { const url = prompt("Enter URL:", "https://") || "https://"; exec("createLink", url) }} title="Link"><LinkIcon className="h-4 w-4 text-emerald-600" /></button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => exec("insertUnorderedList")} title="Bullet List">•</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-md" onClick={() => exec("formatBlock", "H2")} title="Heading">H</button>
                                    <button type="button" className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md" onClick={() => setPreview((p) => !p)}>{preview ? "Hide Preview" : "Show Preview"}</button>
                                    <div className="ml-auto flex items-center gap-2">
                                        <button type="button" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-md" onClick={() => {
                                            const name = prompt("Save current as template (name):")
                                            if (name) {
                                                const newTpl = { id: `${name.toLowerCase().replace(/\s/g, '-')}-${Date.now()}`, name, subject: formData.subject, message: formData.message }
                                                const newTemplates = [newTpl, ...templates]
                                                setTemplates(newTemplates)
                                                localStorage.setItem("pnx_templates", JSON.stringify(newTemplates))
                                            }
                                        }}>Save as template</button>
                                        <select onChange={(e) => { const val = e.target.value; if (val) exec('insertHTML', val); e.target.value = '' }} defaultValue="" className="ml-2 rounded-md border px-2 py-1 bg-white">
                                            <option value="">Insert placeholder</option>
                                            <option value="{{firstName}}">{'{{firstName}}'}</option>
                                            <option value="{{company}}">{'{{company}}'}</option>
                                            <option value="{{projectType}}">{'{{projectType}}'}</option>
                                            <option value="{{deadline}}">{'{{deadline}}'}</option>
                                        </select>
                                        <button type="button" className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-slate-700" onClick={() => { if (!confirm('Clear editor content?')) return; setFormData((p) => ({ ...p, message: '' })); if (editorRef.current) editorRef.current.innerHTML = '' }}>Clear</button>
                                    </div>
                                </div>
                                <div contentEditable ref={editorRef} id="message" className="min-h-[160px] p-3 rounded-md border border-slate-200 bg-white/70" onInput={(e) => setFormData((p) => ({ ...p, message: (e.target as HTMLDivElement).innerHTML }))} dangerouslySetInnerHTML={{ __html: formData.message }} />
                                <div className="mt-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-3 bg-white rounded-md shadow-sm border border-slate-100">
                                            <h4 className="font-semibold text-slate-700 mb-2">Live Editor</h4>
                                            <div className="min-h-[200px] p-3 border border-dashed border-slate-100 rounded-md bg-white/80" dangerouslySetInnerHTML={{ __html: formData.message || "<em>Start writing your message...</em>" }} />
                                        </div>
                                        {preview && (
                                            <div className="p-3 bg-white rounded-md shadow-sm border border-slate-100">
                                                <h4 className="font-semibold text-slate-700 mb-2">Email Preview</h4>
                                                <div className="bg-white p-0 rounded-md shadow-sm border" dangerouslySetInnerHTML={{ __html: (`<div style='font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; border: 1px solid #e6eef4;'><div style='background: linear-gradient(135deg,#059669,#0d9488); padding: 18px; color: white; border-radius: 6px 6px 0 0; text-align:center;'><strong>ProgrammerNexus</strong></div><div style='padding:18px;'>` + formData.message + `</div><div style='padding:12px; color: #64748b; font-size: 12px; border-top: 1px solid #f1f5f9;'>From: ` + formData.sendFrom + ` &nbsp; | &nbsp; Reply To: ` + (formData.sendFrom === 'noreply@programmernexus.com' ? '(No-reply)' : formData.sendFrom) + `</div></div>`) }} />
                                            </div>
                                        )}
                                    </div>
                                </div>
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
