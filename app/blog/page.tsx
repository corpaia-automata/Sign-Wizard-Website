import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to LED 3D Letter Signage for Your Business",
    excerpt:
      "Discover how LED 3D letters can transform your storefront and increase customer footfall with illuminated branding.",
    image: "/placeholder.svg?height=300&width=500",
    category: "LED Signage",
    date: "December 10, 2024",
    author: "Sign Wizard Team",
  },
  {
    id: 2,
    title: "5 Ways Outdoor Signage Boosts Your Business Visibility",
    excerpt:
      "Learn proven strategies to maximize your outdoor advertising impact and attract more customers to your location.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Outdoor Advertising",
    date: "December 5, 2024",
    author: "Marketing Team",
  },
  {
    id: 3,
    title: "Choosing the Right Materials for Your Signage Project",
    excerpt:
      "A comprehensive guide to signage materials, their durability, cost-effectiveness, and ideal applications.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Industry Tips",
    date: "November 28, 2024",
    author: "Design Team",
  },
  {
    id: 4,
    title: "Indoor Advertising Trends for 2025",
    excerpt: "Stay ahead with the latest indoor signage trends that are reshaping retail and corporate spaces.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Trends",
    date: "November 20, 2024",
    author: "Sign Wizard Team",
  },
  {
    id: 5,
    title: "Laser Cutting vs Traditional Methods: Which is Better?",
    excerpt:
      "Explore the advantages of laser cutting technology and when to choose it over traditional fabrication methods.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Technology",
    date: "November 15, 2024",
    author: "Technical Team",
  },
  {
    id: 6,
    title: "Effective Signage Design: Principles That Convert",
    excerpt: "Master the fundamentals of signage design that captures attention and drives customer action.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Design",
    date: "November 10, 2024",
    author: "Design Team",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src="/placeholder.svg?height=300&width=1920"
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">Insights, tips, and trends in signage and branding</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-accent hover:text-accent/80 font-semibold inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
