"use client"

interface HeroProps {
  onQuoteClick?: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#06177f]">
      {/* ===== Background Image ===== */}
      <img
        src="/home.jpg"
        alt="Sign Wizard Background"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#06177f]/90" />

      {/* ===== CONTENT WRAPPER (THIS IS THE FIX) ===== */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[550px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* ===== LEFT TEXT ===== */}
          <div className="text-white py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              <span className="inline-block bg-accent px-4 py-2 rounded-lg mb-2">
                Over 20 Years
              </span>
              <br className="hidden sm:block" />
              of Precision Signage Quality & Consistency
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
              Sign Wizard is a trusted signage partner across Kerala and India,
              delivering clear and durable signage since 2005.
            </p>
          </div>

          {/* ===== RIGHT IMAGE (PERSON) ===== */}
          <div className="relative hidden lg:flex justify-end">
            <img
              src="/hero-person.png"
              alt="Sign Wizard Expert"
              className="h-[520px] xl:h-[580px] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ===== STATS SECTION (UNCHANGED DESIGN) ===== */}
      <div className="relative bg-white py-10">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            <div className="flex rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-accent px-6 py-5 flex items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold text-white">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex-1 flex items-center justify-center px-4">
                <span className="text-lg font-semibold text-white text-center">
                  Project Completed
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-accent px-6 py-5 flex items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold text-white">2 Lakh+</span>
              </div>
              <div className="bg-[#06177f] flex-1 flex items-center justify-center px-4">
                <span className="text-lg font-semibold text-white text-center">
                  Happy Clients
                </span>
              </div>
            </div>

            <div className="flex rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-accent px-6 py-5 flex items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold text-white">20+</span>
              </div>
              <div className="bg-[#06177f] flex-1 flex items-center justify-center px-4">
                <span className="text-lg font-semibold text-white text-center">
                  Years of Experience
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
