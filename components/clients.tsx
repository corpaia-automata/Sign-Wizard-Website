"use client"

/**
 * Premium Client Logos Carousel Component
 * 
 * IMPLEMENTATION DETAILS:
 * 
 * 1. TRANSLATEX MATH:
 *    - Each logo occupies: LOGO_WIDTH + LOGO_GAP pixels
 *    - Logo position at index i: i * (LOGO_WIDTH + LOGO_GAP)
 *    - To center logo i in viewport: translateX = viewportCenter - (i * itemWidth + LOGO_WIDTH/2)
 *    - This ensures the active logo is always perfectly centered
 * 
 * 2. INFINITE LOOP TECHNIQUE:
 *    - Extended array: [clone1...cloneN, original1...originalN, clone1...cloneN]
 *    - Start at index = originalLength (middle section)
 *    - When index >= originalLength * 2: instantly jump to originalLength (no transition)
 *    - When index < originalLength: instantly jump to originalLength * 2 - 1 (no transition)
 *    - The jump is invisible because cloned logos are visually identical to originals
 *    - Uses isTransitioning flag to disable CSS transition during jumps
 * 
 * 3. CUSTOMIZATION POINTS:
 *    - AUTO_SCROLL_INTERVAL: Time between auto-scrolls (default: 3000ms)
 *    - TRANSITION_DURATION: Animation duration (default: 600ms)
 *    - TRANSITION_EASING: CSS easing function (default: cubic-bezier for smooth motion)
 *    - LOGO_WIDTH: Width of each logo container (default: 200px)
 *    - LOGO_GAP: Space between logos (default: 48px)
 * 
 * 4. PERFORMANCE:
 *    - Uses transform: translateX() (GPU-accelerated, no layout reflow)
 *    - willChange: "transform" hints browser to optimize
 *    - Lazy loading images for better initial load
 *    - Pauses auto-scroll on hover for better UX
 */

import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clients = [
  "/clients/peter.png",
  "/clients/logo1.png",
  "/clients/allen.png",
  "/clients/popees.jpg",
  "/clients/abc.png",
  "/clients/AFEH-Logopyt.png",
  "/clients/arroha.png",
  // "/clients/chemmenur.webp",
  "/clients/chola.png",
  "/clients/eranad.png",
  "/clients/images.png",
  "/clients/mathribhumi.png",
  "/clients/ahalia.webp",
  "/clients/mea.png",
  "/clients/mother.png",
  "/clients/sunny_diomonds.png",
  "/clients/supernova.png",
]

// Configuration constants - easy to tweak
const AUTO_SCROLL_INTERVAL = 3000 // milliseconds
const TRANSITION_DURATION = 600 // milliseconds (0.6s)
const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)" // smooth easing
const LOGO_WIDTH = 200 // pixels - adjust based on your logo size
const LOGO_GAP = 48 // pixels - gap between logos (gap-12 = 3rem = 48px)

export function Clients() {
  // Create extended array for infinite loop: [clone1, clone2, ...original..., clone1, clone2]
  // This allows seamless looping without visible jumps
  const extendedClients = [...clients, ...clients, ...clients]
  const originalLength = clients.length

  // Start at index = originalLength to be in the middle section
  // This gives us room to scroll both directions before needing to reset
  const [currentIndex, setCurrentIndex] = useState(originalLength)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate translateX position
  // Each logo takes LOGO_WIDTH + LOGO_GAP space
  // We center the viewport, so we offset by half the container width
  const getTranslateX = useCallback((index: number) => {
    const itemWidth = LOGO_WIDTH + LOGO_GAP
    // Get container width - try parent element first, then window, then fallback
    let containerWidth = 1200 // fallback
    if (typeof window !== 'undefined') {
      const parent = containerRef.current?.parentElement?.parentElement
      containerWidth = parent?.clientWidth || window.innerWidth
      // Clamp to max-width of container (max-w-7xl = 1280px)
      containerWidth = Math.min(containerWidth, 1280)
    }
    const viewportCenter = containerWidth / 2
    const translateX = viewportCenter - (index * itemWidth + LOGO_WIDTH / 2)
    return translateX
  }, [])

  // Handle infinite loop reset
  // When we reach the end of the extended array, instantly jump to the start of original section
  // When we go before the start, jump to the end of original section
  // This happens without transition (isTransitioning = false)
  useEffect(() => {
    if (!isTransitioning) {
      // Reset transition after a frame to allow the jump to complete
      requestAnimationFrame(() => {
        setIsTransitioning(true)
      })
    }
  }, [isTransitioning, currentIndex])

  // Check if we need to reset position for infinite loop
  useEffect(() => {
    if (currentIndex >= originalLength * 2) {
      // We've scrolled past the end - jump to start of original section
      setIsTransitioning(false)
      setCurrentIndex(originalLength)
    } else if (currentIndex < originalLength) {
      // We've scrolled before the start - jump to end of original section
      setIsTransitioning(false)
      setCurrentIndex(originalLength * 2 - 1)
    }
  }, [currentIndex, originalLength])

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, AUTO_SCROLL_INTERVAL)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Pause auto-scroll on hover/interaction
  const handleMouseEnter = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, AUTO_SCROLL_INTERVAL)
    }
  }, [])

  const handlePrevious = useCallback(() => {
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentIndex((prevIndex) => prevIndex - 1)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, AUTO_SCROLL_INTERVAL)
  }, [])

  const handleNext = useCallback(() => {
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setCurrentIndex((prevIndex) => prevIndex + 1)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, AUTO_SCROLL_INTERVAL)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#06177f] mb-6 sm:mb-12 px-4">
            Powerful Partnerships. Proven Results.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Lines Container with Arrows */}
          <div className="relative">
            {/* Top Line */}
            <div className="flex h-0.5 px-8 sm:px-12 lg:px-14 mb-6 sm:mb-8">
              <div className="w-1/2 bg-accent"></div>
              <div className="w-1/2 bg-[#06177f]"></div>
            </div>

            {/* Logos Carousel */}
            <div
              className="relative overflow-hidden py-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Viewport - hides overflow */}
              <div className="relative w-full h-24">
                {/* Sliding Container */}
                <div
                  ref={containerRef}
                  className="absolute top-0 left-0 flex items-center"
                  style={{
                    transform: `translateX(${getTranslateX(currentIndex)}px)`,
                    transition: isTransitioning
                      ? `transform ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`
                      : "none",
                    willChange: "transform",
                  }}
                >
                  {/* Render all logos in extended array */}
                  {extendedClients.map((client, idx) => (
                    <div
                      key={`${client}-${idx}`}
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: `${LOGO_WIDTH}px`,
                        marginRight: idx < extendedClients.length - 1 ? `${LOGO_GAP}px` : 0,
                      }}
                    >
                      <img
                        src={client || "/placeholder.svg"}
                        alt={`Client logo ${(idx % originalLength) + 1}`}
                        className="max-h-20 w-auto object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="flex h-0.5 px-8 sm:px-12 lg:px-14 mt-6 sm:mt-8">
              <div className="w-1/2 bg-accent"></div>
              <div className="w-1/2 bg-[#06177f]"></div>
            </div>

            {/* Left Arrow - Centered between lines */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#06177f] text-white flex items-center justify-center hover:bg-[#06177f]/90 transition-colors z-10 shadow-lg hover:scale-105 active:scale-95"
              aria-label="Previous client logo"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Right Arrow - Centered between lines */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#06177f] text-white flex items-center justify-center hover:bg-[#06177f]/90 transition-colors z-10 shadow-lg hover:scale-105 active:scale-95"
              aria-label="Next client logo"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

