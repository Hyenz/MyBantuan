import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function AidMatchingPage() {
  const recommendedPrograms = [
    {
      id: 1,
      name: "Educational Support Grant",
      category: "Education",
      matchScore: 95,
      deadline: "May 15, 2025",
      description: "Financial assistance for students pursuing higher education",
    },
    {
      id: 2,
      name: "Housing Assistance Program",
      category: "Housing",
      matchScore: 92,
      deadline: "May 30, 2025",
      description: "Support for housing expenses and rent assistance",
    },
    {
      id: 3,
      name: "Medical Relief Fund",
      category: "Healthcare",
      matchScore: 88,
      deadline: "June 10, 2025",
      description: "Financial aid for medical expenses and treatments",
    },
    {
      id: 4,
      name: "Small Business Grant",
      category: "Business",
      matchScore: 75,
      deadline: "June 20, 2025",
      description: "Funding for small business owners and entrepreneurs",
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
    },
    {
      id: 6,
      name: "Digital Skills Training",
      category: "Education",
      matchScore: 60,
      deadline: "July 15, 2025",
      description: "Free training programs for digital and technical skills",
    },
  ]

  const eligibilityFactors = [
    { name: "Income Level", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { name: "Residency Status", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { name: "Age", status: "verified", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
    { name: "Education History", status: "pending", icon: <div className="h-4 w-4 rounded-full bg-yellow-500" /> },
    { name: "Employment Status", status: "pending", icon: <div className="h-4 w-4 rounded-full bg-yellow-500" /> },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32 pb-16 overflow-hidden">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Aid Matching & Recommendations</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our intelligent matching system analyzes your profile and eligibility factors to connect you with the most
              relevant aid programs available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                  <CardHeader>
                    <CardTitle>Your Personalized Recommendations</CardTitle>
                    <CardDescription className="text-gray-400">
                      Based on your profile and eligibility factors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                          type="search"
                          placeholder="Search programs..."
                          className="pl-8 bg-black/50 border-white/10"
                        />
                      </div>
                      <Button variant="outline" className="border-white/10 ml-2">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {recommendedPrograms.map((program) => (
                        <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                          <div className="bg-black/30 p-4 rounded-xl">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-medium">{program.name}</h3>
                                <p className="text-sm text-gray-400">{program.description}</p>
                              </div>
                              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                                {program.matchScore}% Match
                              </Badge>
                            </div>
                            <div className="mb-3">
                              <div className="flex items-center justify-between text-xs mb-1">
                                <span className="text-gray-400">Match Score</span>
                                <span>{program.matchScore}%</span>
                              </div>
                              <Progress value={program.matchScore} className="h-1.5" />
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="border-white/10 bg-white/5">
                                  {program.category}
                                </Badge>
                                <span className="text-gray-400">Deadline: {program.deadline}</span>
                              </div>
                              <Button size="sm" className="h-8 bg-white text-black hover:bg-gray-100">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </ShineBorder>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ShineBorder>
            </div>

            <div>
              <ShineBorder borderClassName="border border-white/10 rounded-xl mb-6">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <CardTitle>Eligibility Profile</CardTitle>
                    <CardDescription className="text-gray-400">
                      Complete your profile to improve matches
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {eligibilityFactors.map((factor) => (
                        <div key={factor.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {factor.icon}
                            <span>{factor.name}</span>
                          </div>
                          <Badge
                            className={
                              factor.status === "verified"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-yellow-500/20 text-yellow-500"
                            }
                          >
                            {factor.status === "verified" ? "Verified" : "Pending"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-white/10">
                      Update Profile
                    </Button>
                  </CardFooter>
                </Card>
              </ShineBorder>

              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <CardTitle>Match Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-400">Profile Completion</span>
                          <span>80%</span>
                        </div>
                        <Progress value={80} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-400">Matching Accuracy</span>
                          <span>95%</span>
                        </div>
                        <Progress value={95} className="h-1.5" />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-gray-400">
                          Complete your profile to improve matching accuracy and discover more programs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ShineBorder>
            </div>
          </div>

          <Tabs defaultValue="recommended" className="mb-10">
            <TabsList className="bg-white/10 text-white">
              <TabsTrigger value="recommended" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Recommended
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-black">
                All Programs
              </TabsTrigger>
              <TabsTrigger value="applied" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Applied
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommended">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedPrograms.map((program) => (
                  <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{program.name}</CardTitle>
                            <CardDescription className="text-gray-400">{program.description}</CardDescription>
                          </div>
                          <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                            {program.matchScore}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Category</p>
                            <p>{program.category}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Deadline</p>
                            <p>{program.deadline}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-white text-black hover:bg-gray-100">Apply Now</Button>
                      </CardFooter>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allPrograms.map((program) => (
                  <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{program.name}</CardTitle>
                            <CardDescription className="text-gray-400">{program.description}</CardDescription>
                          </div>
                          <Badge
                            className={
                              program.matchScore >= 80
                                ? "bg-green-500/20 text-green-500"
                                : program.matchScore >= 70
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : "bg-gray-500/20 text-gray-400"
                            }
                          >
                            {program.matchScore}% Match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Category</p>
                            <p>{program.category}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Deadline</p>
                            <p>{program.deadline}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-white text-black hover:bg-gray-100">Apply Now</Button>
                      </CardFooter>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applied">
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Applications Yet</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  You haven't applied to any aid programs yet. Browse our recommendations and start applying today.
                </p>
                <Button className="bg-white text-black hover:bg-gray-100">
                  <Link href="#recommended">View Recommendations</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <ShineBorder borderClassName="border border-white/10 rounded-xl">
            <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
              <CardHeader>
                <CardTitle>How Our Matching Works</CardTitle>
                <CardDescription className="text-gray-400">
                  Our intelligent system uses multiple factors to find the best aid programs for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="font-medium mb-2">Profile Analysis</h3>
                    <p className="text-sm text-gray-400">
                      We analyze your profile information including demographics, income, and needs
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="font-medium mb-2">Eligibility Matching</h3>
                    <p className="text-sm text-gray-400">
                      Our algorithm compares your profile against eligibility criteria for all available programs
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="font-medium mb-2">Personalized Recommendations</h3>
                    <p className="text-sm text-gray-400">
                      We present you with the most relevant programs ranked by match percentage
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" className="border-white/10">
                  Learn More About Our Matching Algorithm
                </Button>
              </CardFooter>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </main>
  )
}
