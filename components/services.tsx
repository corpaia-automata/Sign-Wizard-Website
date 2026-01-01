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
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
        </div>

        {/* Featured Services - Large Blocks */}
        <div className="space-y-6 mb-8">
          {/* LED 3D Letter Signage - Red Background */}
          {featuredServices[0] && (
            <Link href={featuredServices[0].href} className="block group">
              <div className="flex flex-col lg:flex-row gap-0 bg-accent rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center text-white">
                  <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                    {featuredServices[0].title}
                  </h3>
                  {featuredServices[0].description && (
                    <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
                      {featuredServices[0].description}
                    </p>
                  )}
                  <div className="inline-flex items-center text-white font-semibold text-lg group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
                <div className="lg:w-[40%] p-4 flex items-center justify-center">
                  <img
                    src={featuredServices[0].image || "/placeholder.svg"}
                    alt={featuredServices[0].title}
                    className="w-full  object-contain rounded-2xl"
                  />
                </div>
              </div>
            </Link>
          )}

          {/* UV Flatbed Printing - White Background with Border */}
          {featuredServices[1] && (
            <Link href={featuredServices[1].href} className="block group">
              <div className="flex flex-col lg:flex-row gap-0 bg-white border-2 border-[#06177f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="lg:w-[60%] p-8 lg:p-12 flex flex-col justify-center text-[#06177f]">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#06177f]">
                    {featuredServices[1].title}
                  </h3>
                  {featuredServices[1].description && (
                    <p className="text-lg md:text-xl mb-6 text-[#06177f] leading-relaxed">
                      {featuredServices[1].description}
                    </p>
                  )}
                  <div className="inline-flex items-center text-[#06177f] font-semibold text-lg group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
                <div className="lg:w-[40%] p-4 flex items-center justify-center">
                  <img
                    src={featuredServices[1].image || "/placeholder.svg"}
                    alt={featuredServices[1].title}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Small Services - Grid of 3 */}
        <div className="space-y-6">
          {/* First Row of 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallServices.slice(0, 3).map((service, index) => {
              const isAccent = index % 2 === 1 // Alternate: 0=blue, 1=red, 2=blue
              return (
                <Link key={service.href} href={service.href} className="block group">
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow ${isAccent ? "bg-accent" : "bg-[#06177f]"
                      }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {service.title === "Flex & UV Printing"
                        ? "Flex, Cloth UV Printing"
                        : service.title === "Creative Designing"
                          ? "Graphic Designing"
                          : service.title}
                    </h3>
                    <div className="inline-flex items-center text-white font-semibold text-lg group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Second Row of 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallServices.slice(3, 6).map((service, index) => {
              const isAccent = index % 2 === 0 // Alternate: 0=red, 1=blue, 2=red
              return (
                <Link key={service.href} href={service.href} className="block group">
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow ${isAccent ? "bg-accent" : "bg-[#06177f]"
                      }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {service.title === "Flex & UV Printing"
                        ? "Flex, Cloth UV Printing"
                        : service.title === "Creative Designing"
                          ? "Graphic Designing"
                          : service.title}
                    </h3>
                    <div className="inline-flex items-center text-white font-semibold text-lg group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
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

