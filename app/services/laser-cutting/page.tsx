"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export default function LaserCuttingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/Jali/jali cutting 2.jpg"
          alt="Jali & Laser Cutting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Jali & Laser Cutting</h1>
          <p className="text-xl max-w-2xl mx-auto">Precision cutting and intricate patterns for architectural elegance</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is Jali & Laser Cutting?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Jali and laser cutting are precision fabrication techniques that create intricate patterns, decorative
                screens, and custom designs on various materials. Jali refers to traditional perforated screens with
                geometric or ornamental patterns, while laser cutting uses advanced technology for precise, clean cuts
                on multiple materials.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art laser cutting equipment enables us to create complex designs with exceptional
                precision, whether for architectural elements, decorative panels, signage, or custom artwork. From
                traditional jali patterns to modern geometric designs, we bring intricate details to life.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/Jali/jali cutting 2.jpg"
                alt="Laser Cutting Jali Pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=400&width=600&query=laser cutting machine"
                alt="Laser Cutting Machine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Cutting Technologies</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">CO2 Laser Cutting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    High-powered CO2 laser cutting for precise cuts on wood, acrylic, fabric, leather, and other
                    non-metallic materials with smooth edges and minimal material waste.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Fiber Laser Cutting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced fiber laser technology for cutting metals including stainless steel, aluminum, brass, and
                    copper with exceptional precision and speed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Laser Engraving</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Precision laser engraving for adding text, logos, patterns, and designs to various materials,
                    creating permanent, high-quality markings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">CNC Cutting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Computer-controlled cutting for large-scale projects and materials that require different cutting
                    methods, ensuring consistent quality and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Materials & Patterns - Text Left, Image Right */}
      {/* <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Materials & Pattern Options</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Metal Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Laser cutting on stainless steel, aluminum, brass, copper, and mild steel in various thicknesses for
                    durable architectural and decorative applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Wood & MDF</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Precision cutting on plywood, MDF, solid wood, and engineered wood products for furniture, decorative
                    panels, and architectural elements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Acrylic & Plastics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clean, polished edges on acrylic sheets, PVC, and other plastic materials perfect for signage,
                    displays, and decorative applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Custom Patterns</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional jali patterns, geometric designs, custom logos, Arabic calligraphy, and intricate
                    artwork - we can cut virtually any design you can imagine.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&query=jali patterns materials"
                alt="Jali Patterns and Materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Images */}
      <section className="py-20">
        <div className="container items-center justify-center mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Outdoor Advertising Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {[
              { src: "/Jali/jali cutting.jpg", alt: "Indoor Wall Signage" },
              { src: "/Jali/jali cutting 2.jpg", alt: "roll up standee" },
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

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get quick answers about our laser cutting and jali services.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
              <AccordionPrimitive.Item
                value="item-1"
                className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    )}
                  >
                    <span className="flex-1 pr-4">What materials can be laser cut?</span>
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
                    We can laser cut a wide range of materials including metals (stainless steel, aluminum, brass),
                    wood and MDF, acrylic, plastics, fabric, leather, and more. The material choice depends on your
                    application and requirements.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>

              <AccordionPrimitive.Item
                value="item-2"
                className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    )}
                  >
                    <span className="flex-1 pr-4">What's the maximum thickness you can cut?</span>
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
                    Maximum thickness depends on the material. For metals, we can typically cut up to 10-12mm, while
                    non-metallic materials like wood and acrylic can be cut in thicker sections. We'll assess your
                    specific requirements during consultation.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>

              <AccordionPrimitive.Item
                value="item-3"
                className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    )}
                  >
                    <span className="flex-1 pr-4">Can you create custom jali patterns?</span>
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
                    Absolutely! We can create custom jali patterns based on your design, or work with you to develop
                    unique patterns that match your aesthetic. We also have a library of traditional and modern patterns
                    to choose from.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>

              <AccordionPrimitive.Item
                value="item-4"
                className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    )}
                  >
                    <span className="flex-1 pr-4">What file formats do you need for cutting?</span>
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
                    We accept vector files in formats like AI, EPS, DXF, and DWG. For best results, designs should be
                    in vector format. Our design team can also help convert or create designs if needed.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>

              <AccordionPrimitive.Item
                value="item-5"
                className="bg-white rounded-lg border border-blue-100/50 shadow-sm overflow-hidden data-[state=open]:shadow-md transition-shadow group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left font-medium text-primary transition-all outline-none hover:bg-gray-50/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    )}
                  >
                    <span className="flex-1 pr-4">Do you provide finishing services?</span>
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
                    Yes! We offer various finishing options including polishing, powder coating, painting, anodizing,
                    and other surface treatments to enhance the appearance and durability of your laser-cut pieces.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Intricate Designs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your jali & laser cutting project
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








