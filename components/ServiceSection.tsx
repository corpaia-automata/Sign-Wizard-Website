"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceSectionProps {
  services: Service[];
  onQuoteClick: () => void;
  title?: string;
  description?: React.ReactNode;
}

export default function ServiceSection({ services, onQuoteClick, title, description }: ServiceSectionProps) {
  return (
    <section className="relative bg-background">
      {/* Heading Section */}
      {(title || description) && (
        <div className="container mx-auto px-4">
          <div className="max-w-7xl">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {title}
              </h2>
            )}
            {description && (
              <div className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </div>
            )}
          </div>
        </div>
      )}

      {/* This creates scroll space */}
      <div style={{ height: `${services.length * 100}vh` }}>
        {services.map((service, index) => (
          <div
            key={service.title}
            className="sticky top-0 h-screen flex items-center bg-background"
            style={{ zIndex: index + 1 }}
          >
            <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 gap-2 items-center">
              {/* LEFT */}
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  onClick={onQuoteClick}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* RIGHT */}
              <div className="h-[70vh] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
