"use client"

import { MessageSquare } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  const phoneNumber = "919072834834" // Remove + and spaces for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </Link>
  )
}

