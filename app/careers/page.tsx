import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Heart, Target, Zap, Award, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
    const positions = [
        {
            id: 1,
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "5+ years",
            description: "We're looking for an experienced full-stack developer to lead our technical initiatives and mentor junior developers.",
            skills: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL"],
        },
        {
            id: 2,
            title: "UI/UX Designer",
            department: "Design",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "3+ years",
            description: "Join our design team to create beautiful, user-centered digital experiences that delight our clients.",
            skills: ["Figma", "UI Design", "User Research", "Prototyping", "Design Systems"],
        },
        {
            id: 3,
            title: "Digital Marketing Specialist",
            department: "Marketing",
            location: "Dhaka, Bangladesh (Remote)",
            type: "Full-time",
            experience: "2+ years",
            description: "Help us grow and reach new audiences with strategic digital marketing campaigns and innovative strategies.",
            skills: ["SEO", "Content Marketing", "Social Media", "Analytics", "Paid Advertising"],
        },
        {
            id: 4,
            title: "Junior React Developer",
            department: "Engineering",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "1+ years",
            description: "Start your career with us! We're looking for passionate junior developers to grow with our team.",
            skills: ["React", "JavaScript", "CSS", "Git", "Rest APIs"],
        },
        {
            id: 5,
            title: "Business Development Executive",
            department: "Sales & Business",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "2+ years",
            description: "Drive growth by building strong client relationships and identifying new business opportunities.",
            skills: ["Sales", "Negotiation", "Client Relations", "CRM", "Strategy"],
        },
        {
            id: 6,
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Dhaka, Bangladesh (Remote)",
            type: "Full-time",
            experience: "3+ years",
            description: "Build and maintain our infrastructure while ensuring security, reliability, and performance.",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
        },
    ]

    const values = [
        {
            icon: Heart,
            title: "Passion-Driven",
            description: "We're passionate about what we do and love creating exceptional digital solutions.",
        },
        {
            icon: Zap,
            title: "Innovation First",
            description: "We embrace new technologies and constantly push the boundaries of what's possible.",
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "We believe in the power of collaboration and supporting each other's growth.",
        },
        {
            icon: Target,
            title: "Excellence",
            description: "We're committed to delivering excellence in everything we do, every single day.",
        },
        {
            icon: Award,
            title: "Growth Mindset",
            description: "We invest in our team's development with training, mentorship, and career growth opportunities.",
        },
        {
            icon: CheckCircle,
            title: "Work-Life Balance",
            description: "We value our team's well-being and believe in maintaining a healthy work-life balance.",
        },
    ]

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
                            Careers at Programmer Nexus
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Join Our{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Talented Team
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
                            We're on a mission to revolutionize digital innovation. If you're passionate about technology, creative problem-solving, and making an impact, we'd love to meet you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:shadow-2xl transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold"
                            >
                                Explore Positions
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-full px-12 py-4 text-lg font-semibold"
                            >
                                Learn More About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Culture Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Our Culture & Values
                            </h2>
                            <p className="text-xl text-slate-600">
                                We believe that great work starts with a great culture. Here's what makes Programmer Nexus special.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <Card
                                        key={index}
                                        className="bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 rounded-2xl"
                                    >
                                        <CardHeader>
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                                                <Icon className="h-7 w-7 text-emerald-600" />
                                            </div>
                                            <CardTitle className="text-emerald-900">{value.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Open Positions
                            </h2>
                            <p className="text-xl text-slate-600">
                                We're actively hiring talented individuals to join our growing team. Check out our current openings.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {positions.map((position) => (
                                <Card
                                    key={position.id}
                                    className="bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                                >
                                    <CardHeader className="pb-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="space-y-3 flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                                    <CardTitle className="text-2xl text-emerald-900">{position.title}</CardTitle>
                                                    <Badge variant="outline" className="border-teal-200 text-teal-700 bg-teal-50 w-fit">
                                                        {position.type}
                                                    </Badge>
                                                </div>
                                                <CardDescription className="text-slate-600 font-medium">
                                                    {position.department}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <p className="text-slate-700 leading-relaxed">{position.description}</p>

                                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-emerald-600" />
                                                <span>{position.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-emerald-600" />
                                                <span>{position.experience}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 pt-4 border-t border-emerald-100">
                                            <p className="text-sm font-semibold text-emerald-900">Required Skills:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {position.skills.map((skill, idx) => (
                                                    <Badge
                                                        key={idx}
                                                        variant="secondary"
                                                        className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <Link href="/contact" className="block pt-4">
                                            <Button
                                                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-300 rounded-xl py-6 text-base font-semibold group"
                                            >
                                                Apply Now
                                                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Why Join Programmer Nexus?
                            </h2>
                            <p className="text-xl text-slate-600">
                                Competitive benefits, continuous learning, and the opportunity to work on impactful projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="bg-white border-emerald-100 rounded-2xl">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                                        <Award className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <CardTitle className="text-emerald-900">Competitive Compensation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">Competitive salary, performance bonuses, and benefits package tailored to attract top talent.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white border-emerald-100 rounded-2xl">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                                        <Zap className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <CardTitle className="text-emerald-900">Professional Growth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">Continuous learning opportunities, training programs, and mentorship from industry experts.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white border-emerald-100 rounded-2xl">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                                        <Users className="h-6 w-6 text-cyan-600" />
                                    </div>
                                    <CardTitle className="text-emerald-900">Collaborative Environment</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">Work with talented, passionate individuals who share your commitment to excellence.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white border-emerald-100 rounded-2xl">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                                        <Heart className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <CardTitle className="text-emerald-900">Health & Wellness</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600">Comprehensive health insurance, wellness programs, and flexible work arrangements.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Ready to Join the{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Nexus?
                            </span>
                        </h2>

                        <p className="text-xl text-slate-600 max-w-[700px] mx-auto leading-relaxed">
                            If you don't see a position that fits but believe you'd be a great addition to our team, we'd still love to hear from you!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white hover:shadow-2xl transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold min-w-[220px]"
                                asChild
                            >
                                <Link href="/contact">
                                    <Users className="mr-3 h-5 w-5" />
                                    Send Your Resume
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-full px-12 py-4 text-lg font-semibold"
                            >
                                Learn About Our Culture
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
