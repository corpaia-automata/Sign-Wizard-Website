export function SisterConcerns() {
  const sisterConcerns = [
    {
      name: "Wizard Pro",
      logo: "/wizard pro.png",
    },
    {
      name: "Nile Technology & Solutions",
      logo: "/nile.png",
    },
    {
      name: "Signet Print & Sign Co.",
      logo: "/signet05.png",
    },
    {
      name: "Snitch Print & Sign",
      logo: "/snitch.png",
    },
    // {
    //   name: "Nile Technology",
    //   logo: "/nile.png",
    // },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="bg-[#06177f] rounded-2xl p-8 lg:p-12">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sister Concerns
            </h2>
          </div>

          {/* Logos in white boxes */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {sisterConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={concern.logo || "/placeholder.svg"}
                  alt={concern.name}
                  className="h-12 lg:h-16 w-auto object-contain max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

