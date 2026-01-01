"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clients = [
  "/clients/peter.png",
  "/clients/logo1.png",
  "/clients/allen.png",
  "/clients/popees.jpg",
  "/clients/abc.png",
  "/clients/AFEH-Logopyt.png",
  "/clients/ahalia.webp",
  "/clients/arroha.png",
  "/clients/chemmenur.webp",
  "/clients/chola.png",
  "/clients/eranad.png",
  "/clients/images.png",
  "/clients/kasavu.png",
  "/clients/mathribhumi.png",
  "/clients/mea.png",
  "/clients/mother.png",
  "/clients/sunny_diomonds.png",
  "/clients/supernova.png",
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000) // Auto-scroll every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
  }

  // Show 4 logos at a time
  const getVisibleClients = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % clients.length
      visible.push(clients[index])
    }
    return visible
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#06177f] mb-12">Powerful Partnerships. Proven Results.</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Lines Container with Arrows */}
          <div className="relative">
            {/* Top Line */}
            <div className="flex h-0.5 px-14 mb-8">
              <div className="w-1/2 bg-accent"></div>
              <div className="w-1/2 bg-[#06177f]"></div>
            </div>

            {/* Logos Carousel */}
            <div className="relative overflow-hidden py-4">
              <div className="flex items-center justify-center gap-12">
                {getVisibleClients().map((client, idx) => (
                  <div
                    key={`${client}-${currentIndex}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center h-20 transition-all duration-500 ease-in-out"
                  >
                    <img
                      src={client || "/placeholder.svg"}
                      alt={`Client ${currentIndex + idx + 1}`}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Line */}
            <div className="flex h-0.5 px-14 mt-8">
              <div className="w-1/2 bg-accent"></div>
              <div className="w-1/2 bg-[#06177f]"></div>
            </div>

            {/* Left Arrow - Centered between lines */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#06177f] text-white flex items-center justify-center hover:bg-[#06177f]/90 transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow - Centered between lines */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#06177f] text-white flex items-center justify-center hover:bg-[#06177f]/90 transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

