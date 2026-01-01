import { Check } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      title: "Expertise in the Signage Industry",
      description: "Over years of experience delivering high-quality indoor and outdoor signage across Kerala and India.",
    },
    {
      title: "End-to-End Solutions",
      description: "From design and fabrication to installation, we handle every step of your signage project.",
    },
    {
      title: "Precision & Quality",
      description: "Every sign is crafted with attention to detail, durability, and visual impact.",
    },
    {
      title: "Modern Technology",
      description: "We use the latest tools and techniques, including LED 3D letters, and advanced printing, to ensure top-quality results.",
    },
    {
      title: "Customized Approach",
      description: "Every project is tailored to match your brand identity, goals, and space requirements.",
    },
    {
      title: "Trusted & Reliable",
      description: "Serving businesses of all sizes, we are a trusted signage partner across Kerala and India.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06177f] mb-6">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="relative">
              {/* Title with icon */}
              <div className="flex items-center justify-between gap-4 mb-3">
              <div className="relative w-12 h-12 bg-[#06177f] rounded-full flex items-center justify-center flex-shrink-0 z-10">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-accent flex-1">
                  {feature.title}
                </h3>
                
                {/* Checkmark icon circle - positioned to the right of title, above the curve */}
                {/* <div className="relative w-12 h-12 bg-[#06177f] rounded-full flex items-center justify-center flex-shrink-0 z-10">
                  <Check className="h-6 w-6 text-white" />
                </div> */}
              </div>
              
              {/* Description with curved underline */}
              <div className="relative">
                <p className="text-base md:text-lg text-[#06177f] leading-relaxed pr-16">
                  {feature.description}
                </p>
                
                {/* Curved line - starts from bottom-right of icon, curves down and extends as underline */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

