import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <div className="w-[150px]">
              <Image
                src="/sign_wizard.png"
                alt="Sign Wizard Logo"
                width={150}
                height={60}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* <p className="text-sm text-[#06177f] leading-relaxed">
              Your trusted partner in professional signage, printing, and branding solutions. Transforming brands with
              innovative designs and quality craftsmanship since 2010.
            </p> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#06177f]">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/led-3d-letters"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  LED 3D Letter Signage
                </Link>
              </li>
              <li>
                <Link
                  href="/services/indoor-advertising"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  Indoor Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services/outdoor-advertising"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  Outdoor Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services/printing"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  Printing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/laser-cutting"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  Laser Cutting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#06177f]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#06177f] hover:text-[#06177f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#06177f] hover:text-[#06177f] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-[#06177f] hover:text-[#06177f] transition-colors">
                  Our Clients
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-white/90 hover:text-white transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-[#06177f] hover:text-[#06177f] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#06177f]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#06177f]" />
                <span className="text-[#06177f]">Near Canara Bank, Athimannil Complex, Court Road, Manjeri, India, Kerala</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#06177f]" />
                <a href="tel:+919946207070" className="text-[#06177f] hover:text-[#06177f] transition-colors">
                  099462 07070
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 flex-shrink-0 text-[#06177f]" />
                <a
                  href="https://wa.me/919072834834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  +91 90728 34834
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#06177f]" />
                <a
                  href="mailto:signwizardmjr@gmail.com"
                  className="text-[#06177f] hover:text-[#06177f] transition-colors"
                >
                  signwizardmjr@gmail.com
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-[#06177f] mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm text-white/90">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-center sm:text-left">
            <p className="text-[#06177f] text-xs sm:text-sm">&copy; {new Date().getFullYear()} Sign Wizard. All rights reserved.</p>
            <p className="text-[#06177f] text-xs sm:text-sm">Privacy Policy | Terms of Service</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/www.signwizard.in/" className="text-[#06177f] transition-colors">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://www.instagram.com/signwizard.in/?hl=en" className="text-[#06177f] hover:text-[#06177f] transition-colors">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://www.linkedin.com" className="text-[#06177f] transition-colors">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
