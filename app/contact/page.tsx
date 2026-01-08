"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SisterConcerns } from "@/components/sister-concerns"
import { MapPin, Phone, Mail, Clock, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    countryCode: "+91",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", company: "", phone: "", countryCode: "+91", message: "" })
  }

  return (
    <div className="">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/modern-office-exterior.png"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90">SIGN WIZARD® ADVERTISING HUB</p>
        </div>
      </section>

      {/* Get In Touch & Enquire Now Section */}
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
                  <div className="flex gap-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                    >
                      <SelectTrigger className="w-24 h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">IN</SelectItem>
                        <SelectItem value="+1">US</SelectItem>
                        <SelectItem value="+44">UK</SelectItem>
                        <SelectItem value="+971">UAE</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
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

      {/* Let's Connect Section */}
      <section className="py-20 bg-primary">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Let's Connect!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Call us Card */}
            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">Call us</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                Our support team is available during business hours. Please feel free to call us.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Phone className="h-5 w-5" />
                <a href="tel:9830809000" className="font-semibold hover:underline">
                  Call: 9946207070
                </a>
              </div>
            </div>

            {/* Chat with us Card */}
            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">Chat with us</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                You can chat with us for any queries. We are here to give you all the assistance.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <MessageCircle className="h-5 w-5" />
                <button className="font-semibold hover:underline">Chat now</button>
              </div>
            </div>

            {/* Send an email Card */}
            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 mx-auto">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 text-center">Send an email</h3>
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                If you have any queries, feel free to drop your mail at our given email ID. We will get back to you as soon as possible.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent">
                <Mail className="h-5 w-5" />
                <a href="mailto: signwizardmjr@gmail.com" className="font-semibold hover:underline">
                  signwizardmjr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      {/* <section className="pb-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Google Maps Integration Here</p>
          </div>
        </div>
      </section> */}

      <SisterConcerns />

      <Footer />
    </div>
  )
}
