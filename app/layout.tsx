import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Funnel Sans is loaded via CSS @import, but we'll reference it via CSS variable for consistency

export const metadata: Metadata = {
  title: "Sign Wizard - Professional Signage, Printing & Branding Solutions",
  description:
    "Leading signage company offering LED 3D letters, indoor & outdoor advertising, printing, laser cutting, and complete branding solutions for businesses.",
  keywords: "signage, LED signage, 3D letters, printing, branding, laser cutting, outdoor advertising, indoor signage",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
