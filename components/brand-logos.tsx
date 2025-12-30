"use client"

import Image from "next/image"

export function BrandLogos() {
  const logos = [
    { 
      name: "Comba", 
      src: "/comba logo.gif",
      alt: "Comba Logo"
    },
    { 
      name: "Airspan", 
      src: "/Airspan_Tagline-2048x417.png",
      alt: "Airspan Logo"
    },
    { 
      name: "iBwave", 
      src: "/logo-iBwave-rgb-red.svg",
      alt: "iBwave Logo"
    },
    { 
      name: "PTCL", 
      src: "/ptcl-logo-plain.svg",
      alt: "PTCL Logo"
    },
  ]

  return (
    <>
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wide">
            Trusted by leading enterprises worldwide
          </p>
          <div className="overflow-hidden">
            <div className="flex items-center gap-20 animate-scroll">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={48}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {logos.map((logo) => (
                <div
                  key={`${logo.name}-duplicate`}
                  className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={48}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}