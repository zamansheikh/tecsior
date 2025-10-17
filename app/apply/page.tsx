"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Calendar,
    CheckCircle,
    Heart,
    Sparkles,
    ArrowRight,
    Briefcase,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ApplyPage() {
    const searchParams = useSearchParams()
    const positionId = searchParams.get("position")

    const positions = [
        { id: "1", title: "Senior Full-Stack Developer", department: "Engineering" },
        { id: "2", title: "UI/UX Designer", department: "Design" },
        { id: "3", title: "Digital Marketing Specialist", department: "Marketing" },
        { id: "4", title: "Junior React Developer", department: "Engineering" },
        { id: "5", title: "Business Development Executive", department: "Sales & Business" },
        { id: "6", title: "DevOps Engineer", department: "Infrastructure" },
    ]

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: positionId || "",
        experience: "",
        portfolio: "",
        cvLink: "",
        coverLetter: "",
    })
    const [loading, setLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        // Convert hyphenated IDs to camelCase
        const key = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase()) as keyof typeof formData
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSubmitStatus("idle")

        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    position: positionId || "",
                    experience: "",
                    portfolio: "",
                    cvLink: "",
                    coverLetter: "",
                })
                setTimeout(() => setSubmitStatus("idle"), 5000)
            } else {
                setSubmitStatus("error")
                setTimeout(() => setSubmitStatus("idle"), 5000)
            }
        } catch (error) {
            console.error("Form submission error:", error)
            setSubmitStatus("error")
            setTimeout(() => setSubmitStatus("idle"), 5000)
        } finally {
            setLoading(false)
        }
    }

    const selectedPosition = positions.find((p) => p.id === formData.position)

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            {/* Hero Section */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <Badge
                            variant="outline"
                            className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full text-base"
                        >
                            <Briefcase className="mr-2 h-5 w-5" />
                            Join Our Team
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Apply to{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Programmer Nexus
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
                            We're excited to learn about your skills, experience, and passion. Submit your application and join our innovative team!
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-3xl px-4 md:px-6">
                    <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                        <CardHeader className="text-center pb-8 border-b border-slate-100">
                            <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                                <Send className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-2xl">Application Form</CardTitle>
                            <CardDescription className="text-base">
                                Fill out the form below with your information and we'll review your application
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Position Selection */}
                                <div className="space-y-2 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                    <Label htmlFor="position" className="text-sm font-medium text-slate-700">
                                        Position Applied For *
                                    </Label>
                                    <select
                                        id="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-slate-900"
                                    >
                                        <option value="">-- Select a Position --</option>
                                        {positions.map((pos) => (
                                            <option key={pos.id} value={pos.id}>
                                                {pos.title} ({pos.department})
                                            </option>
                                        ))}
                                    </select>
                                    {selectedPosition && (
                                        <p className="text-sm text-emerald-700 font-medium mt-2">
                                            ✓ You're applying for: <strong>{selectedPosition.title}</strong>
                                        </p>
                                    )}
                                </div>

                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name" className="text-sm font-medium text-slate-700">
                                                First Name *
                                            </Label>
                                            <Input
                                                id="first-name"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name" className="text-sm font-medium text-slate-700">
                                                Last Name *
                                            </Label>
                                            <Input
                                                id="last-name"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+880 96 3867 7149"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>

                                {/* Professional Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Professional Information</h3>

                                    <div className="space-y-2">
                                        <Label htmlFor="experience" className="text-sm font-medium text-slate-700">
                                            Years of Experience *
                                        </Label>
                                        <Input
                                            id="experience"
                                            placeholder="e.g., 5 years"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            required
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="portfolio" className="text-sm font-medium text-slate-700">
                                            Portfolio/Website URL
                                        </Label>
                                        <Input
                                            id="portfolio"
                                            type="url"
                                            placeholder="https://yourportfolio.com"
                                            value={formData.portfolio}
                                            onChange={handleChange}
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cv-link" className="text-sm font-medium text-slate-700">
                                            CV/Resume Link *
                                        </Label>
                                        <Input
                                            id="cv-link"
                                            type="url"
                                            placeholder="https://drive.google.com/file/... or https://example.com/resume.pdf"
                                            value={formData.cvLink}
                                            onChange={handleChange}
                                            required
                                            className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                        <p className="text-xs text-slate-500">
                                            You can use Google Drive, Dropbox, or any cloud storage link. Make sure the link is accessible.
                                        </p>
                                    </div>
                                </div>

                                {/* Cover Letter */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-slate-800">Additional Information</h3>

                                    <div className="space-y-2">
                                        <Label htmlFor="cover-letter" className="text-sm font-medium text-slate-700">
                                            Cover Letter / Message *
                                        </Label>
                                        <Textarea
                                            id="cover-letter"
                                            placeholder="Tell us why you're interested in this position, what excites you about Programmer Nexus, and what unique value you can bring to our team..."
                                            value={formData.coverLetter}
                                            onChange={handleChange}
                                            required
                                            className="min-h-[150px] rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>

                                {submitStatus === "success" && (
                                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold">✓ Application submitted successfully!</p>
                                            <p className="text-sm mt-1">We've received your application and will review it shortly. Check your email for confirmation.</p>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                                        ✕ Failed to submit application. Please try again or contact us at programmernexus.com@gmail.com
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                                >
                                    <Sparkles className="mr-2 h-5 w-5" />
                                    {loading ? "Submitting..." : "Submit Application"}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>

                                <p className="text-xs text-slate-500 text-center">
                                    By submitting this application, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Help Card */}
                    <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                <MessageCircle className="mr-3 h-6 w-6 text-cyan-600" />
                                Questions?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 mb-4">
                                If you have any questions about the application process or the position, feel free to reach out to us:
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="mailto:programmernexus.com@gmail.com?subject=Question about Application"
                                    className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
                                >
                                    <Mail className="h-5 w-5" />
                                    programmernexus.com@gmail.com
                                </a>
                                <a href="tel:+8809638677149" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium">
                                    <Phone className="h-5 w-5" />
                                    +880 963 8677149
                                </a>
                                <Link href="/careers" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium">
                                    <Briefcase className="h-5 w-5" />
                                    Back to Careers Page
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
