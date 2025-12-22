import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/sign_wizard.png"
                alt="Sign Wizard Logo"
                width={150}
                height={60}
                className="h-auto w-auto object-contain"
              />
            </div>
            <p className="text-sm text-black leading-relaxed">
              Your trusted partner in professional signage, printing, and branding solutions. Transforming brands with
              innovative designs and quality craftsmanship since 2010.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/led-3d-letters"
                  className="text-black hover:text-accent transition-colors"
                >
                  LED 3D Letter Signage
                </Link>
              </li>
              <li>
                <Link
                  href="/services/indoor-advertising"
                  className="text-black hover:text-accent transition-colors"
                >
                  Indoor Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services/outdoor-advertising"
                  className="text-black hover:text-accent transition-colors"
                >
                  Outdoor Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services/printing"
                  className="text-black hover:text-accent transition-colors"
                >
                  Printing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/laser-cutting"
                  className="text-black hover:text-accent transition-colors"
                >
                  Laser Cutting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-black hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-black hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-black hover:text-accent transition-colors">
                  Our Clients
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-black hover:text-accent transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-black hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-black hover:text-accent transition-colors">Near Canara Bank, Athimannil Complex, Court Road, Manjeri, India, Kerala</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+919946207070" className="text-black hover:text-accent transition-colors">
                  099462 07070
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://wa.me/919072834834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-accent transition-colors"
                >
                  +91 90728 34834
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:signwizardmjr@gmail.com"
                  className="text-black hover:text-accent transition-colors"
                >
                  signwizardmjr@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/www.signwizard.in/" className="text-black hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/signwizard.in/?hl=en" className="text-black hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-8 text-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} Sign Wizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
