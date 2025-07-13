import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, Eye, Database, Users, Mail, Phone, ArrowRight, CheckCircle, Calendar } from "lucide-react"

export default function PrivacyPolicyPage() {
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
              <Shield className="mr-2 h-5 w-5" />
              Privacy Policy
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Privacy{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Matters to Us
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-[800px] mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. This
              policy explains how we collect, use, and safeguard your data.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Information We Collect */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Information We Collect</CardTitle>
                    <CardDescription>The types of information we gather from our users</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Name, email address, and contact information when you fill out forms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Company information and project details when requesting services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Communication preferences and feedback</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">Technical Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>IP address, browser type, and device information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Website usage data and analytics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                    <CardDescription>The purposes for which we process your data</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>To provide and improve our services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>To communicate with you about projects and services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>To send you relevant updates and marketing communications (with consent)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>To analyze website usage and improve user experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>To comply with legal obligations and protect our rights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Data Protection & Security</CardTitle>
                    <CardDescription>How we keep your information safe</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>SSL encryption for data transmission</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Secure servers and regular security updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Limited access to personal data on a need-to-know basis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits and monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Your Rights</CardTitle>
                    <CardDescription>What you can do with your personal data</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">You have the following rights regarding your personal information:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Access:</strong> Request a copy of your personal data
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Correction:</strong> Update or correct inaccurate information
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Deletion:</strong> Request deletion of your personal data
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Portability:</strong> Receive your data in a structured format
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-emerald-600" />
                  Questions About Privacy?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please
                  contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl">
                    <Mail className="mr-2 h-4 w-4" />
                    privacy@programmernexus.com
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
              Ready to Work{" "}
              <span className="relative">
                Together?
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/20 rounded-full transform rotate-1"></div>
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-[700px] mx-auto leading-relaxed">
              Now that you understand how we protect your privacy, let's discuss your project and create something
              amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-10 py-4 text-lg font-semibold min-w-[200px]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 text-lg bg-transparent min-w-[200px] transition-all duration-300"
              >
                <Shield className="mr-2 h-5 w-5" />
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
