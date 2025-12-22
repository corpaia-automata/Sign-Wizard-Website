"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const categories = ["All", "LED Signage", "Indoor", "Outdoor", "Printing", "Custom Works"]

const projects = [
  { id: 1, category: "LED Signage", image: "signages/titanium.jpg" },
  { id: 2, category: "Outdoor", image: "/indout/hoarding.jpg" },
  { id: 3, category: "Indoor", image: "/indout/mix.jpg" },
  { id: 4, category: "Printing", image: "/printing.png" },
  { id: 5, category: "LED Signage", image: "/signages/led letter.jpg" },
  { id: 6, category: "Custom Works", image: "/memento.jpg" },
  { id: 7, category: "Outdoor", image: "/sky-hero2.png" },
  { id: 8, category: "Indoor", image: "/indout/promo table.jpg" },
  { id: 9, category: "Printing", image: "/about.png" },
  { id: 10, category: "LED Signage", image: "/signages/led letter 2.jpg" },
  { id: 11, category: "Custom Works", image: "/indoor-retail-advertising-signage.jpg" },
]


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[300px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=300&width=1920"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">Explore our portfolio of successful signage solutions</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative h-80 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm mb-1">{project.category}</p>
                    <h3 className="font-semibold text-lg">Professional Project</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
