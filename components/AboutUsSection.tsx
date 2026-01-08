export function AboutUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="w-full">
            <img
              src="/sign-boards.png"
              alt="Large Format Printing Machine"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About <span className="text-primary">Sign Wizard</span>
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="leading-relaxed">
                Sign Wizard was established with a clear focus to deliver reliable, high-quality signage solutions that help businesses
                communicate clearly and stand out in competitive environments. From the beginning, our approach has been rooted in
                precision, consistency, and disciplined execution.
              </p>
              <p className="leading-relaxed">
                Over the years, we have partnered with businesses across retail, healthcare, corporate, real estate, and commercial
                sectors, delivering signage projects of varying scale and complexity. Our growth has been driven by repeat clients,
                strong referrals, and a reputation for dependable delivery.
              </p>
              <p className="leading-relaxed">
                Today, Sign Wizard operates with modern production capabilities, experienced designers and fabricators, and a structured
                workflow that ensures quality at every stage from concept and fabrication to installation. As the industry evolves,
                we continue to adapt while staying committed to craftsmanship and long-term value.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-accent/10 border-2 border-accent/20 rounded-xl p-6 hover:bg-accent/15 transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <div className="text-lg font-semibold text-primary">Years of Experience</div>
              </div>
              <div className="bg-accent/10 border-2 border-accent/20 rounded-xl p-6 hover:bg-accent/15 transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">2 Lakh+</div>
                <div className="text-lg font-semibold text-primary">Projects Completed</div>
              </div>
              <div className="bg-accent/10 border-2 border-accent/20 rounded-xl p-6 hover:bg-accent/15 transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-lg font-semibold text-primary">Team Members</div>
              </div>
              <div className="bg-accent/10 border-2 border-accent/20 rounded-xl p-6 hover:bg-accent/15 transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">1 Lakh+</div>
                <div className="text-lg font-semibold text-primary">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

