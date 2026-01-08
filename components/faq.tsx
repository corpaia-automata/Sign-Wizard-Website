'use client'

import { Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export function FAQ() {
  const faqs = [
    {
      question: "Who is Sign Wizard?",
      answer: "Sign Wizard is a professional signage and branding solutions company specializing in design, fabrication, printing, and installation for businesses across multiple industries."
    },
    {
      question: "What makes Sign Wizard different from other signage companies?",
      answer: "We handle the entire signage lifecycle in-house — from concept to installation — ensuring better quality control, faster delivery, and consistent results."
    },
    {
      question: "Do you offer custom signage solutions?",
      answer: "Yes. Every project is designed based on the client's brand, space, and functional requirements. We do not use one-size-fits-all templates."
    },
    {
      question: "What industries do you serve?",
      answer: "We work with retail, healthcare, real estate, corporate offices, hospitality, manufacturing, and commercial establishments."
    },
    {
      question: "Do you manage both indoor and outdoor signage projects?",
      answer: "Absolutely. We design and install signage for indoor environments as well as outdoor, large-format, and weather-exposed applications."
    },
    {
      question: "How do you ensure quality and durability?",
      answer: "We use tested materials, modern production equipment, and defined quality checks at every stage of fabrication and installation."
    },
    {
      question: "How do you approach project timelines?",
      answer: "Each project follows a clear execution plan with realistic timelines. We prioritize on-time delivery without compromising quality."
    },
  ]

  return (
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
            Get quick answers about Sign Wizard and how we work.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
  )
}

