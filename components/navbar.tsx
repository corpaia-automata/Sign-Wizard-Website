"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"

const services = [
  { name: "LED 3D Letter Signage", href: "/services/led-3d-letters" },
  { name: "Indoor Advertising", href: "/services/indoor-advertising" },
  { name: "Outdoor Advertising", href: "/services/outdoor-advertising" },
  { name: "Flex & UV Printing", href: "/services/printing" },
  { name: "UV Flatbed Printing", href: "/services/uv-flatbed" },
  { name: "Creative Designing", href: "/services/creative-designing" },
  { name: "Jali & Laser Cutting", href: "/services/laser-cutting" },
  { name: "Memento & Trophy", href: "/services/memento-trophy" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground ">
        {/* <div className="container mx-auto px-4"> */}
        {/* <div className="flex items-center justify-between text-sm"> */}
        {/* <div className="flex items-center gap-6"> */}
        {/* <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a> */}
        {/* <span className="hidden md:block">Serving Across India</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>Call Us: 9946 20 70 70, 9072 836 836</span>
              </p>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>

      {/* Main Navbar */}
      <nav className="bg-background py-2 border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/sign_wizard.png"
                alt="Sign Wizard Logo"
                className="h-12 sm:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors font-medium">
                About Us
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-lg shadow-lg p-4 w-64">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="text-foreground hover:text-accent transition-colors font-medium">
                Gallery
              </Link>
              <Link href="/clients" className="text-foreground hover:text-accent transition-colors font-medium">
                Our Clients
              </Link>
              {/* <Link href="/blog" className="text-foreground hover:text-accent transition-colors font-medium">
                Blog
              </Link> */}
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </Link>
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-accent hover:bg-accent/90 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-6 text-sm sm:text-base lg:text-lg text-accent-foreground"
              >
                Enquiry
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-foreground">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between text-foreground font-medium"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="flex flex-col gap-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/gallery" className="text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link href="/clients" className="text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Our Clients
                </Link>
                <Link href="/blog" className="text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/about" className="text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/contact" className="text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <Button
                  onClick={() => {
                    setQuoteModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  )
}
