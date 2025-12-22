import { Printer, Palette, FileStack, Award, ThumbsUp, Zap } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Printer,
      title: "Advanced Printing Infrastructure",
      description:
        "We use modern, high-precision printing machines to deliver sharp visuals, accurate colors, and consistent output across all signage formats.",
    },
    {
      icon: Palette,
      title: "Safe & Durable Inks",
      description:
        "Our inks are eco-safe, non-toxic, and weather-resistant, ensuring long-lasting performance for both indoor and outdoor applications.",
    },
    {
      icon: FileStack,
      title: "Multiple Material Expertise",
      description:
        "From vinyl and acrylic to metal and fabric, we work with a wide range of materials to suit different business and site requirements.",
    },
    {
      icon: Award,
      title: "Strict Quality Control",
      description:
        "Every project goes through defined quality checks to ensure durability, clean finishing, and professional-grade output.",
    },
    {
      icon: ThumbsUp,
      title: "Skilled Production Team",
      description:
        "Our experienced designers and fabricators focus on precision, alignment, and detailing to deliver signage that looks premium.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable Delivery",
      description:
        "Streamlined production and disciplined execution help us meet deadlines without compromising on quality.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Why <span className="text-accent">Choose Us?</span></h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            From large-scale banners and wall graphics to diverse signage options, our large-format printing solutions cater to a wide range of business printing needs with precision, quality and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div key={idx} className="flex flex-col">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent p-3">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

