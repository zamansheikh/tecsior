import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  Mail,
  Phone,
  ArrowRight,
  Calendar,
  Shield,
  Gavel,
} from "lucide-react"

export default function TermsOfServicePage() {
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
              <Scale className="mr-2 h-5 w-5" />
              Terms of Service
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Terms &{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services. By accessing our website and
              services, you agree to be bound by these terms.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
                    <CardDescription>Agreement to use our services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  By accessing and using Programmer Nexus's website and services, you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-700 text-sm">
                      These terms apply to all visitors, users, and others who access or use our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Our Services</CardTitle>
                    <CardDescription>What we provide to our clients</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Programmer Nexus provides software development services including but not limited to:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Web application development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Mobile application development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Backend and API development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>UI/UX design services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Technical consulting and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <Gavel className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">User Responsibilities</CardTitle>
                    <CardDescription>Your obligations when using our services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">You agree to:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Use our services only for lawful purposes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Respect intellectual property rights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Maintain confidentiality of login credentials</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">You agree NOT to:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Use our services for illegal or unauthorized purposes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Attempt to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Interfere with or disrupt our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Violate any applicable laws or regulations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Payment Terms</CardTitle>
                    <CardDescription>Billing and payment information</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Payment terms are specified in individual project contracts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Invoices are typically due within 30 days of receipt</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Late payments may incur additional fees</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>All prices are in USD unless otherwise specified</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Refunds are handled on a case-by-case basis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
                    <CardDescription>Important legal disclaimers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div className="text-amber-700 text-sm space-y-2">
                      <p>
                        Our services are provided "as is" without any warranties, express or implied. We shall not be
                        liable for any indirect, incidental, special, consequential, or punitive damages.
                      </p>
                      <p>
                        Our total liability shall not exceed the amount paid by you for the specific service that gave
                        rise to the claim.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-emerald-600" />
                  Questions About These Terms?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl">
                    <Mail className="mr-2 h-4 w-4" />
                    legal@programmernexus.com
                  </Button>
                  <Button variant="outline" className="rounded-xl border-2 bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    +1 (555) 123-4567
                  </Button>
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
              Ready to Get{" "}
              <span className="relative">
                Started?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Now that you understand our terms, let's discuss your project and bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-4 text-lg font-semibold min-w-[200px]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 text-lg bg-transparent min-w-[200px] transition-all duration-300"
              >
                <Shield className="mr-2 h-5 w-5" />
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
