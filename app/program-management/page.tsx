"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function ProgramManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "Bantuan Keluarga Malaysia (BKM)",
      category: "Financial Aid",
      deadline: "May 15, 2025",
      description:
        "Financial assistance for eligible Malaysian families with household income below RM5,000 per month.",
      tags: ["Financial", "Family"],
      amount: "RM2,000",
    },
    {
      id: 2,
      name: "Bantuan IPT",
      category: "Education",
      deadline: "May 30, 2025",
      description: "Financial assistance for higher education students at recognized institutions.",
      tags: ["Education", "Students"],
      amount: "RM1,500",
    },
    {
      id: 3,
      name: "eKasih Registration",
      category: "Poverty Alleviation",
      deadline: "June 15, 2025",
      description:
        "Registration for poverty database and assistance programs for households with income below poverty line.",
      tags: ["Poverty", "Registration"],
      amount: "Varies",
    },
    {
      id: 4,
      name: "Zakat Asnaf",
      category: "Religious Aid",
      deadline: "June 30, 2025",
      description: "Zakat distribution for eligible recipients who fall under asnaf categories.",
      tags: ["Religious", "Zakat"],
      amount: "Varies",
    },
  ])

  // Load programs from localStorage if available
  useEffect(() => {
    const savedPrograms = localStorage.getItem("adminPrograms")
    if (savedPrograms) {
      try {
        const parsedPrograms = JSON.parse(savedPrograms)
        if (Array.isArray(parsedPrograms) && parsedPrograms.length > 0) {
          setPrograms(
            parsedPrograms.map((program) => ({
              ...program,
              deadline: new Date(program.deadline).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
            })),
          )
        }
      } catch (error) {
        console.error("Error parsing programs:", error)
      }
    }
  }, [])

  // Filter programs based on search term
  const filteredPrograms = programs.filter((program) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      program.name.toLowerCase().includes(searchLower) ||
      program.category.toLowerCase().includes(searchLower) ||
      program.description.toLowerCase().includes(searchLower) ||
      program.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  })

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Program Management</h1>
              <p className="text-gray-600 mt-1">Browse and apply for available assistance programs</p>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search programs..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-gray-800">{program.name}</CardTitle>
                      <CardDescription>{program.category}</CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">{program.amount}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Deadline:</span> {program.deadline}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}

            {filteredPrograms.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No programs found matching your search criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </main>
  )
}
