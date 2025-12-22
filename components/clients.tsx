const clients = [
  "/clients/peter.png",
  "/clients/logo1.png",
  "/clients/allen.png",
  "/clients/popees.jpg",
  "/clients/abc.png",
  "/clients/AFEH-Logopyt.png",
  "/clients/ahalia.webp",
  "/clients/arroha.png",
  "/clients/chemmenur.webp",
  "/clients/chola.png",
  "/clients/eranad.png",
  "/clients/images.png",
  "/clients/kasavu.png",
  "/clients/mathribhumi.png",
  "/clients/mea.png",
  "/clients/mother.png",
  "/clients/sunny_diomonds.png",
  "/clients/supernova.png",
]

export function Clients() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Powerful Partnerships. Proven Results.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center hover:grayscale-0 transition-all">
              <img src={client || "/placeholder.svg"} alt={`Client ${idx + 1}`} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

