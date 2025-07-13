import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Users,
  Zap,
  Target,
  Heart,
  Smartphone,
  Globe,
  Server,
  Code,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
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
              <Star className="mr-2 h-5 w-5" />
              Our Portfolio
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Projects That{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Inspire & Deliver
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              Discover our latest work and see how we've helped businesses transform their ideas into successful digital
              products that users love and stakeholders celebrate.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Target className="mr-2 h-5 w-5" />
              Featured Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Latest{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>

          <div className="grid gap-12">
            {/* Project 1 - E-commerce App */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="ShopEasy E-commerce App"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">ShopEasy</h3>
                      <p className="text-emerald-600 font-medium">E-commerce Mobile App</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A comprehensive e-commerce mobile application featuring advanced product search, secure payment
                    processing, real-time inventory management, and personalized shopping experiences. Built with React
                    Native for cross-platform compatibility.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">50K+</div>
                      <div className="text-sm text-slate-500">Downloads</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">4.8★</div>
                      <div className="text-sm text-slate-500">App Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">300%</div>
                      <div className="text-sm text-slate-500">Sales Increase</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 2 - Healthcare Platform */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="p-8 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">MediConnect</h3>
                      <p className="text-cyan-600 font-medium">Healthcare Platform</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A comprehensive telemedicine platform connecting patients with healthcare providers through secure
                    video consultations, appointment scheduling, prescription management, and health record tracking.
                    HIPAA-compliant with enterprise-grade security.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">WebRTC</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Azure</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">10K+</div>
                      <div className="text-sm text-slate-500">Patients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-slate-500">Doctors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">99.9%</div>
                      <div className="text-sm text-slate-500">Uptime</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Case Study
                    </Button>
                  </div>
                </div>
                <div className="relative overflow-hidden order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="MediConnect Healthcare Platform"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Card>

            {/* Project 3 - FinTech Solution */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-teal-50/80 to-emerald-50/80 backdrop-blur-sm">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="PaySecure FinTech API"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">PaySecure</h3>
                      <p className="text-teal-600 font-medium">FinTech API Platform</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A robust payment processing API with advanced security features, real-time transaction monitoring,
                    fraud detection, and comprehensive analytics. Handles millions of transactions with 99.99% uptime
                    and bank-level security.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">GCP</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-teal-600">1M+</div>
                      <div className="text-sm text-slate-500">Transactions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">$50M+</div>
                      <div className="text-sm text-slate-500">Processed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600">0.01%</div>
                      <div className="text-sm text-slate-500">Fraud Rate</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View API
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Documentation
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* More Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Zap className="mr-2 h-5 w-5" />
              More Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Creative Solutions
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Additional Projects */}
            {[
              {
                title: "EduLearn",
                category: "EdTech Platform",
                description: "Interactive learning platform with video courses, quizzes, and progress tracking.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Vue.js", "Laravel", "MySQL"],
                color: "from-rose-500 to-pink-500",
                bgColor: "from-rose-50/80 to-pink-50/80",
              },
              {
                title: "FoodieHub",
                category: "Food Delivery App",
                description: "On-demand food delivery app with real-time tracking and payment integration.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Flutter", "Firebase", "Stripe"],
                color: "from-orange-500 to-amber-500",
                bgColor: "from-orange-50/80 to-amber-50/80",
              },
              {
                title: "TaskFlow",
                category: "Project Management",
                description: "Collaborative project management tool with team communication and file sharing.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React", "Express", "Socket.io"],
                color: "from-violet-500 to-purple-500",
                bgColor: "from-violet-50/80 to-purple-50/80",
              },
              {
                title: "FitTracker",
                category: "Health & Fitness",
                description: "Personal fitness tracking app with workout plans and nutrition monitoring.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Swift", "HealthKit", "CoreData"],
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50/80 to-emerald-50/80",
              },
              {
                title: "CryptoWallet",
                category: "Blockchain App",
                description: "Secure cryptocurrency wallet with multi-currency support and trading features.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React Native", "Web3", "Solidity"],
                color: "from-indigo-500 to-blue-500",
                bgColor: "from-indigo-50/80 to-blue-50/80",
              },
              {
                title: "SmartHome",
                category: "IoT Dashboard",
                description: "Comprehensive IoT dashboard for smart home automation and monitoring.",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Angular", "MQTT", "InfluxDB"],
                color: "from-cyan-500 to-teal-500",
                bgColor: "from-cyan-50/80 to-teal-50/80",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${project.bgColor} backdrop-blur-sm`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    >
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-slate-500">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white rounded-full flex-1`}
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full bg-transparent">
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Ready to Create Your{" "}
              <span className="relative">
                Success Story?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Let's discuss your project and explore how we can help you build something amazing that your users will
              love.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold min-w-[220px] border-0"
                asChild
              >
                <Link href="/contact">
                  <Heart className="mr-3 h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/15 hover:border-white/70 backdrop-blur-sm rounded-full px-12 py-4 text-lg font-medium bg-white/5 min-w-[220px] transition-all duration-300"
                asChild
              >
                <Link href="/services">
                  <Users className="mr-3 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
