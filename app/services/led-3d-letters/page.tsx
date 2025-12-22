"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'
import { Industries } from "@/components/industries"

export default function LED3DLettersPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/signages/titanium.jpg"
          alt="LED 3D Letters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">LED 3D Letter Signage</h1>
          <p className="text-xl max-w-2xl mx-auto">Illuminate your brand 24/7 with premium LED channel letters</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/signages/titanium.jpg"
                  alt="LED 3D Letter Signage"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What is LED 3D Letter Signage?</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    LED 3D letter signage, also known as channel letters, are individually crafted letters that use LED
                    lighting to create a stunning illuminated effect. These signs are perfect for businesses looking to
                    maintain visibility both day and night, creating a strong brand presence on storefronts, building facades,
                    and commercial spaces.
                  </p>
                  <p>
                    Our LED 3D letters are manufactured using premium materials including aluminum, acrylic, and high-quality
                    LED modules that ensure energy efficiency, longevity, and brilliant illumination. Each letter is
                    custom-made to match your brand's exact specifications, fonts, and colors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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


      {/* Materials & Options */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Materials & Options</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Front-Lit Letters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LED lights installed inside the letters illuminate through the acrylic face, creating a bright and
                  uniform glow. Ideal for maximum visibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Back-Lit (Halo) Letters</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LEDs positioned behind the letters create an elegant halo effect on the wall. Perfect for a
                  sophisticated, upscale appearance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Front & Back-Lit Combination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The best of both worlds - illumination from both front and back for maximum impact and visual depth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Material Options</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Aluminum body with acrylic face</li>
                  <li>Stainless steel for premium finish</li>
                  <li>Custom colors and finishes</li>
                  <li>Various depths: 2", 3", 4", and more</li>
                  <li>Weather-resistant coating for outdoor use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Images */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our LED Signage Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/signages/titanium.jpg", alt: "Titanium LED Signage" },
              { src: "/signages/acrylic.jpg", alt: "Acrylic LED Signage" },
              { src: "/signages/rose gold.jpg", alt: "Rose Gold LED Signage" },
              { src: "/signages/crystel.jpg", alt: "Crystal LED Signage" },
              { src: "/signages/steel.jpg", alt: "Steel LED Signage" },
              { src: "/signages/crystal-letter-signage.jpg", alt: "Crystal Letter Signage" },
            ].map((project, i) => (
              <div key={i} className="relative h-96 rounded-lg overflow-hidden group">
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

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get quick answers about LED 3D Letter Signage.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long do LED channel letters last?",
                  answer: "With proper maintenance, LED channel letters can last 10-15 years. Our LED modules are rated for 50,000+ hours of operation and come with a 2-year warranty."
                },
                {
                  question: "Are LED letters energy efficient?",
                  answer: "Yes! LED letters consume significantly less energy compared to traditional neon or fluorescent signage, reducing your electricity costs by up to 80%."
                },
                {
                  question: "Can LED letters be used outdoors?",
                  answer: "Absolutely. Our LED channel letters are designed and manufactured to withstand all weather conditions including rain, heat, and dust with IP65 rated waterproofing."
                },
                {
                  question: "How are the letters installed?",
                  answer: "Our professional installation team handles everything from electrical work to secure mounting. Installation typically takes 1-2 days depending on the size and complexity."
                },
                {
                  question: "Can I customize the color and size?",
                  answer: "Yes! We offer complete customization including size, color (any Pantone color), font, depth, and lighting style to match your brand identity perfectly."
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Illuminate Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your LED 3D letter signage project
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
