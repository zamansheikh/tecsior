"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathname = usePathname()

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium transition-all duration-300 relative group ${isActive(item.href)
                            ? "text-emerald-600"
                            : "text-slate-700 hover:text-emerald-600"
                            }`}
                    >
                        {item.label}
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                        ></span>
                    </Link>
                ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col space-y-6 mt-6">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <img
                                src="/programmernexus-logo.png"
                                alt="Programmer Nexus Logo"
                                className="h-8 w-8 rounded-xl shadow-lg"
                            />
                            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Programmer Nexus
                            </span>
                        </Link>

                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-lg font-medium transition-colors py-2 border-b border-slate-100 ${isActive(item.href)
                                        ? "text-emerald-600 border-emerald-200 bg-emerald-50/50 px-3 rounded-md"
                                        : "text-slate-700 hover:text-emerald-600"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="pt-6">
                            <Link href="https://calendly.com/programmernexus/30min" className="block">
                                <Button className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-3">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}