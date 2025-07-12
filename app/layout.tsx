import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Programmer Nexus - Professional Tech Solutions",
  description:
    "Transform your ideas into digital reality with innovative mobile apps, stunning websites, and robust backend solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-emerald-100/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Programmer Nexus
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
              Get Started
            </Button>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">Programmer Nexus</span>
                </Link>
                <p className="text-slate-400 max-w-xs leading-relaxed">
                  Transforming ideas into digital reality with innovative technology solutions that inspire and engage.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Services</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <Link href="/services" className="hover:text-emerald-400 transition-colors">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-emerald-400 transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-emerald-400 transition-colors">
                      Backend Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-emerald-400 transition-colors">
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>
                    <Link href="/about" className="hover:text-emerald-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-emerald-400 transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Contact</h3>
                <ul className="space-y-3 text-slate-400">
                  <li>hello@programmernexus.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>San Francisco, CA</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Programmer Nexus. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0 text-sm text-slate-400">
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
