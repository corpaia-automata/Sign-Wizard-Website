"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onQuoteClick: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative w-full max-w-full overflow-x-hidden">
      {/* Top Section with Image Background */}
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[450px] lg:min-h-[500px] flex items-center w-full max-w-full overflow-hidden">
        <img
          src="/home.jpg"
          alt="Sign Wizard"
          className="absolute inset-0 w-full h-full object-cover max-w-full"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-10 " />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white py-8 sm:py-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight">
                <span className="inline-block bg-accent text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-0">
                  Over 20 Years
                </span>{" "}
                <span className="block sm:inline mt-2 sm:mt-0">of Precision Signage Quality & Consistency</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                Sign Wizard is a trusted signage partner across Kerala and India, delivering clear and durable signage since 2005.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom White Section - Statistics */}
      <div className="bg-white py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {/* Project Completed */}
            <div className="flex flex-col sm:flex-row rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent flex items-center justify-center px-6 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 min-h-[80px] sm:min-h-0 sm:min-w-[100px] lg:min-w-[110px]">
                <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-4 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 flex-1 min-h-[70px] sm:min-h-0">
                <span className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white text-center leading-tight px-2">
                  Project Completed
                </span>
              </div>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col sm:flex-row rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent flex items-center justify-center px-6 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 min-h-[80px] sm:min-h-0 sm:min-w-[100px] lg:min-w-[110px]">
                <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-4 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 flex-1 min-h-[70px] sm:min-h-0">
                <span className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white text-center leading-tight px-2">
                  Happy Clients
                </span>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col sm:flex-row rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent flex items-center justify-center px-6 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 min-h-[80px] sm:min-h-0 sm:min-w-[100px] lg:min-w-[120px] xl:min-w-[140px]">
                <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">20+</span>
              </div>
              <div className="bg-[#06177f] flex items-center justify-center px-4 sm:px-5 lg:px-6 py-4 sm:py-4 lg:py-5 flex-1 min-h-[70px] sm:min-h-0">
                <span className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white text-center leading-tight px-2">
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

