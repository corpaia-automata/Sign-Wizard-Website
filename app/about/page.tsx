import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FAQ } from "@/components/faq"
import { Target, Eye, Award, ArrowRight, PenTool, Factory, ShieldCheck, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SisterConcerns } from "@/components/sister-concerns"
import { OurStory } from "@/components/our-story"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img src="/professional-team-signage-manufacturing.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Sign Wizard</h1>
          <p className="text-xl max-w-2xl mx-auto">Crafting excellence in signage and branding for over 15 years</p>
        </div>
      </section>

      {/* Our Story */}
      {/* <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-4">
              Our <span className="text-accent">Story</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 items-center">
              <div>
                <img
                  src="/sign-boards.png"
                  alt="Our Story"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sign Wizard was established with a clear focus to deliver reliable, high-quality signage solutions that help businesses
                  communicate clearly and stand out in competitive environments. From the beginning, our approach has been rooted in
                  precision, consistency, and disciplined execution.
                </p>
                <p>
                  Over the years, we have partnered with businesses across retail, healthcare, corporate, real estate, and commercial
                  sectors, delivering signage projects of varying scale and complexity. Our growth has been driven by repeat clients,
                  strong referrals, and a reputation for dependable delivery.
                </p>
                <p>
                  Today, Sign Wizard operates with modern production capabilities, experienced designers and fabricators, and a structured
                  workflow that ensures quality at every stage from concept and fabrication to installation. As the industry evolves,
                  we continue to adapt while staying committed to craftsmanship and long-term value.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section> */}

      <OurStory/>

      {/* Founder Section */}
      {/* <section className="py-20 bg-secondary">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/professional-business-founder-portrait.jpg" alt="Founder" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Founder</h2>
                <h3 className="text-xl font-semibold mb-2">Rajesh Mehta</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 20 years of experience in the signage industry, Rajesh founded Sign Wizard with a vision to
                  revolutionize how businesses approach their visual branding. His expertise in design, manufacturing,
                  and business strategy has been instrumental in establishing Sign Wizard as a leader in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under his leadership, the company has expanded its capabilities, invested in cutting-edge technology,
                  and built a team committed to excellence in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Vision, Mission & Values */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-12 text-center">
              Our <span className="text-accent">Vision</span>, Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full flex flex-col">
                <CardContent className="p-8 text-center flex flex-col flex-1">
                  <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    To be the most trusted and innovative signage solutions provider, empowering businesses to achieve
                    maximum brand visibility and impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardContent className="p-8 text-center flex flex-col flex-1">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Deliver exceptional signage and branding solutions through quality craftsmanship, innovative design,
                    and unparalleled customer service.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full flex flex-col">
                <CardContent className="p-8 text-center flex flex-col flex-1">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Quality, integrity, innovation, and customer satisfaction drive everything we do. We believe in
                    building lasting relationships through excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 w-full bg-secondary/30">
        <div className="w-full max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-center">We Have Best Team and <span className="text-accent">Best Process</span></h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Our streamlined process ensures your signage project is completed with precision, quality, and efficiency from start to finish.
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch max-w-8xl mx-auto">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                icon: PenTool,
                isFeatured: false,
              },
              {
                step: "02",
                title: "Design Development",
                desc: "Our creative team develops custom design concepts tailored to your brand. We present multiple options for your approval, ensuring your vision comes to life with precision and creativity.",
                image: "/graphic-design-branding.jpg",
                icon: PenTool,
                isFeatured: true,
              },
              {
                step: "03",
                title: "Approval & Production",
                icon: Factory,
                isFeatured: false,
              },
              {
                step: "04",
                title: "Quality Check",
                icon: ShieldCheck,
                isFeatured: false,
              },
              {
                step: "05",
                title: "Installation",
                icon: Wrench,
                isFeatured: false,
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex flex-col rounded-lg overflow-hidden transition-all duration-300 ${item.isFeatured
                  ? "bg-background border-2 border-accent/20 shadow-2xl shadow-accent/20 lg:scale-[1.05] lg:z-10 flex-[1.4] lg:mx-[-8px]"
                  : "bg-background border border-border/50 shadow-sm flex-1"
                  }`}
              >
                {item.isFeatured ? (
                  <div className="p-6 lg:p-8">
                    {/* Large faded number */}
                    <div className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-muted-foreground/10 leading-none mb-4 -mt-4">
                      {item.step}.
                    </div>

                    {/* Image */}
                    {item.image && (
                      <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Icon - Just above title */}
                    {item.icon && (
                      <div className="mb-3">
                        <item.icon className="h-7 w-7 text-muted-foreground" />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    {item.desc && (
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="p-6 lg:p-8 flex flex-col h-full">
                    {/* Large faded number */}
                    <div className="text-[80px] md:text-[100px] font-bold text-muted-foreground/10 leading-none mb-8 -mt-4">
                      {item.step}.
                    </div>

                    {/* Icon */}
                    {item.icon && (
                      <div className="mb-6">
                        <item.icon className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}

                    {/* Title */}
                    <div className="mt-auto">
                      <h3 className="text-lg md:text-2xl lg:text-2xl font-bold text-primary">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <WhyChooseUs />
      <SisterConcerns />

      {/* FAQ */}
      <FAQ />

      <Footer />
    </div>
  )
}
