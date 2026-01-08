"use client"

import { useEffect, useState } from "react"

const works = [
  "/works/01.jpg",
  "/works/beyond.jpg",
  "/works/chb-01.jpg",
  "/works/heal.jpg",
  "/works/ntk.jpg",
  "/works/ntk2.jpg",
  "/works/nuvision.jpg",
  "/works/otto.jpg",
  "/works/pomees-01.jpg",
  "/works/wingspan.jpg",
]

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length)
    }, 3000) // 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">

        {/* Slideshow Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            {works.map((work, index) => (
              <div
                key={work}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={work}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === currentIndex || index === (currentIndex + 1) % works.length ? "eager" : "lazy"}
                />
              </div>
            ))}
            
            {/* Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

