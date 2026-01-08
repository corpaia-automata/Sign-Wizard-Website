"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Service {
  title: string
  description?: string
  href: string
  image: string
}

interface ServicesProps {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  // Featured services: LED 3D Letter Signage (index 0) and UV Flatbed Printing (index 4)
  const ledService = services.find((s) => s.title === "LED 3D Letter Signage")
  const uvFlatbedService = services.find((s) => s.title === "UV Flatbed Printing")
  const featuredServices = [ledService, uvFlatbedService].filter(Boolean) as Service[]

  // Small services: All others except the featured ones
  const smallServices = services.filter(
    (s) => s.title !== "LED 3D Letter Signage" && s.title !== "UV Flatbed Printing"
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#06177f] mb-3 sm:mb-4">Our Services</h2>
        </div>

        {/* Featured Services - Large Blocks */}
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {/* LED 3D Letter Signage - Red Background */}
          {featuredServices[0] && (
            <Link href="/services/led-3d-letters" className="block group">
              <div className="flex flex-col lg:flex-row gap-0 bg-accent rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="lg:w-[60%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4">
                    {featuredServices[0].title}
                  </h3>
                  {featuredServices[0].description && (
                    <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white/90 leading-relaxed">
                      {featuredServices[0].description}
                    </p>
                  )}
                  <div className="inline-flex items-center text-white font-semibold text-base sm:text-lg group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>
                <div className="lg:w-[40%] p-4 sm:p-6 flex items-center justify-center">
                  <img
                    src={featuredServices[0].image || "/placeholder.svg"}
                    alt={featuredServices[0].title}
                    className="w-full object-contain rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </Link>
          )}

          {/* UV Flatbed Printing - White Background with Border */}
          {featuredServices[1] && (
            <Link href={featuredServices[1].href} className="block group">
              <div className="flex flex-col lg:flex-row gap-0 bg-white border-2 border-[#06177f] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="lg:w-[60%] p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-[#06177f]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 text-[#06177f]">
                    {featuredServices[1].title}
                  </h3>
                  {featuredServices[1].description && (
                    <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-[#06177f] leading-relaxed">
                      {featuredServices[1].description}
                    </p>
                  )}
                  <div className="inline-flex items-center text-[#06177f] font-semibold text-base sm:text-lg group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>
                <div className="lg:w-[40%] p-2 sm:p-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                  <img
                    src={featuredServices[1].image || "/placeholder.svg"}
                    alt={featuredServices[1].title}
                    className="w-full h-full  object-contain rounded-2xl sm:rounded-2xl"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Small Services - Grid of 3 */}
        <div className="space-y-4 sm:space-y-6">
          {/* First Row of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {smallServices.slice(0, 3).map((service, index) => {
              const isAccent = index % 2 === 1 // Alternate: 0=blue, 1=red, 2=blue
              return (
                <Link key={service.href} href={service.href} className="block group">
                  <div
                    className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow ${isAccent ? "bg-accent" : "bg-[#06177f]"
                      }`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                      {service.title === "Flex & UV Printing"
                        ? "Flex, Cloth UV Printing"
                        : service.title === "Creative Designing"
                          ? "Graphic Designing"
                          : service.title}
                    </h3>
                    <div className="inline-flex items-center text-white font-semibold text-base sm:text-lg group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Second Row of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {smallServices.slice(3, 6).map((service, index) => {
              const isAccent = index % 2 === 0 // Alternate: 0=red, 1=blue, 2=red
              return (
                <Link key={service.href} href={service.href} className="block group">
                  <div
                    className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow ${isAccent ? "bg-accent" : "bg-[#06177f]"
                      }`}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                      {service.title === "Flex & UV Printing"
                        ? "Flex, Cloth UV Printing"
                        : service.title === "Creative Designing"
                          ? "Graphic Designing"
                          : service.title}
                    </h3>
                    <div className="inline-flex items-center text-white font-semibold text-base sm:text-lg group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

