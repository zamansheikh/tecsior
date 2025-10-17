import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Lightbulb, Award, Zap, Coffee, Smile, Code, Rocket, Globe, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CulturePage() {
    const coreValues = [
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We constantly push boundaries and embrace new technologies to create cutting-edge solutions that shape the future of digital.",
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We genuinely care about our work, our clients, and our team. Passion drives us to excellence in everything we do.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Teamwork makes the dream work. We believe in open communication, knowledge sharing, and supporting each other's growth.",
        },
        {
            icon: Target,
            title: "Excellence",
            description: "We're committed to delivering outstanding quality. We don't settle for good enough – we aim for extraordinary.",
        },
        {
            icon: Globe,
            title: "Integrity",
            description: "We operate with transparency, honesty, and strong ethical principles in all our dealings and relationships.",
        },
        {
            icon: Zap,
            title: "Agility",
            description: "We adapt quickly to changes, embrace feedback, and continuously improve our processes and solutions.",
        },
    ]

    const teamBenefits = [
        {
            icon: Coffee,
            title: "Flexible Schedule",
            description: "We trust our team. Work flexibly during core hours and maintain a healthy work-life balance.",
            color: "from-amber-100 to-orange-100",
            textColor: "text-amber-600",
        },
        {
            icon: Award,
            title: "Professional Growth",
            description: "Annual training budget, workshops, conferences, and mentorship from industry experts.",
            color: "from-purple-100 to-pink-100",
            textColor: "text-purple-600",
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Comprehensive health insurance, gym membership, mental health support, and wellness programs.",
            color: "from-red-100 to-rose-100",
            textColor: "text-red-600",
        },
        {
            icon: Code,
            title: "Latest Technology",
            description: "Work with modern tech stack. We invest in the best tools and technologies for our team.",
            color: "from-blue-100 to-cyan-100",
            textColor: "text-blue-600",
        },
        {
            icon: Rocket,
            title: "Career Advancement",
            description: "Clear career paths, promotion opportunities, and leadership development programs.",
            color: "from-green-100 to-emerald-100",
            textColor: "text-green-600",
        },
        {
            icon: Smile,
            title: "Fun & Culture",
            description: "Team outings, celebration bonuses, creative freedom, and a vibrant, inclusive workplace.",
            color: "from-yellow-100 to-lime-100",
            textColor: "text-yellow-600",
        },
    ]

    const teamMembers = [
        {
            name: "Zaman Sheikh",
            role: "Founder & Lead Developer",
            specialty: "Full-Stack Development",
            image: "👨‍💼",
        },
        {
            name: "Team Members",
            role: "Various Roles",
            specialty: "Engineering & Design",
            image: "👥",
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
                            <Heart className="mr-2 h-5 w-5" />
                            Our Culture & Values
                        </Badge>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            The{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Programmer Nexus
                            </span>{" "}
                            Way
                        </h1>

                        <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
                            We're not just a company – we're a community of passionate innovators who believe in creating extraordinary digital experiences while building a workplace where everyone thrives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Our Core Values
                            </h2>
                            <p className="text-xl text-slate-600">
                                These values guide every decision we make and every interaction we have.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {coreValues.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <Card
                                        key={index}
                                        className="bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 rounded-2xl group"
                                    >
                                        <CardHeader>
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="h-7 w-7 text-emerald-600" />
                                            </div>
                                            <CardTitle className="text-emerald-900 text-xl">{value.title}</CardTitle>
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

            {/* Why Join Us Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Why Join Our Team?
                            </h2>
                            <p className="text-xl text-slate-600">
                                We offer more than just a job – we offer an opportunity to grow, innovate, and make a real impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamBenefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <Card
                                        key={index}
                                        className={`bg-gradient-to-br ${benefit.color} border-0 hover:shadow-lg transition-all duration-300 rounded-2xl`}
                                    >
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center mb-4">
                                                <Icon className={`h-6 w-6 ${benefit.textColor}`} />
                                            </div>
                                            <CardTitle className="text-slate-900">{benefit.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Environment Section */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Our Work Environment
                            </h2>
                            <p className="text-xl text-slate-600">
                                We've created a workplace where creativity thrives and innovation happens every day.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                                <CardHeader>
                                    <Sparkles className="h-8 w-8 text-emerald-600 mb-2" />
                                    <CardTitle className="text-2xl">Collaborative Culture</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-700">
                                        We believe in open communication and teamwork. Our team members freely share ideas, feedback, and knowledge. We celebrate wins together and learn from challenges as one.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Open-door policy with management</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Regular team meetings and brainstorming sessions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Peer reviews and constructive feedback culture</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Team building activities and celebrations</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
                                <CardHeader>
                                    <Rocket className="h-8 w-8 text-cyan-600 mb-2" />
                                    <CardTitle className="text-2xl">Innovation Hub</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-700">
                                        We encourage experimentation and creative problem-solving. Your ideas matter, and we invest in tools and time to help them come to life.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="text-cyan-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Time for personal projects and R&D</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-cyan-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Access to latest technologies and tools</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-cyan-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Support for learning new technologies</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-cyan-600 font-bold mt-1">✓</span>
                                            <span className="text-slate-700">Regular hackathons and innovation challenges</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="space-y-12">
                        <div className="text-center space-y-4 max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-slate-600">
                                Talented professionals working together to create digital excellence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                                    <CardHeader className="text-center">
                                        <div className="text-7xl mb-4">{member.image}</div>
                                        <CardTitle className="text-2xl text-emerald-900">{member.name}</CardTitle>
                                        <CardDescription className="text-base text-teal-600 font-semibold">{member.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-center text-slate-600">{member.specialty}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Diversity & Inclusion */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Diversity & Inclusion
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                We believe that diverse perspectives drive innovation. We're committed to creating an inclusive workplace where everyone feels valued, respected, and empowered to succeed. We celebrate differences and believe that our team's diversity is our greatest strength.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
                                <div className="text-4xl mb-3">🌍</div>
                                <h3 className="font-semibold text-emerald-900 mb-2">Global Mindset</h3>
                                <p className="text-slate-700">We work with clients worldwide and embrace different cultures.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl">
                                <div className="text-4xl mb-3">♾️</div>
                                <h3 className="font-semibold text-teal-900 mb-2">Equal Opportunity</h3>
                                <p className="text-slate-700">We provide equal opportunities regardless of background.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="font-semibold text-cyan-900 mb-2">Inclusive Workplace</h3>
                                <p className="text-slate-700">We foster an environment where everyone belongs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                            Ready to Be Part of{" "}
                            <span className="relative">
                                Our Journey?
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
                            </span>
                        </h2>
                        <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
                            Join a team where innovation thrives, collaboration flourishes, and your work truly matters. Let's build something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <Link href="/careers">
                                <Button
                                    size="lg"
                                    className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold"
                                >
                                    View Open Positions
                                    <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/apply">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-6 text-lg bg-transparent"
                                >
                                    Send Your Resume
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
