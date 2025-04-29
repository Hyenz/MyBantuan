"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AidMatchingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Sample data for recommended programs
  const recommendedPrograms = [
    {
      id: 1,
      name: "Educational Support Grant",
      category: "Education",
      matchScore: 95,
      deadline: "May 15, 2025",
      description: "Financial assistance for students pursuing higher education",
      imageUrl: "/images/bantuan-ipt.png",
    },
    {
      id: 2,
      name: "Housing Assistance Program",
      category: "Housing",
      matchScore: 92,
      deadline: "May 30, 2025",
      description: "Support for housing expenses and rent assistance",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      name: "Medical Relief Fund",
      category: "Healthcare",
      matchScore: 88,
      deadline: "June 10, 2025",
      description: "Financial aid for medical expenses and treatments",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      name: "Small Business Grant",
      category: "Business",
      matchScore: 75,
      deadline: "June 20, 2025",
      description: "Funding for small business owners and entrepreneurs",
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
  ]

  const allPrograms = [
    ...recommendedPrograms,
    {
      id: 5,
      name: "Food Security Initiative",
      category: "Food",
      matchScore: 65,
      deadline: "July 5, 2025",
      description: "Support for families facing food insecurity",
      imageUrl: "/images/bkm.png",
    },
    {
      id: 6,
      name: "Digital Skills Training",
      category: "Education",
      matchScore: 60,
      deadline: "July 15, 2025",
      description: "Free training programs for digital and technical skills",
      imageUrl: "/images/bantuan-ipt.png",
    },
    {
      id: 7,
      name: "BANTUAN eKasih 2025",
      category: "Welfare",
      matchScore: 85,
      deadline: "June 15, 2025",
      description: "Registration for poverty database and assistance programs",
      imageUrl: "/images/ekasih.png",
    },
    {
      id: 8,
      name: "Bantuan Zakat Khas",
      category: "Religious Aid",
      matchScore: 78,
      deadline: "June 30, 2025",
      description: "Zakat distribution for eligible recipients",
      imageUrl: "/images/zakat-maiwp.png",
    },
  ]

  const eligibilityFactors = [
    { name: "Income Level", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { name: "Residency Status", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { name: "Age", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { name: "Education History", status: "pending", icon: <div className="h-4 w-4 rounded-full bg-yellow-500" /> },
    { name: "Employment Status", status: "pending", icon: <div className="h-4 w-4 rounded-full bg-yellow-500" /> },
  ]

  // Filter programs based on search term
  const filteredRecommendedPrograms = recommendedPrograms.filter(
    (program) =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredAllPrograms = allPrograms.filter(
    (program) =>
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Aid Matching & Recommendations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our intelligent matching system analyzes your profile and eligibility factors to connect you with the most
              relevant aid programs available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Your Personalized Recommendations</CardTitle>
                  <CardDescription>Based on your profile and eligibility factors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Search programs..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" className="ml-2">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {filteredRecommendedPrograms.length > 0 ? (
                      filteredRecommendedPrograms.map((program) => (
                        <Card key={program.id} className="overflow-hidden">
                          <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-medium text-gray-900">{program.name}</h3>
                                <p className="text-sm text-gray-600">{program.description}</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                {program.matchScore}% Match
                              </Badge>
                            </div>
                            <div className="mb-3">
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-gray-500">Match Score</span>
                                <span className="text-gray-900">{program.matchScore}%</span>
                              </div>
                              <Progress value={program.matchScore} className="h-1.5" />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{program.category}</Badge>
                                <span className="text-gray-500">Deadline: {program.deadline}</span>
                              </div>
                              <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No matching programs found. Try adjusting your search.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-gray-900">Eligibility Profile</CardTitle>
                  <CardDescription>Complete your profile to improve matches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {eligibilityFactors.map((factor) => (
                      <div key={factor.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {factor.icon}
                          <span className="text-gray-700">{factor.name}</span>
                        </div>
                        <Badge
                          className={
                            factor.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {factor.status === "verified" ? "Verified" : "Pending"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Match Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-500">Profile Completion</span>
                        <span className="text-gray-900">80%</span>
                      </div>
                      <Progress value={80} className="h-1.5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-500">Matching Accuracy</span>
                        <span className="text-gray-900">95%</span>
                      </div>
                      <Progress value={95} className="h-1.5" />
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-600">
                        Complete your profile to improve matching accuracy and discover more programs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="recommended" className="mb-10">
            <TabsList className="mb-6">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="applied">Applied</TabsTrigger>
            </TabsList>

            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRecommendedPrograms.length > 0 ? (
                  filteredRecommendedPrograms.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-gray-900">{program.name}</CardTitle>
                            <CardDescription>{program.description}</CardDescription>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            {program.matchScore}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Category</p>
                            <p className="text-gray-900">{program.category}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Deadline</p>
                            <p className="text-gray-900">{program.deadline}</p>
                          </div>
                        </div>
                        <div className="mt-4 relative w-full h-32 rounded-md overflow-hidden">
                          <Image
                            src={program.imageUrl || "/placeholder.svg"}
                            alt={program.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-gray-500">No matching programs found. Try adjusting your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAllPrograms.length > 0 ? (
                  filteredAllPrograms.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-gray-900">{program.name}</CardTitle>
                            <CardDescription>{program.description}</CardDescription>
                          </div>
                          <Badge
                            className={
                              program.matchScore >= 80
                                ? "bg-green-100 text-green-800"
                                : program.matchScore >= 70
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }
                          >
                            {program.matchScore}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Category</p>
                            <p className="text-gray-900">{program.category}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Deadline</p>
                            <p className="text-gray-900">{program.deadline}</p>
                          </div>
                        </div>
                        <div className="mt-4 relative w-full h-32 rounded-md overflow-hidden">
                          <Image
                            src={program.imageUrl || "/placeholder.svg"}
                            alt={program.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-gray-500">No matching programs found. Try adjusting your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="applied">
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">No Applications Yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  You haven't applied to any aid programs yet. Browse our recommendations and start applying today.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#recommended">View Recommendations</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">How Our Matching Works</CardTitle>
              <CardDescription>
                Our intelligent system uses multiple factors to find the best aid programs for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-900">Profile Analysis</h3>
                  <p className="text-sm text-gray-600">
                    We analyze your profile information including demographics, income, and needs
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-900">Eligibility Matching</h3>
                  <p className="text-sm text-gray-600">
                    Our algorithm compares your profile against eligibility criteria for all available programs
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-medium mb-2 text-gray-900">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-600">
                    We present you with the most relevant programs ranked by match percentage
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
