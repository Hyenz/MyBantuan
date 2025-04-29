"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"

interface Program {
  id: number
  name: string
  category: string
  imageUrl: string
  description: string
  shortDescription: string
  matchScore?: number
  deadline: string
  eligibility: string
  amount: string
  tags: string[]
}

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const [programs, setPrograms] = useState<Program[]>([
    {
      id: 1,
      name: "Bantuan Keluarga Malaysia (BKM)",
      category: "Financial",
      imageUrl: "/placeholder.svg?height=200&width=400",
      description:
        "Financial assistance for eligible Malaysian families with household income below RM5,000 per month. This program aims to alleviate the financial burden of low and middle-income households.",
      shortDescription: "Financial assistance for eligible Malaysian families",
      matchScore: 95,
      deadline: "May 15, 2025",
      eligibility: "Malaysian citizens with household income below RM5,000 per month",
      amount: "RM2,000",
      tags: ["Financial", "Family"],
    },
    {
      id: 2,
      name: "Bantuan IPT",
      category: "Education",
      imageUrl: "/placeholder.svg?height=200&width=400",
      description:
        "Financial assistance for higher education students at recognized institutions. This program supports students in pursuing their tertiary education by providing financial aid.",
      shortDescription: "Bantuan kewangan untuk pelajar IPT",
      matchScore: 88,
      deadline: "May 30, 2025",
      eligibility: "Full-time students at recognized institutions",
      amount: "RM1,500",
      tags: ["Education", "Students"],
    },
    {
      id: 3,
      name: "BANTUAN eKasih 2025",
      category: "Welfare",
      imageUrl: "/placeholder.svg?height=200&width=400",
      description:
        "Registration for poverty database and assistance programs for households with income below poverty line. This program helps identify and support families in need.",
      shortDescription: "Data kemiskinan nasional untuk penyaluran bantuan",
      matchScore: 75,
      deadline: "June 15, 2025",
      eligibility: "Households with income below poverty line",
      amount: "RM50, RM100 & RM200",
      tags: ["Welfare", "Poverty"],
    },
    {
      id: 4,
      name: "Bantuan Zakat Khas",
      category: "Zakat",
      imageUrl: "/placeholder.svg?height=200&width=400",
      description:
        "Zakat distribution for eligible recipients who fall under asnaf categories. This religious aid program supports those in need according to Islamic principles.",
      shortDescription: "Zakat distribution for eligible recipients",
      matchScore: 70,
      deadline: "June 30, 2025",
      eligibility: "Muslims who fall under asnaf categories",
      amount: "Varies",
      tags: ["Religious", "Zakat"],
    },
  ])

  // Load programs from localStorage if available
  useEffect(() => {
    const savedPrograms = localStorage.getItem("adminPrograms")
    if (savedPrograms) {
      try {
        const parsedPrograms = JSON.parse(savedPrograms)
        if (Array.isArray(parsedPrograms) && parsedPrograms.length > 0) {
          // Transform the admin programs to match our format
          const formattedPrograms = parsedPrograms.map((program) => ({
            id: program.id,
            name: program.name,
            category: program.category,
            imageUrl: "/placeholder.svg?height=200&width=400",
            description: program.description,
            shortDescription: program.description.substring(0, 60) + "...",
            matchScore: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
            deadline: new Date(program.deadline).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            eligibility: program.eligibility || "Contact for eligibility details",
            amount: program.amount || "Varies",
            tags: [program.category],
          }))
          setPrograms([...programs, ...formattedPrograms])
        }
      } catch (error) {
        console.error("Error parsing programs:", error)
      }
    }
  }, [])

  const categories = ["All", "Financial", "Education", "Welfare", "Zakat"]

  // Filter programs based on search term and active category
  const filteredPrograms = programs.filter((program) => {
    const matchesSearch =
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = activeCategory === "All" || program.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const handleProgramClick = (program: Program) => {
    setSelectedProgram(program)
    setIsDetailOpen(true)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">Programs & Assistance</h1>
            <p className="text-gray-600">Find and apply for available assistance programs</p>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="search"
              placeholder="Search assistance programs..."
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "All" && <span className="mr-1">🔄</span>}
                {category === "Financial" && <span className="mr-1">💰</span>}
                {category === "Education" && <span className="mr-1">🎓</span>}
                {category === "Welfare" && <span className="mr-1">👪</span>}
                {category === "Zakat" && <span className="mr-1">🕌</span>}
                {category}
              </Button>
            ))}
          </div>

          {/* Programs list */}
          <div className="space-y-4">
            {filteredPrograms.map((program) => (
              <Card
                key={program.id}
                className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleProgramClick(program)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/4 h-40 md:h-auto">
                    <Image
                      src={program.imageUrl || "/placeholder.svg"}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        program.category === "Education"
                          ? "bg-blue-100 text-blue-800"
                          : program.category === "Financial"
                            ? "bg-green-100 text-green-800"
                            : program.category === "Welfare"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {program.category}
                    </Badge>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{program.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{program.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {program.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">Deadline: {program.deadline}</p>
                      {program.matchScore && (
                        <Badge className="bg-green-100 text-green-800">{program.matchScore}% Match</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-lg">No programs found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Program Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-md">
          {selectedProgram && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProgram.name}</DialogTitle>
                <DialogDescription>{selectedProgram.shortDescription}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src={selectedProgram.imageUrl || "/placeholder.svg"}
                    alt={selectedProgram.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700">{selectedProgram.description}</p>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Eligibility</h4>
                  <p className="text-gray-700">{selectedProgram.eligibility}</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Deadline</h4>
                  <p className="text-gray-700">{selectedProgram.deadline}</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Amount</h4>
                  <p className="text-gray-700">{selectedProgram.amount}</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <BottomNavigation />
    </main>
  )
}
