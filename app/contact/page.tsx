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
  Github,
  Linkedin,
  Facebook,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              Get In Touch
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We'd love to hear about your project and explore how we can
              help you achieve your goals. Let's start the conversation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="h-16 w-16 mx-auto rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-medium text-slate-700">
                      First Name *
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="John"
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
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type" className="text-sm font-medium text-slate-700">
                    Project Type *
                  </Label>
                  <Input
                    id="project-type"
                    placeholder="Mobile App, Website, Backend, etc."
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium text-slate-700">
                    Budget Range
                  </Label>
                  <Input
                    id="budget"
                    placeholder="$10k - $50k"
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="min-h-[120px] rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-6 text-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MessageCircle className="mr-3 h-6 w-6 text-emerald-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Email Us</h3>
                      <p className="text-slate-600">programmernexus.com@gmail.com</p>
                      <p className="text-sm text-slate-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Call Us</h3>
                      <p className="text-slate-600">+8809638677149</p>
                      <p className="text-sm text-slate-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Visit Our Office</h3>
                      <p className="text-slate-600">306/67/1, Amirabad</p>
                      <p className="text-slate-600">Dhaka, Bangladesh</p>
                      <p className="text-sm text-slate-500 mt-1">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Business Hours</h3>
                      <p className="text-slate-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-slate-600">Saturday: 10AM - 4PM</p>
                      <p className="text-sm text-slate-500 mt-1">Pacific Standard Time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-cyan-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="https://calendly.com/programmernexus/30min"
                    className="block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl py-6 justify-start text-left">
                      <Calendar className="mr-3 h-5 w-5" />
                      <div>
                        <div className="font-semibold">Schedule a Free Consultation</div>
                        <div className="text-sm opacity-90">30-minute strategy session</div>
                      </div>
                    </Button>
                  </Link>

                  <Link
                    href="https://m.me/programmernexus"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl py-6 justify-start text-left border-2 hover:bg-slate-50 bg-transparent"
                    >
                      <MessageCircle className="mr-3 h-5 w-5 text-cyan-600" />
                      <div>
                        <div className="font-semibold text-slate-800">Live Chat Support</div>
                        <div className="text-sm text-slate-600">Get instant answers</div>
                      </div>
                    </Button>
                  </Link>

                  <Link
                    href="https://wa.me/8801735069723?text=Hello%2C%20I%27m%20interested%20in%20app%20development%20services%20from%20programmerNexus%20Pvt%20Ltd"
                    className="block w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl py-6 justify-start text-left border-2 hover:bg-slate-50 bg-transparent"
                    >
                      <Phone className="mr-3 h-5 w-5 text-teal-600" />
                      <div>
                        <div className="font-semibold text-slate-800">Request a Quote</div>
                        <div className="text-sm text-slate-600">Get project estimate</div>
                      </div>
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50/80 to-purple-50/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <CardDescription>Stay updated with our latest projects and tech insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="https://facebook.com/programmernexus"
                      className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="h-6 w-6 text-white" />
                    </Link>
                    <Link
                      href="https://t.me/programmernexus"
                      className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <MessageCircle className="h-6 w-6 text-white" />
                    </Link>
                    <Link
                      href="https://github.com/programmernexus"
                      className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/programmernexus"
                      className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="outline"
              className="border-emerald-200 text-emerald-700 bg-emerald-50/50 backdrop-blur-sm px-6 py-3 rounded-full"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Got{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Questions?
              </span>{" "}
              We Have Answers
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Project timelines vary based on complexity. Simple websites take 2-4 weeks, mobile apps 8-16 weeks,
                  and complex enterprise solutions 3-6 months. We provide detailed timelines during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What's included in your services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We provide end-to-end services including consultation, design, development, testing, deployment, and
                  ongoing support. Each project includes documentation, training, and 3 months of free support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Do you work with startups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We love working with startups and offer flexible pricing models, including equity partnerships for
                  promising ventures. We understand the unique challenges startups face.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What technologies do you use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We use modern, proven technologies including React, Next.js, React Native, Node.js, Python, and cloud
                  platforms like AWS and Azure. We choose the best tech stack for each project.
                </p>
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
              Ready to Start Your{" "}
              <span className="relative">
                Digital Journey?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Don't wait any longer. Let's discuss your project and turn your vision into a digital reality that exceeds
              expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8 py-6 text-lg bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
