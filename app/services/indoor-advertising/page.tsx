"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export default function IndoorAdvertisingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/indout/mix.jpg"
          alt="Indoor Advertising"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Indoor Advertising</h1>
          <p className="text-xl max-w-2xl mx-auto">Transform your interior spaces with impactful signage solutions</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is Indoor Signage?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Custom indoor signs can enhance the customer experience, providing information, guidance, and inspiration
                through reception signage, wall graphics, or safety signs. Our indoor advertising solutions are designed
                to create memorable brand experiences within your commercial space.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From elegant reception area displays to vibrant wall graphics and informative directional signage, we
                create indoor signs that not only look stunning but also serve practical purposes, improving navigation
                and reinforcing your brand identity.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/indout/mix.jpg"
                alt="Indoor Signage Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Industries We Serve
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-black/90 leading-relaxed">
                From real estate, healthcare, to corporate industries, we serve all industry types with top-notch quality large format printing services. No matter your business type, we maximize your brand's presence with impactful prints.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail & Shopping Malls", image: "/indoor-retail-advertising-signage.jpg" },
              { name: "Restaurants & Cafes", image: "/restuarent.jpg" },
              { name: "Corporate Offices", image: "/corporate.jpg" },
              { name: "Healthcare & Clinics", image: "/modern-office-exterior.png" },
              { name: "Hotels & Hospitality", image: "/outdoor-building-signage-corporate.jpg" },
              { name: "Educational Institutions", image: "/industries/education.webp" },
              { name: "Fitness Centers & Gyms", image: "/indoor-retail-advertising-signage.jpg" },
              { name: "Real Estate & Builders", image: "/outdoor-building-signage-corporate.jpg" },
              { name: "Automotive Services", image: "/industrial-signage-manufacturing-machinery.jpg" },
              { name: "Banking & Finance", image: "/corporate.jpg" },
              { name: "Event Management", image: "/large-format-banner-printing-outdoor-promotional-e.jpg" },
              { name: "Manufacturing & Industrial", image: "/industrial-signage-manufacturing-machinery.jpg" },
            ].map((industry, idx) => (
              <div key={idx} className="group relative h-[250px] rounded-lg overflow-hidden bg-secondary hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-[70%] overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
                {/* Content */}
                <div className="mt-4">
                  <p className="font-semibold text-black text-xl text-center">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Types of Indoor Signage - Image Left, Text Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/indout/promo table.jpg"
                alt="Wall Graphics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Types of Indoor Signage</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Reception Signage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make a powerful first impression with custom reception area signs, company logos, and welcome
                    displays that reflect your brand's professionalism.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Wall Graphics & Murals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transform blank walls into engaging visual experiences with custom wall graphics, vinyl decals, and
                    large-format prints that tell your brand story.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Directional & Wayfinding</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Help visitors navigate your space effortlessly with clear, well-designed directional signs, floor
                    graphics, and room identification systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Safety & Compliance Signs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ensure workplace safety with custom safety signs, emergency exit indicators, and compliance signage
                    that meets regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Indoor Advertising Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/indout/tent.jpg", alt: "Indoor Wall Signage" },
              { src: "/indout/tent canopy 2.jpg", alt: "roll up standee" },
              { src: "/indout/mix.jpg", alt: "tent canopy" },
              { src: "/indout/roll up standee.jpg", alt: "Roll Up Standee" },
              { src: "/indout/promo table.jpg", alt: "Promo Table Display" },
            ].map((project, i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-pink-50/50 to-blue-50 -z-10" />

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get quick answers about Indoor Advertising solutions.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What materials are best for indoor signage?",
                  answer: "The best material depends on your specific needs. Acrylic is ideal for professional corporate spaces, vinyl works great for wall graphics, and metal signs offer durability and elegance. We'll help you choose the perfect material for your application."
                },
                {
                  question: "Can indoor signs be customized to match our brand?",
                  answer: "Absolutely! We offer complete customization including colors, fonts, sizes, and finishes to perfectly match your brand identity and interior design aesthetic."
                },
                {
                  question: "How long does installation take?",
                  answer: "Installation time varies based on the project size and complexity. Simple wall graphics can be installed in a few hours, while larger projects may take 1-2 days. We'll provide a detailed timeline during the consultation."
                },
                {
                  question: "Do you provide design services?",
                  answer: "Yes! Our creative team can design custom signage from scratch or work with your existing brand assets to create signage that perfectly represents your business."
                },
                {
                  question: "Are indoor signs easy to maintain?",
                  answer: "Our indoor signage is designed for easy maintenance. Most signs can be cleaned with a soft cloth and mild cleaning solution. We provide care instructions with every installation."
                },
              ].map((faq, index) => (
                <AccordionPrimitive.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
                >
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      )}
                    >
                      <span className="flex-1 pr-4">{faq.question}</span>
                      <div className="flex-shrink-0">
                        <Plus className="h-5 w-5 text-accent transition-all duration-200 group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 text-accent transition-all duration-200 hidden group-data-[state=open]:block" />
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionPrimitive.Content
                    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
                  >
                    <div className="px-6 pt-0 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionPrimitive.Content>
                </AccordionPrimitive.Item>
              ))}
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Indoor Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your indoor advertising project
          </p>
          <Button
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}

