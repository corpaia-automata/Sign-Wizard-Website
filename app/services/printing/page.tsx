"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { CheckCircle2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrintingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=400&width=1920"
          alt="Flex & UV Printing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Flex & UV Printing</h1>
          <p className="text-xl max-w-2xl mx-auto">High-quality large format printing on various materials</p>
        </div>
      </section>

      {/* Service Description - Text Left, Image Right */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What is Flex & UV Printing?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Flex and UV printing are advanced large-format printing technologies that deliver vibrant, durable
                graphics on a wide range of materials. Flex printing uses flexible vinyl materials perfect for banners,
                hoardings, and outdoor displays, while UV printing offers superior quality and durability on rigid
                substrates.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our state-of-the-art printing facility combines cutting-edge technology with expert craftsmanship to
                produce stunning prints that maintain their color vibrancy and clarity for years, whether used indoors
                or outdoors.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&query=large format printing machine"
                alt="Large Format Printing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Banners & Hoardings",
              "Vehicle Wraps & Graphics",
              "Window Graphics & Decals",
              "Wall Murals & Graphics",
              "Backlit Displays",
              "Trade Show Displays",
              "Floor Graphics & Decals",
              "Point of Sale Displays",
              "Exhibition Stands",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Types - Image Left, Text Right */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=400&width=600&query=UV printing process"
                alt="UV Printing Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-primary mb-8">Printing Technologies</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Flex Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    High-quality flex printing on PVC vinyl materials, perfect for banners, hoardings, and outdoor
                    displays. Our flex prints are weather-resistant and UV-protected for long-lasting durability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">UV Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced UV printing technology that delivers exceptional print quality on rigid materials like
                    acrylic, PVC, wood, metal, and glass. UV prints are scratch-resistant and fade-proof.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Eco-Solvent Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Environmentally friendly printing solution using eco-solvent inks that produce vibrant colors with
                    excellent outdoor durability and weather resistance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Latex Printing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Water-based latex printing technology that produces odorless, eco-friendly prints suitable for both
                    indoor and outdoor applications with exceptional color accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Substrates - Text Left, Image Right */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Printing Materials & Substrates</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Flex Materials</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium PVC flex sheets in various weights and finishes, including frontlit, backlit, and
                    mesh options for different applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Rigid Substrates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    UV printing on acrylic, PVC foam boards, aluminum composite panels, wood, metal, and glass for
                    premium display solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Vinyl & Decals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    High-quality vinyl materials for vehicle wraps, window graphics, wall decals, and floor graphics
                    with various adhesive options.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Fabric & Textile</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Soft signage printing on various fabric materials including polyester, canvas, and mesh for banners,
                    backdrops, and hanging displays.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&query=printing materials substrates"
                alt="Printing Materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Printing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
                <img
                  src={`/placeholder.svg?height=400&width=600&query=printing project ${i}`}
                  alt={`Printing Project ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What's the difference between flex and UV printing?</AccordionTrigger>
              <AccordionContent>
                Flex printing is used on flexible vinyl materials for banners and outdoor displays, while UV printing
                works on rigid substrates like acrylic, metal, and wood. UV printing offers superior durability and
                scratch resistance, making it ideal for premium applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How long do printed materials last outdoors?</AccordionTrigger>
              <AccordionContent>
                With proper materials and UV protection, outdoor prints can last 3-5 years or more depending on
                exposure conditions. We use fade-resistant inks and protective coatings to maximize longevity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What file formats do you accept for printing?</AccordionTrigger>
              <AccordionContent>
                We accept high-resolution files in PDF, AI, EPS, PSD, and PNG formats. For best results, files should be
                at 150 DPI for large format prints. Our design team can also help prepare your files if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can you print custom sizes?</AccordionTrigger>
              <AccordionContent>
                Yes! We can print in virtually any size up to our maximum print width. Custom sizes are available for
                all our printing services, and we can also handle oversized prints by paneling or tiling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Do you offer installation services?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide professional installation services for all our printed materials. Our experienced team
                ensures proper installation for optimal appearance and longevity of your prints.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your flex & UV printing project
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









