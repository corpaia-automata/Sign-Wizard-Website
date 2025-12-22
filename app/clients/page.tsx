import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "Peter", logo: "/clients/peter.png" },
  { name: "malabar", logo: "/clients/logo1.png" },
  { name: "Popees", logo: "/clients/popees.jpg" },
  { name: "ABC", logo: "/clients/abc.png" },
  { name: "AFEH", logo: "/clients/AFEH-Logopyt.png" },
  { name: "Ahalia", logo: "/clients/ahalia.webp" },
  { name: "Allen", logo: "/clients/allen.png" },
  { name: "Arroha", logo: "/clients/arroha.png" },
  { name: "Chemmenur", logo: "/clients/chemmenur.webp" },
  { name: "Chola", logo: "/clients/chola.png" },
  { name: "Eranad", logo: "/clients/eranad.png" },
  { name: "Kasavu", logo: "/clients/kasavu.png" },
  { name: "KSFE", logo: "/clients/ksfe.webp" },
  { name: "Mathrubhumi", logo: "/clients/mathribhumi.png" },
  { name: "MEA", logo: "/clients/mea.png" },
  { name: "Mother", logo: "/clients/mother.png" },
  { name: "Sunny Diamonds", logo: "/clients/sunny_diomonds.png" },
  { name: "Supernova", logo: "/clients/supernova.png" },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=300&width=1920"
          alt="Our Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl">Trusted by leading brands across industries</p>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 max-w-7xl mx-auto text-balance">
            Proud to Partner with Businesses That Value Quality and Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-6xl mx-auto leading-relaxed">
            From small businesses to large corporations, we've had the privilege of serving diverse clients across
            retail, hospitality, healthcare, corporate, and more.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex items-center justify-center h-32">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-h-16 max-w-full  transition-all"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Industries We Serve
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-black/90 leading-relaxed">
                From real estate, healthcare, to corporate industries, we serve all industry types with top-notch quality large format printing services. No matter your business type, we maximize your brand's presence with impactful prints.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail & Shopping Malls", image: "/indoor-retail-advertising-signage.jpg" },
              { name: "Restaurants & Cafes", image: "/restuarent.jpg" },
              { name: "Corporate Offices", image: "/corporate.jpg" },
              { name: "Healthcare & Clinics", image: "/modern-office-exterior.png" },
              { name: "Hotels & Hospitality", image: "/outdoor-building-signage-corporate.jpg" },
              { name: "Educational Institutions", image: "/industries/education.webp" },
              { name: "Fitness Centers & Gyms", image: "/indoor-retail-advertising-signage.jpg" },
              { name: "Real Estate & Builders", image: "/outdoor-building-signage-corporate.jpg" },
              { name: "Automotive Services", image: "/industrial-signage-manufacturing-machinery.jpg" },
              { name: "Banking & Finance", image: "/corporate.jpg" },
              { name: "Event Management", image: "/large-format-banner-printing-outdoor-promotional-e.jpg" },
              { name: "Manufacturing & Industrial", image: "/industrial-signage-manufacturing-machinery.jpg" },
            ].map((industry, idx) => (
              <div key={idx} className="group relative h-[250px] rounded-lg overflow-hidden bg-secondary hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-[70%] overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>
                {/* Content */}
                <div className="mt-4">
                  <p className="font-semibold text-black text-xl text-center">{industry.name}</p>
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
