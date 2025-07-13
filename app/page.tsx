import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Globe,
  Server,
  Code,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  Play,
  Sparkles,
  Rocket,
  Heart,
  Coffee,
  Target,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                    Innovative Tech Solutions
                  </Badge>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                  Crafting Digital{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      Masterpieces
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/50 via-teal-200/50 to-cyan-200/50 rounded-full transform -rotate-1"></div>
                  </span>{" "}
                  That Inspire
                </h1>

                <p className="text-xl text-slate-600 max-w-[600px] leading-relaxed">
                  We transform your boldest ideas into stunning digital experiences. From mobile apps that users love to
                  websites that convert, we're your creative tech partners in building the future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  View Our Magic
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">
                    150+
                  </div>
                  <div className="text-sm text-slate-500">Projects Delivered</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold text-teal-600 group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-slate-500">Client Satisfaction</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform">
                    5<Star className="h-6 w-6 fill-current ml-1" />
                  </div>
                  <div className="text-sm text-slate-500">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-[3rem] blur-3xl transform rotate-6"></div>
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-50">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold text-slate-700">Mobile Apps</div>
                      <div className="text-sm text-slate-500 mt-1">iOS & Android</div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-cyan-50 to-blue-50">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold text-slate-700">Web Apps</div>
                      <div className="text-sm text-slate-500 mt-1">Modern & Fast</div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-teal-50 to-emerald-50">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Server className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold text-slate-700">Backend</div>
                      <div className="text-sm text-slate-500 mt-1">Scalable APIs</div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-rose-50 to-pink-50">
                    <CardContent className="p-6 text-center">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold text-slate-700">Frontend</div>
                      <div className="text-sm text-slate-500 mt-1">Beautiful UI</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full px-4 py-2 backdrop-blur-sm">
                    <Coffee className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">Powered by passion & coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full text-base"
            >
              <Target className="mr-2 h-5 w-5" />
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Services That{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              From concept to launch, we provide comprehensive technology solutions that drive growth and innovation.
            </p>
          </div>

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
                <ul className="space-y-3 text-sm text-slate-600">
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
                <ul className="space-y-3 text-sm text-slate-600">
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
                <ul className="space-y-3 text-sm text-slate-600">
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
                <ul className="space-y-3 text-sm text-slate-600">
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
                <ul className="space-y-3 text-sm text-slate-600">
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
                <ul className="space-y-3 text-sm text-slate-600">
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
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to Build Something{" "}
              <span className="relative">
                Amazing?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Let's turn your vision into reality. Our team of passionate developers and designers is ready to bring
              your ideas to life with cutting-edge technology and creative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-6 text-lg bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm text-emerald-100">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24h</div>
                <div className="text-sm text-emerald-100">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-emerald-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
