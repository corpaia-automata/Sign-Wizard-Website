"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export default function OutdoorAdvertisingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=400&width=1920"
          alt="Outdoor Advertising"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Outdoor Signage</h1>
          <p className="text-xl max-w-2xl mx-auto">Durable, weather-resistant solutions for maximum brand visibility</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is Outdoor Signage?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Outdoor signage solutions emphasize durability, weather resistance, brand visibility, and the ability to
                help businesses stand out in busy areas. Our outdoor advertising signs are engineered to withstand harsh
                weather conditions while maintaining their visual impact year after year.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From building facades to roadside billboards, our outdoor signage solutions are designed to maximize
                your brand's visibility and create a lasting impression on potential customers, even in the most
                challenging outdoor environments.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/indout/hoarding.jpg"
                alt="Outdoor Building Signage"
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


      {/* Types of Outdoor Signage - Image Left, Text Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/sky-hero2.png"
                alt="Outdoor Illuminated Signage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Types of Outdoor Signage</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Channel Letters & 3D Signs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium LED channel letters and dimensional signs that create a powerful brand presence with
                    day-and-night visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Pylon & Monument Signs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Large freestanding signs perfect for shopping centers, business parks, and commercial complexes that
                    need high visibility from a distance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Billboards & Hoardings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Large-format advertising displays for maximum impact along highways, main roads, and high-traffic
                    areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Awning & Canopy Signs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Functional and attractive signage solutions that provide shelter while displaying your brand
                    prominently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Weather Resistance - Text Left, Image Right
      <section className="py-20 bg-secondary">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Weather-Resistant Materials</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Aluminum & Metal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Durable aluminum and stainless steel signs with powder coating and weather-resistant finishes that
                    withstand sun, rain, and extreme temperatures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">High-Grade Acrylic</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    UV-resistant acrylic faces that maintain color vibrancy and clarity even after years of exposure to
                    harsh sunlight and weather.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Flex & Vinyl</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Weatherproof flex banners and vinyl graphics with UV protection and fade-resistant inks for
                    long-lasting outdoor displays.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">IP65 Rated LED Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fully waterproof LED lighting systems that provide reliable illumination in all weather conditions
                    with minimal maintenance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/sky-hero2.png"
                alt="Weather Resistant Materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Images */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Outdoor Advertising Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {[
              { src: "/indout/hoarding.jpg", alt: "Indoor Wall Signage" },
              { src: "/sky-hero2.png", alt: "roll up standee" },
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
              Get quick answers about our outdoor signage solutions.
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
                    <span className="flex-1 pr-4">How weather-resistant are outdoor signs?</span>
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
                    Our outdoor signs are designed to withstand all weather conditions including heavy rain, extreme heat,
                    strong winds, and UV exposure. We use IP65 rated components and weather-resistant materials with
                    protective coatings to ensure longevity.
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
                    <span className="flex-1 pr-4">Do outdoor signs require maintenance?</span>
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
                    While our signs are designed for minimal maintenance, we recommend periodic cleaning and annual
                    inspections to ensure optimal performance. LED systems typically require very little maintenance and come
                    with warranties.
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
                    <span className="flex-1 pr-4">Can outdoor signs be illuminated?</span>
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
                    Yes! We offer various illumination options including LED channel letters, backlit signs, and flood
                    lighting. Illuminated signs significantly increase visibility, especially during evening hours, and help
                    your business stand out 24/7.
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
                    <span className="flex-1 pr-4">What permits are needed for outdoor signage?</span>
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
                    Permit requirements vary by location and sign type. We can guide you through the permit process and
                    help ensure your signage complies with local regulations and building codes.
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
                    <span className="flex-1 pr-4">How long do outdoor signs last?</span>
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
                    With proper installation and materials, outdoor signs can last 10-15 years or more. LED components are
                    rated for 50,000+ hours, and our weather-resistant materials are designed to maintain their appearance
                    for many years.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Maximize Your Outdoor Visibility?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your outdoor advertising project
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








