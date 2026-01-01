"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onQuoteClick: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative">
      {/* Top Section with Image Background */}
      <div className="relative min-h-[600px] lg:min-h-[550px] flex items-center ">
        <img
          src="/home.jpg"
          alt="Sign Wizard"
          className="absolute inset-0 w-full"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                
                <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg">
                Over 20 Years
                </span>{" "}
                of Precision Signage Quality & Consistency
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Sign Wizard is a trusted signage partner across Kerala and India, delivering clear and durable signage since 2005.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom White Section - Statistics */}
      <div className="bg-white py-7">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {/* Project Completed */}
            <div className="flex rounded-xl overflow-hidden shadow-lg">
              <div className="bg-accent flex items-center justify-center px-6 py-6 min-w-[100px]">
                <span className="text-3xl lg:text-4xl font-bold text-white">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-6 py-4 flex-1">
                <span className="text-lg lg:text-xl font-semibold text-white text-center">
                  Project Completed
                </span>
              </div>
            </div>

            {/* Happy Clients */}
            <div className="flex rounded-xl overflow-hidden shadow-lg">
              <div className="bg-accent flex items-center justify-center px-6 py-6 min-w-[100px]">
                <span className="text-3xl lg:text-4xl font-bold text-white">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-6 py-6 flex-1">
                <span className="text-lg lg:text-xl font-semibold text-white text-center">
                  Happy Clients
                </span>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex rounded-xl overflow-hidden shadow-lg">
              <div className="bg-accent flex items-center justify-center px-6 py-8 min-w-[140px]">
                <span className="text-3xl lg:text-4xl font-bold text-white">20+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-6 py-8 flex-1">
                <span className="text-lg lg:text-xl font-semibold text-white text-center">
                  Years of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

