import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Globe,
  Server,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Rocket,
  Target,
  Heart,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Target className="mr-2 h-5 w-5" />
              Our Services
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Tech Solutions
              </span>{" "}
              for Every Need
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              From mobile apps to complex backend systems, we deliver cutting-edge solutions that drive your business
              forward. Explore our comprehensive range of services designed to transform your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mobile Development */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-emerald-700 transition-colors">
                  Mobile App Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Native iOS & Android apps that deliver exceptional user experiences and drive engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                    React Native & Flutter Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                    Native iOS (Swift) & Android (Kotlin)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                    App Store Optimization & Publishing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                    Push Notifications & Analytics
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-cyan-700 transition-colors">Web Development</CardTitle>
                <CardDescription className="text-slate-600">
                  Modern, responsive websites and web applications built with cutting-edge technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-3 flex-shrink-0" />
                    React, Next.js, Vue.js Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-3 flex-shrink-0" />
                    Progressive Web Apps (PWA)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-3 flex-shrink-0" />
                    E-commerce & CMS Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-3 flex-shrink-0" />
                    SEO Optimization & Performance
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-teal-50/80 to-emerald-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-teal-700 transition-colors">
                  Backend Development
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Scalable server-side solutions, APIs, and database architecture for robust applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                    Node.js, Python, Java Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                    RESTful & GraphQL APIs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                    Cloud Infrastructure (AWS, Azure)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                    Database Design & Optimization
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-rose-700 transition-colors">UI/UX Design</CardTitle>
                <CardDescription className="text-slate-600">
                  Beautiful, intuitive designs that create memorable user experiences and drive conversions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                    User Research & Wireframing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                    Prototype & Interactive Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                    Brand Identity & Visual Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-rose-500 mr-3 flex-shrink-0" />
                    Usability Testing & Optimization
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* DevOps & Cloud */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-orange-700 transition-colors">DevOps & Cloud</CardTitle>
                <CardDescription className="text-slate-600">
                  Streamlined deployment, monitoring, and scaling solutions for optimal performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                    CI/CD Pipeline Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                    Docker & Kubernetes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                    Monitoring & Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                    Security & Compliance
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Consulting */}
            <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-violet-50/80 to-purple-50/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-violet-700 transition-colors">Tech Consulting</CardTitle>
                <CardDescription className="text-slate-600">
                  Strategic technology guidance and expert advice to accelerate your digital transformation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-violet-500 mr-3 flex-shrink-0" />
                    Technology Strategy & Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-violet-500 mr-3 flex-shrink-0" />
                    Architecture Review & Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-violet-500 mr-3 flex-shrink-0" />
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-violet-500 mr-3 flex-shrink-0" />
                    Team Training & Mentoring
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white rounded-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Our Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              How We{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Transform Ideas
              </span>{" "}
              Into Reality
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Our proven methodology ensures every project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-slate-600">
                We dive deep into understanding your business goals, target audience, and technical requirements.
              </p>
            </div>

            <div className="text-center group">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-slate-600">
                Our designers create beautiful, intuitive interfaces that provide exceptional user experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-slate-600">
                Our expert developers bring designs to life with clean, scalable, and maintainable code.
              </p>
            </div>

            <div className="text-center group">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-slate-600">
                We deploy your solution and provide ongoing support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Transform Your{" "}
              <span className="relative">
                Business?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Let's discuss your project and explore how our comprehensive tech solutions can drive your business
              forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold min-w-[220px] border-0"
                asChild
              >
                <Link href="/contact">
                  <Heart className="mr-3 h-5 w-5" />
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/15 hover:border-white/70 backdrop-blur-sm rounded-full px-12 py-4 text-lg font-medium bg-white/5 min-w-[220px] transition-all duration-300"
                asChild
              >
                <Link href="/portfolio">
                  <Star className="mr-3 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
