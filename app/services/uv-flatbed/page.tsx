"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export default function UVFlatbedPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/uv flatbed/flatbed 02.jpg"
          alt="UV Flatbed Printing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">UV Flatbed Printing</h1>
          <p className="text-xl max-w-2xl mx-auto">Direct-to-surface printing on rigid and flexible materials</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is UV Flatbed Printing?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                UV flatbed printing is an advanced digital printing technology that prints directly onto rigid and flexible
                materials using UV-curable inks. Unlike traditional printing methods, UV flatbed printing offers instant
                drying, exceptional durability, and the ability to print on a wide variety of surfaces without transfer
                paper or lamination.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art UV flatbed printers deliver vibrant, high-resolution prints that are scratch-resistant,
                water-resistant, and fade-proof. This makes UV flatbed printing ideal for both indoor and outdoor
                applications where durability and quality are paramount.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/uv flatbed/flatbed 02.jpg"
                alt="UV Flatbed Printing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Materials We <span className="text-accent">Print On</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our UV flatbed printers work with a wide range of rigid and flexible materials, giving you endless possibilities for your projects.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Rigid Materials */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-accent rounded-full"></div>
                <h3 className="text-3xl font-bold text-primary">Rigid Materials</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Wood",
                  "Acrylic",
                  "PVC",
                  "Metal",
                  "Glass",
                  "Ceramic",
                  "Tiles",
                  "MDF",
                ].map((material, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h4 className="text-center font-semibold text-primary text-lg group-hover:text-accent transition-colors">
                      {material}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Flexible Materials */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-16 bg-accent rounded-full"></div>
                <h3 className="text-3xl font-bold text-primary">Flexible Materials</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Vinyl",
                  "Leather",
                  "Rubber",
                  "Thin Plastics",
                  "Films",
                ].map((material, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h4 className="text-center font-semibold text-primary text-lg group-hover:text-accent transition-colors">
                      {material}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Applications */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Common Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Signage & Nameplates",
              "Phone Cases & Promotional Products",
              "Acrylic Letters & LED Boards",
              "Furniture Panels & Interior Décor",
              "Industrial Labeling",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-secondary p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages - Image Left, Text Right */}
      <section className="py-20 bg-secondary">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/uv flatbed/01.png"
                alt="UV Flatbed Printing Advantages"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Key Advantages</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Instant Drying</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No waiting time - prints are ready immediately. UV inks cure instantly when exposed to UV light,
                    allowing for faster production and turnaround times.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Direct-to-Surface Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No transfer paper or lamination needed. Print directly onto the final substrate, reducing material
                    waste and production steps.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">High Durability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scratch-, water-, and fade-resistant prints that maintain their quality and appearance for years,
                    even in harsh outdoor conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">White & Varnish Ink Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ideal for signage, packaging, and premium finishes. White ink allows printing on dark surfaces,
                    while varnish adds protective and aesthetic coatings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Eco-Friendly</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Low VOC emissions compared to solvent inks, making UV flatbed printing an environmentally
                    responsible choice for your printing needs.
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
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our UV Flatbed Printing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/uv flatbed/01.png", alt: "UV Flatbed Printing Project 1" },
              { src: "/uv flatbed/02.jpg", alt: "UV Flatbed Printing Project 2" },
              { src: "/uv flatbed/03.jpg", alt: "UV Flatbed Printing Project 3" },
              { src: "/uv flatbed/flatbed 01.jpg", alt: "UV Flatbed Printing Project 4" },
              { src: "/uv flatbed/flatbed 02.jpg", alt: "UV Flatbed Printing Project 5" },
              { src: "/uv flatbed/faltbed 03.jpg", alt: "UV Flatbed Printing Project 6" },
              { src: "/uv flatbed/machine.jpg", alt: "UV Flatbed Printing Machine" },
            ].map((image, i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.alt}
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
              Get quick answers about our UV flatbed printing services.
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
                    <span className="flex-1 pr-4">What is the maximum thickness you can print on?</span>
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
                    Our UV flatbed printers can handle materials up to several inches thick, depending on the specific
                    material and printer model. We can print on rigid substrates up to 2-3 inches thick, making it
                    suitable for a wide range of applications including thick acrylic panels, wooden boards, and other
                    rigid materials.
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
                    <span className="flex-1 pr-4">How durable are UV flatbed prints?</span>
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
                    UV flatbed prints are extremely durable and resistant to scratches, water, and fading. They can
                    withstand outdoor exposure for several years without significant degradation. The UV-cured inks form
                    a hard, protective layer that maintains color vibrancy and image quality over time.
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
                    <span className="flex-1 pr-4">Can you print white ink on dark surfaces?</span>
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
                    Yes! One of the key advantages of UV flatbed printing is the ability to print white ink, which
                    allows us to print vibrant colors and designs on dark surfaces like black acrylic, metal, or wood.
                    This opens up many creative possibilities for signage and display applications.
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
                    <span className="flex-1 pr-4">What file formats do you accept?</span>
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
                    We accept high-resolution files in PDF, AI, EPS, PSD, and PNG formats. For best results, files
                    should be at 150-300 DPI depending on the viewing distance. Our design team can also help prepare
                    or optimize your files for UV flatbed printing.
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
                    <span className="flex-1 pr-4">Is UV flatbed printing eco-friendly?</span>
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
                    Yes, UV flatbed printing is more environmentally friendly than traditional solvent-based printing.
                    UV inks have low VOC (Volatile Organic Compound) emissions, produce less waste since there's no
                    need for transfer paper or lamination, and the instant curing process reduces energy consumption
                    compared to heat-drying methods.
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
          <h2 className="text-4xl font-bold mb-6">Ready to Experience UV Flatbed Printing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your UV flatbed printing project
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

