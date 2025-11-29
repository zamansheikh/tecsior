"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, ArrowRight, Bold, Italic, Link as LinkIcon, Code, User, Building, Calendar, Briefcase, FileText } from "lucide-react"

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

    const [placeholderValues, setPlaceholderValues] = useState<Record<string, string>>({})

    const [preview, setPreview] = useState(true)
    const editorRef = useRef<HTMLDivElement | null>(null)

    const initialTemplates = [
        {
            id: "welcome",
            name: "Welcome",
            subject: "Welcome to ProgrammerNexus",
            message: `Hi {{firstName}},<br/><br/>Thanks for reaching out — we will review your request and get back to you within 24 hours.<br/><br/>Best,<br/>ProgrammerNexus`,
        },
        {
            id: "consult",
            name: "Consultation",
            subject: "Let's schedule a free consultation",
            message: `Hi {{firstName}},<br/><br/>Thanks for your interest in {{projectType}} — let's book a 30-minute consultation to review your project goals.<br/><br/>Regards,<br/>ProgrammerNexus`,
        },
        {
            id: "proposal",
            name: "Proposal",
            subject: "Project proposal and next steps",
            message: `Hi {{firstName}},<br/><br/>Please find a brief proposal attached for {{company}}. We're ready to discuss scope and timing.<br/><br/>Best,<br/>ProgrammerNexus`,
        },
        {
            id: "followup",
            name: "Follow Up",
            subject: "Following up on our conversation",
            message: `Hi {{firstName}},<br/><br/>I wanted to follow up on our last conversation regarding {{projectType}}. Do you have any updates?<br/><br/>Best,<br/>ProgrammerNexus`,
        },
        {
            id: "invoice",
            name: "Invoice",
            subject: "Invoice for recent work",
            message: `Hi {{firstName}},<br/><br/>Please find attached the invoice for the recent work on {{projectType}}.<br/><br/>Payment is due by {{deadline}}.<br/><br/>Thanks,<br/>ProgrammerNexus`,
        }
    ]
    const [templates, setTemplates] = useState(initialTemplates)

    // Extract placeholders from message
    const detectedPlaceholders = Array.from(new Set([
        ...(formData.message.match(/{{(\w+)}}/g) || []).map(m => m.replace(/{{|}}/g, '')),
        ...(Array.from(formData.message.matchAll(/<span\s+[^>]*data-placeholder="(\w+)"[^>]*>/g)).map(m => m[1]))
    ]))

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handlePlaceholderChange = (key: string, value: string) => {
        setPlaceholderValues((prev) => ({ ...prev, [key]: value }))

        setFormData((prev) => {
            let newMsg = prev.message
            if (value) {
                // Replace {{key}} with span
                newMsg = newMsg.replace(new RegExp('{{' + key + '}}', 'g'), `<span class="bg-yellow-100 px-1 rounded border border-yellow-200 text-yellow-800" data-placeholder="${key}">${value}</span>`)
                // Update existing spans
                newMsg = newMsg.replace(new RegExp(`<span\\s+[^>]*data-placeholder="${key}"[^>]*>.*?<\\/span>`, 'g'), `<span class="bg-yellow-100 px-1 rounded border border-yellow-200 text-yellow-800" data-placeholder="${key}">${value}</span>`)
            } else {
                // Revert span to {{key}} if value is empty
                newMsg = newMsg.replace(new RegExp(`<span\\s+[^>]*data-placeholder="${key}"[^>]*>.*?<\\/span>`, 'g'), `{{${key}}}`)
            }
            return { ...prev, message: newMsg }
        })
    }

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

    const processMessage = (msg: string) => {
        let processed = msg

        // 1. Replace any remaining {{key}} with values
        const matches = Array.from(new Set(msg.match(/{{(\w+)}}/g) || []))
        matches.forEach((match) => {
            const key = match.replace(/{{|}}/g, '')
            const value = placeholderValues[key]
            if (value) {
                processed = processed.replace(new RegExp(match, 'g'), value)
            }
        })

        // 2. Unwrap spans (remove tags, keep content)
        processed = processed.replace(/<span\s+[^>]*data-placeholder="(\w+)"[^>]*>(.*?)<\/span>/g, '$2')

        return processed
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSubmitStatus("idle")

        const finalMessage = processMessage(formData.message)

        try {
            const response = await fetch("/api/mail-server", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ key, ...formData, message: finalMessage }),
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

    const replyToAddr = formData.sendFrom === "noreply@programmernexus.com" ? undefined : formData.sendFrom

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 md:py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50/50 px-4 py-2 rounded-full mb-6">
                    <Send className="mr-2 h-4 w-4" />
                    Mail Server
                </Badge>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                    {!authorized ? (
                        <form onSubmit={handleKeySubmit} className="space-y-4 max-w-md mx-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-slate-800">Access Mail Server</h2>
                                <p className="text-slate-500">Enter the secret key to continue</p>
                            </div>
                            <Label htmlFor="secret" className="text-sm font-medium text-slate-700">
                                Secret Key
                            </Label>
                            <Input id="secret" type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Enter secret key" className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500" required />

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">Invalid key</div>
                            )}

                            <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-2">Unlock</Button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 lg:grid-cols-3">
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="sendFrom" className="text-sm font-medium text-slate-700">Send From</Label>
                                            <select id="sendFrom" value={formData.sendFrom} onChange={handleChange} className="w-full rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-white/60">
                                                <option value="noreply@programmernexus.com">noreply@programmernexus.com</option>
                                                <option value="hello@programmernexus.com">hello@programmernexus.com</option>
                                                <option value="support@programmernexus.com">support@programmernexus.com</option>
                                                <option value="career@programmernexus.com">career@programmernexus.com</option>
                                                <option value="sales@programmernexus.com">sales@programmernexus.com</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="to" className="text-sm font-medium text-slate-700">To (Recipient)</Label>
                                            <Input id="to" placeholder="recipient@example.com" value={formData.to} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    {formData.sendFrom === "noreply@programmernexus.com" && (
                                        <div className="space-y-2">
                                            <Label htmlFor="senderEmail" className="text-sm font-medium text-slate-700">Sender Email (for confirmation)</Label>
                                            <Input id="senderEmail" placeholder="your-email@example.com" value={formData.senderEmail} onChange={handleChange} />
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</Label>
                                        <Input id="subject" placeholder="Email subject" value={formData.subject} onChange={handleChange} required />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message</Label>
                                            <div className="flex gap-1 flex-wrap">
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => exec("bold")} title="Bold"><Bold className="h-4 w-4 text-slate-600" /></button>
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => exec("italic")} title="Italic"><Italic className="h-4 w-4 text-slate-600" /></button>
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => exec("insertHTML", "<pre><code></code></pre>")} title="Code"><Code className="h-4 w-4 text-slate-600" /></button>
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => { const url = prompt("Enter URL:", "https://") || "https://"; exec("createLink", url) }} title="Link"><LinkIcon className="h-4 w-4 text-slate-600" /></button>
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => exec("insertUnorderedList")} title="Bullet List">•</button>
                                                <button type="button" className="p-1.5 hover:bg-slate-100 rounded" onClick={() => exec("formatBlock", "H2")} title="Heading">H</button>
                                                <select onChange={(e) => { const val = e.target.value; if (val) exec('insertHTML', val); e.target.value = '' }} defaultValue="" className="ml-2 text-xs rounded border px-2 py-1 bg-white">
                                                    <option value="">+ Placeholder</option>
                                                    <option value="{{firstName}}">First Name</option>
                                                    <option value="{{company}}">Company</option>
                                                    <option value="{{projectType}}">Project Type</option>
                                                    <option value="{{deadline}}">Deadline</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div contentEditable ref={editorRef} id="message" className="min-h-[300px] p-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20" onInput={(e) => setFormData((p) => ({ ...p, message: (e.target as HTMLDivElement).innerHTML }))} suppressContentEditableWarning={true} />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                            <FileText className="h-4 w-4" /> Templates
                                        </h3>
                                        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                                            {templates.map((t) => (
                                                <div key={t.id} className="bg-white border border-slate-200 rounded-lg p-3 hover:border-emerald-300 transition-colors cursor-pointer group" onClick={() => { setFormData((p) => ({ ...p, subject: t.subject, message: t.message })); if (editorRef.current) editorRef.current.innerHTML = t.message }}>
                                                    <div className="flex justify-between items-start mb-1">
                                                        <div className="font-medium text-sm text-slate-700">{t.name}</div>
                                                        <button type="button" className="text-xs text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600" onClick={(e) => {
                                                            e.stopPropagation()
                                                            if (!confirm(`Delete template ${t.name}?`)) return
                                                            const next = templates.filter((x) => x.id !== t.id)
                                                            setTemplates(next)
                                                            localStorage.setItem("pnx_templates", JSON.stringify(next))
                                                        }}>Delete</button>
                                                    </div>
                                                    <div className="text-xs text-slate-500 truncate">{t.subject}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <button type="button" className="w-full mt-3 text-xs text-emerald-600 font-medium hover:underline" onClick={() => {
                                            const name = prompt("Save current as template (name):")
                                            if (name) {
                                                const newTpl = { id: `${name.toLowerCase().replace(/\s/g, '-')}-${Date.now()}`, name, subject: formData.subject, message: formData.message }
                                                const newTemplates = [newTpl, ...templates]
                                                setTemplates(newTemplates)
                                                localStorage.setItem("pnx_templates", JSON.stringify(newTemplates))
                                            }
                                        }}>+ Save current as template</button>
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                            <User className="h-4 w-4" /> Placeholder Values
                                        </h3>
                                        <div className="space-y-3">
                                            {detectedPlaceholders.length === 0 && (
                                                <p className="text-xs text-slate-400 italic">No placeholders detected in message.</p>
                                            )}
                                            {detectedPlaceholders.map((key) => (
                                                <div key={key}>
                                                    <Label htmlFor={key} className="text-xs text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
                                                    <div className="relative">
                                                        <User className="absolute left-2 top-2.5 h-3 w-3 text-slate-400" />
                                                        <Input
                                                            id={key}
                                                            value={placeholderValues[key] || ""}
                                                            onChange={(e) => handlePlaceholderChange(key, e.target.value)}
                                                            className="pl-7 h-8 text-sm bg-white"
                                                            placeholder={`Value for ${key}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-slate-800">Email Preview</h3>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-xs font-normal">
                                            {formData.sendFrom === "noreply@programmernexus.com" ? "Automated / No-Reply" : "Standard / Replies Enabled"}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="bg-slate-100 p-6 rounded-xl overflow-hidden">
                                    <div className="bg-white mx-auto max-w-[600px] shadow-sm rounded-lg overflow-hidden">
                                        <div className="bg-slate-50 p-5 rounded-t-lg border-b border-slate-100">
                                            <div className="font-sans text-slate-800 mb-6" dangerouslySetInnerHTML={{ __html: processMessage(formData.message) || "<span class='text-slate-400 italic'>Message content will appear here...</span>" }} />

                                            <div className="bg-white p-3 border-l-4 border-emerald-600 rounded shadow-sm mt-8 text-xs">
                                                <p className="text-slate-500 m-0">This message was sent from <strong>{formData.sendFrom}</strong>.</p>
                                                <p className="text-slate-500 m-0 mt-1">
                                                    {replyToAddr ? (
                                                        <>Replies will go to <strong>{replyToAddr}</strong>.</>
                                                    ) : (
                                                        <>This is an automated message. Please do not reply.</>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    Email sent successfully
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-red-500" />
                                    Failed to send message. Please check the key or inputs.
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                                <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white py-6 px-8 text-lg shadow-lg shadow-emerald-200">
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    {loading ? "Sending..." : "Send Message"}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button type="button" variant="ghost" onClick={() => { setAuthorized(false); setKey("") }} className="w-full sm:w-auto text-slate-500">Lock Session</Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
