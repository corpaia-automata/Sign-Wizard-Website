"use client"

import { useEffect, useState } from "react"

const industries = [
  {
    title: "Real Estate",
    image: "/outdoor-building-signage-corporate.jpg",
    description: "Property signage, directional boards, and development displays",
  },
  {
    title: "Healthcare",
    image: "/modern-office-exterior.png",
    description: "Medical facility signage, wayfinding, and health awareness displays",
  },
  {
    title: "Retail",
    image: "/indoor-retail-advertising-signage.jpg",
    description: "Storefront signage, promotional displays, and brand visibility",
  },
  {
    title: "Manufacturing",
    image: "/industrial-signage-manufacturing-machinery.jpg",
    description: "Industrial signage, safety boards, and facility identification",
  },
  {
    title: "Technology",
    image: "/technology.jpg",
    description: "Tech company branding, office signage, and innovation displays",
  },
  {
    title: "Food & Beverage",
    image: "/restuarent.jpg",
    description: "Restaurant signage, menu boards, and culinary brand displays",
  },
  {
    title: "Events & Trade Shows",
    image: "/large-format-banner-printing-outdoor-promotional-e.jpg",
    description: "Exhibition stalls, event branding, backdrops, and promotional displays",
  },
  {
    title: "Corporate",
    image: "/corporate.jpg",
    description: "Office branding, reception signage, and corporate identity systems",
  },
  {
    title: "Education",
    image: "/industries/education.webp",
    description: "School and campus signage, wayfinding, and institutional branding",
  },
]


export function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create a circular array that always shows 4 cards
  const getVisibleIndustries = () => {
    const visible: typeof industries = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % industries.length
      visible.push(industries[index])
    }
    return visible
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to next set of 4 cards
        const nextIndex = prevIndex + 1
        // Reset to 0 when we've shown all cards
        return nextIndex >= industries.length ? 0 : nextIndex
      })
    }, 2000) // Auto-scroll every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-white/90 leading-relaxed">
              From real estate, healthcare, to corporate industries, we serve all industry types with top-notch quality large format printing services. No matter your business type, we maximize your brand's presence with impactful prints.
            </p>
          </div>
        </div>

        {/* Auto-scrolling Grid Container */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleIndustries().map((industry, index) => (
              <div
                key={`${industry.title}-${currentIndex}-${index}`}
                className="animate-fade-in"
              >
                <div className="group relative h-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Image */}
                  <div className="relative h-[70%] overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-900/95 via-purple-900/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

