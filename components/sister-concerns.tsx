export function SisterConcerns() {
  const sisterConcerns = [
    {
      name: "NILE",
      subtitle: "",
      logo: "/nile.png",
    },
    {
      name: "signet",
      subtitle: "PRINT & PROMO LTD",
      logo: "/signet05.png",
    },
    {
      name: "snitch",
      subtitle: "PRINT & SIGN",
      logo: "/snitch.png",
    },
    {
      name: "NILE TECHNOLOGY",
      subtitle: "",
      logo: "/wizard pro.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Sister <span className="text-accent">Concerns</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are proud to be associated with these trusted brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sisterConcerns.map((concern, index) => (
            <div
              key={index}
              className=" transition-shadow duration-300 flex flex-col items-center justify-center text-center "
            >
              <img
                src={concern.logo || "/placeholder.svg"}
                alt={concern.name}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

