"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Award, Briefcase, Lightbulb, Settings, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Industries } from "@/components/industries"
import { WhyChooseUs } from "@/components/why-choose-us"
import { SisterConcerns } from "@/components/sister-concerns"
import { AboutUsSection } from "@/components/AboutUsSection"
import { FAQ } from "@/components/faq"
import ServiceSection from "@/components/ServiceSection"

const services = [
  {
    title: "LED 3D Letter Signage",
    description: "Illuminated channel letters that make your brand shine day and night",
    icon: Lightbulb,
    href: "/services/led-3d-letters",
    image: "/led-3d-signage-letters-illuminated.jpg",
  },
  {
    title: "Indoor Advertising",
    description: "Eye-catching displays for retail, corporate, and commercial spaces",
    icon: Briefcase,
    href: "/services/indoor-advertising",
    image: "/indoor-retail-advertising-signage.jpg",
  },
  {
    title: "Outdoor Advertising",
    description: "Weather-resistant signage solutions for maximum outdoor visibility",
    icon: Award,
    href: "/services/outdoor-advertising",
    image: "/outdoor-building-signage.jpg",
  },
  {
    title: "Flex & UV Printing",
    description: "High-quality large format printing on flex, cloth, and various materials",
    icon: Settings,
    href: "/services/printing",
    image: "/large-format-printing-machine.jpg",
  },
  {
    title: "UV Flatbed Printing",
    description: "Direct-to-surface printing on rigid and flexible materials with instant drying",
    icon: Settings,
    href: "/services/uv-flatbed",
    image: "/uv flatbed/01.png",
  },
  {
    title: "Creative Designing",
    description: "Professional brand identity and visual communication design",
    icon: Lightbulb,
    href: "/services/creative-designing",
    image: "/graphic-design-branding.jpg",
  },
  {
    title: "Jali & Laser Cutting",
    description: "Precision cutting services for decorative and functional applications",
    icon: Settings,
    href: "/services/laser-cutting",
    image: "/laser-cutting-metal-precision.jpg",
  },
  {
    title: "Memento & Trophy",
    description: "Custom awards, trophies, and corporate gifts manufacturing",
    icon: Award,
    href: "/services/memento-trophy",
    image: "/corporate-trophies-awards.jpg",
  },
]

const stackedServices = [
  {
    title: "Acrylic Signage",
    description:
      "Premium acrylic signage solutions that offer exceptional durability and a sleek, modern appearance. Perfect for indoor and outdoor applications, acrylic signs provide excellent weather resistance and maintain their vibrant colors over time. Ideal for corporate offices, retail stores, restaurants, and commercial establishments looking for a professional and elegant signage solution that stands out.",
    image: "/acrylic/acrylic8.jpg",
  },
  {
    title: "Rose Gold Signage",
    description:
      "Add a touch of luxury and sophistication to your brand with stunning rose gold signage. This premium finish creates an elegant and eye-catching appearance that reflects quality and style. Perfect for upscale retail stores, boutiques, luxury brands, and high-end establishments. Rose gold signage commands attention and conveys a sense of premium quality, making your business stand out in a competitive market.",
    image: "/signages/rose gold.jpg",
  },
  {
    title: "Titanium Signage",
    description:
      "Experience the ultimate in durability and strength with titanium signage. Known for its exceptional resistance to corrosion, weathering, and wear, titanium signs are built to last. These signs offer a premium metallic finish that exudes professionalism and reliability. Perfect for outdoor installations, industrial applications, and businesses that require long-lasting, low-maintenance signage solutions that maintain their appearance for years.",
    image: "/titanium/titanium.jpg",
  },
  {
    title: "Crystal Signage",
    description:
      "Transform your brand presence with crystal signage that combines elegance and visibility. Crystal signage offers a premium, translucent appearance that creates a sophisticated aesthetic while ensuring excellent readability. Perfect for luxury brands, corporate offices, and high-end retail environments. The crystal finish adds a touch of refinement and premium quality, making your business signage a true statement piece that reflects your brand's commitment to excellence.",
    image: "/signages/crystel.jpg",
  },
  {
    title: "Steel Signage",
    description:
      "Robust and reliable steel signage solutions built to withstand the toughest conditions. Steel signs offer exceptional durability, weather resistance, and longevity, making them perfect for outdoor installations and industrial settings. With a professional appearance and low maintenance requirements, steel signage is an ideal choice for businesses, warehouses, factories, and commercial establishments that need signage that can endure harsh environments while maintaining a clean, professional look.",
    image: "/signages/steel.jpg",
  },
]


const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "RetailMax Chain",
    text: "Sign Wizard transformed our store fronts with stunning LED signage. The quality and service exceeded our expectations.",
  },
  {
    name: "Priya Sharma",
    company: "TechCorp Solutions",
    text: "Professional, reliable, and creative. They handled our entire office branding from concept to installation flawlessly.",
  },
  {
    name: "Amit Patel",
    company: "Café Delights",
    text: "Their outdoor signage has significantly increased our visibility. Great craftsmanship and attention to detail.",
  },
]

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    countryCode: "+91",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", phone: "", countryCode: "+91", message: "" })
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero onQuoteClick={() => setQuoteModalOpen(true)} />

      <AboutUsSection />

      {/* Our Signage Services */}
      <ServiceSection
        services={stackedServices}
        onQuoteClick={() => setQuoteModalOpen(true)}
        title="Our Premium Signage Solutions"
        description={
          <>
            Elevate your brand with our <strong>premium signage solutions</strong> crafted from the finest materials. From elegant acrylic to durable steel, we create signage that perfectly reflects your brand identity and values. <strong>Our signage</strong> doesn't just display information, it makes a lasting impression, enhances your brand presence, and communicates quality to your customers. Whether it's for indoor elegance or outdoor durability, we craft every signage piece with precision and attention to detail.
          </>
        }
      />


      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-start">
          <div className="text-start mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Our <span className="text-accent">Services</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl text-start">
              Comprehensive signage and branding solutions tailored to your business needs
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="block">
                <Card className="group hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <service.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-accent hover:text-accent/80 font-semibold inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />


      {/* Featured Projects */}
      {/* <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">See our work in action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={`/professional-signage-project-.jpg?height=400&width=600&query=professional signage project ${i}`}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">Featured Project {i}</h3>
                    <p className="text-sm">Professional signage solution</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}


      <Industries />
      <Clients />
      <SisterConcerns />

      {/* Testimonials */}
      {/* <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <FAQ />


      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get In Touch With Us - Left Side */}
            <div className="flex flex-col justify-start items-start">
              {/* Google Rating Badge */}
              <div className="bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-2 mb-6 self-start">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-primary">4.5/5</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get In <br /> <span className="text-accent">Touch With Us</span> </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We would love to hear from you. Whether you have queries, need assistance, or want to explore our products, we are here to help you.
              </p>
            </div>

            {/* Enquire Now Form - Right Side */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Enquire Now</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-semibold">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary font-semibold">Company name *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enter your company name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary font-semibold">Phone Number *</Label>
                  <div className="flex gap-2">                    <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={formData.countryCode}
                    className="flex-1 h-12"
                  />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary font-semibold">Send us your query</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your message..."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-lg font-semibold"
                >
                  Get a Quote Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-balance">
            Get a free consultation and quote for your signage project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8"
            >
              Talk to our expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  )
}
