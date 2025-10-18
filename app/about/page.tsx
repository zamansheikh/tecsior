import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Heart, Lightbulb, Rocket, Shield, Coffee, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              About Programmer Nexus
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              We're{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Passionate Creators
              </span>{" "}
              Building Digital Dreams
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              Founded with a vision to bridge the gap between imagination and reality, Programmer Nexus is where
              innovative ideas meet exceptional execution. We're not just developers – we're digital architects crafting
              the future, one line of code at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm"
                >
                  Our Journey
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  From Startup Dreams to{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Tech Reality
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  What started as a small team of passionate developers in a garage has grown into a full-service
                  technology company. Our journey began with a simple belief: that great software should be both
                  powerful and beautiful, complex yet intuitive.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">2019</div>
                  <div className="text-sm text-slate-600">Founded</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">150+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-rose-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Team Members</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-[3rem] blur-3xl transform rotate-6"></div>
              <Image
                src="/company_banner.png"
                alt="Programmer Nexus Team"
                width={600}
                height={500}
                className="relative rounded-[3rem] shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Target className="mr-2 h-5 w-5" />
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Drives Us{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Every Day
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Innovation First</CardTitle>
                <CardDescription className="text-slate-600">
                  We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Client-Centric</CardTitle>
                <CardDescription className="text-slate-600">
                  Your success is our success. We build lasting partnerships based on trust and mutual growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Quality Excellence</CardTitle>
                <CardDescription className="text-slate-600">
                  We never compromise on quality. Every line of code is crafted with precision and care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Agile Delivery</CardTitle>
                <CardDescription className="text-slate-600">
                  Fast, iterative development that adapts to your needs and delivers results quickly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-violet-50/80 to-purple-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Security First</CardTitle>
                <CardDescription className="text-slate-600">
                  We build with security in mind, protecting your data and users from day one.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-teal-50/80 to-emerald-50/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Team Spirit</CardTitle>
                <CardDescription className="text-slate-600">
                  Collaboration and communication are at the heart of everything we do.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Meet Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Creative Minds Behind{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                The Magic
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Our diverse team of developers, designers, and strategists brings together years of experience and a
              shared passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/devs/md._Shamsuzzaman_founder_&_lead_developer.jpg"
                  alt="Md. Shamsuzzaman"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Md. Shamsuzzaman</h3>
                <p className="text-emerald-600 font-medium mb-3">Founder & Lead Developer</p>
                <p className="text-sm text-slate-600 mb-4">
                  Visionary founder with expertise in full-stack development and leading tech innovations.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/devs/picklu_nath_designer.jpeg"
                  alt="Picklu Nath"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Picklu Nath</h3>
                <p className="text-cyan-600 font-medium mb-3">Senior Designer</p>
                <p className="text-sm text-slate-600 mb-4">
                  Creative designer specializing in UI/UX who transforms complex ideas into beautiful interfaces.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Figma
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    UI/UX
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Design Systems
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative">
                <Image
                  src="/devs/md_abdul_kayum_native_android_developer .png"
                  alt="Md. Abdul Kayum"
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Md. Abdul Kayum</h3>
                <p className="text-teal-600 font-medium mb-3">Full Stack Developer</p>
                <p className="text-sm text-slate-600 mb-4">
                  Expert developer who brings designs to life with clean, scalable, and maintainable code.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Full Stack
                  </Badge>
                </div>
              </CardContent>
            </Card>
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
              Ready to Join Our{" "}
              <span className="relative">
                Journey?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Whether you're looking to build something amazing or want to be part of our growing team, we'd love to
              hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold min-w-[220px] border-0"
                asChild
              >
                <Link href="/contact">
                  <Rocket className="mr-3 h-5 w-5" />
                  Start a Project
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/15 hover:border-white/70 backdrop-blur-sm rounded-full px-12 py-4 text-lg font-medium bg-white/5 min-w-[220px] transition-all duration-300"
                asChild
              >
                <Link href="/careers">
                  <Users className="mr-3 h-5 w-5" />
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
