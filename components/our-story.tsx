"use client"

export function OurStory() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      {/* Top Section - Text and Favicon */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Left Side - Text Content (60%) */}
          <div className="lg:w-[60%] w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#06177f] mb-6 sm:mb-8">
              Our Story
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-justify text-[#06177f] leading-relaxed">
              <p>
                Sign Wizard, based in Manjeri, Malappuram, has been a leader in the signage industry in Kerala and across India since 2005.
                We specialize in indoor and outdoor advertising solutions, handling everything from concept to installation. Our team combines
                creativity, precision, and advanced technology to craft durable and impactful signage that helps businesses stand out.
              </p>
              <p>
                With years of experience and a commitment to excellence, we transform spaces into experiences. Whether it's a small retail
                storefront or a large-scale outdoor billboard, we deliver solutions that not only meet but exceed our clients' expectations.
                Our approach is rooted in understanding your brand's unique identity and translating it into compelling visual communication.
              </p>
              <p>
                At Sign Wizard, we believe that great signage is more than just displaying information—it's about creating lasting impressions,
                building brand recognition, and driving business success. We work closely with our clients throughout the entire process,
                ensuring that every project reflects their vision and values while maintaining the highest standards of quality and durability.
              </p>
            </div>
          </div>

          {/* Right Side - Favicon (40%) */}
          <div className="lg:w-[40%] w-full flex items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-md">
              <img
                src="/logo.png"
                alt="Sign Wizard Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Billboard Image */}
      <div className="w-full px-4 sm:px-6">
        <img
          src="/billboard.jpg"
          alt="Sign Wizard Billboard"
          className="w-full max-w-7xl mx-auto h-auto object-cover rounded-xl sm:rounded-2xl"
        />
      </div>
    </section>
  )
}

