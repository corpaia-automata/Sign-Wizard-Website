"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export default function CreativeDesigningPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=400&width=1920"
          alt="Creative Designing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Creative Designing</h1>
          <p className="text-xl max-w-2xl mx-auto">Professional brand identity and visual communication design</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is Creative Designing?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Creative designing is the art of transforming ideas into compelling visual communications that resonate
                with your audience. Our design team specializes in creating cohesive brand identities, signage designs,
                and marketing materials that effectively communicate your brand's message and values.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to execution, we work closely with you to understand your vision and create designs that not
                only look stunning but also drive results. Whether you need a complete brand identity or specific
                signage designs, we bring creativity, expertise, and strategic thinking to every project.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/graphic designing.jpg"
                alt="Creative Design Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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


      {/* Design Process - Image Left, Text Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=400&width=600&query=design workflow"
                alt="Design Workflow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Our Design Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Discovery & Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We begin by understanding your business, target audience, and brand goals through comprehensive
                    research and consultation to ensure our designs align with your vision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Concept Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our creative team develops multiple design concepts, exploring different directions and styles to
                    find the perfect solution that represents your brand effectively.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Refinement & Execution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We refine the selected concept based on your feedback, ensuring every detail is perfect before
                    finalizing the design and preparing it for production.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Production Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our design team works closely with production to ensure your designs translate perfectly into
                    physical signage, maintaining quality and brand consistency throughout.
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
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Design Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                <img
                  src={`/placeholder.svg?height=400&width=600&query=creative design project ${i}`}
                  alt={`Design Project ${i}`}
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
              Get quick answers about our creative designing services.
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
                    <span className="flex-1 pr-4">Do you provide design-only services?</span>
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
                    Yes! We offer standalone design services if you only need creative work. However, we also provide
                    complete design-to-installation services for a seamless experience.
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
                    <span className="flex-1 pr-4">How many design concepts do you provide?</span>
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
                    Typically, we provide 2-3 initial design concepts for your review. Based on your feedback, we refine
                    the selected direction. The number of concepts can be adjusted based on your project requirements.
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
                    <span className="flex-1 pr-4">Can you work with our existing brand guidelines?</span>
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
                    Absolutely! We can work within your existing brand guidelines to ensure consistency, or help you develop
                    new guidelines if needed. We're experienced in both scenarios.
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
                    <span className="flex-1 pr-4">What file formats do you deliver?</span>
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
                    We deliver designs in all standard formats including AI, EPS, PDF, PNG, and PSD. We also provide
                    production-ready files optimized for your specific manufacturing requirements.
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
                    <span className="flex-1 pr-4">How long does the design process take?</span>
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
                    Design timelines vary based on project complexity. Simple logo designs may take 1-2 weeks, while
                    comprehensive brand identity projects can take 4-6 weeks. We'll provide a detailed timeline during the
                    initial consultation.
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </AccordionPrimitive.Root>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Brand to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your creative design project
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








