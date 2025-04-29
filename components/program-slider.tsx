"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Program {
  id: number
  title: string
  imageUrl: string
  description: string
}

export function ProgramSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: 1,
      title: "Bantuan Keluarga Malaysia 2025",
      imageUrl: "/images/bkm.png",
      description: "Latest Government Assistance",
    },
    {
      id: 2,
      title: "Bantuan IPT",
      imageUrl: "/images/bantuan-ipt.png",
      description: "Education Assistance for Students",
    },
    {
      id: 3,
      title: "BANTUAN eKasih 2025",
      imageUrl: "/images/ekasih.png",
      description: "Financial Support for Eligible Families",
    },
    {
      id: 4,
      title: "Bantuan Zakat Khas",
      imageUrl: "/images/zakat-maiwp.png",
      description: "Religious Aid for Eligible Recipients",
    },
  ])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === programs.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [programs.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === programs.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? programs.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl">
      {/* Slides */}
      {programs.map((program, index) => (
        <div
          key={program.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={program.imageUrl || "/placeholder.svg"}
              alt={program.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{program.title}</h2>
              <p className="text-lg md:text-xl mb-4">{program.description}</p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/programs">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {programs.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"} transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
