"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onQuoteClick: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative h-[700px] flex items-center justify-start text-left text-white">
      <div className="absolute inset-0" />
      <img
        src="/street-hero.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
      <div className="relative z-20 container mx-auto px-4 leading-tight">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-left leading-tight">
          Transform Your Brand Visibility with Professional Signage
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-left">
          End-to-end signage solutions from design to installation. Making businesses stand out since 2010.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Button
            onClick={onQuoteClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={onQuoteClick}
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8"
          >
            Talk to Our Expert
          </Button>
        </div>
      </div>
    </section>
  )
}

