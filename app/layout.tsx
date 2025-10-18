import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Programmer Nexus - Professional Tech Solutions",
  description:
    "Transform your ideas into digital reality with innovative mobile apps, stunning websites, and robust backend solutions.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-emerald-100/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/programmernexus-logo.png"
                  alt="Programmer Nexus Logo"
                  className="h-10 w-10 rounded-2xl"
                />
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Programmer Nexus
              </span>
            </Link>

            {/* Desktop Navigation */}
            <Navigation />

            <div className="flex items-center space-x-4">
              {/* Desktop CTA Button */}
              <Link href="https://calendly.com/programmernexus/30min">
                <Button className="hidden md:flex bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
                  Get Started
                </Button>
              </Link>

              {/* Mobile Navigation */}
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-3">
                  <img
                    src="/programmernexus-logo.png"
                    alt="Programmer Nexus Logo"
                    className="h-10 w-10 rounded-2xl shadow-lg"
                  />
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
                    <Link href="/culture" className="hover:text-emerald-400 transition-colors">
                      Culture
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
                    <Link href="/careers" className="hover:text-emerald-400 transition-colors">
                      Careers
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
                  <li>programmernexus.com@gmail.com</li>
                  <li>+8809638677149</li>
                  <li>
                    <Link href="https://www.linkedin.com/company/programmernexus" className="hover:text-emerald-400 transition-colors">
                      LinkedIn
                    </Link>
                  </li>
                  <li>306/67/1, Amirabad</li>
                  <li>Bangladesh</li>
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
