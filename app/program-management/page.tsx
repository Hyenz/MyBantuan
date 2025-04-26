import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, FileText, PlusCircle, Users } from "lucide-react"

export default function ProgramManagementPage() {
  const activePrograms = [
    {
      id: 1,
      name: "Educational Support Grant",
      category: "Education",
      applicants: 45,
      deadline: "May 15, 2025",
      status: "active",
    },
    {
      id: 2,
      name: "Housing Assistance Program",
      category: "Housing",
      applicants: 78,
      deadline: "May 30, 2025",
      status: "active",
    },
    {
      id: 3,
      name: "Medical Relief Fund",
      category: "Healthcare",
      applicants: 32,
      deadline: "June 10, 2025",
      status: "active",
    },
  ]

  const draftPrograms = [
    {
      id: 4,
      name: "Small Business Grant",
      category: "Business",
      status: "draft",
      lastUpdated: "April 22, 2025",
    },
    {
      id: 5,
      name: "Food Security Initiative",
      category: "Food",
      status: "draft",
      lastUpdated: "April 20, 2025",
    },
  ]

  const closedPrograms = [
    {
      id: 6,
      name: "Emergency Relief Fund",
      category: "Emergency",
      applicants: 120,
      endDate: "April 10, 2025",
      status: "closed",
    },
    {
      id: 7,
      name: "Digital Skills Training",
      category: "Education",
      applicants: 65,
      endDate: "March 30, 2025",
      status: "closed",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32 pb-16 overflow-hidden">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Aid Program Management</h1>
            <Button className="bg-white text-black hover:bg-gray-100">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Program
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Active Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{activePrograms.length}</p>
                  <p className="text-sm text-gray-400">Currently accepting applications</p>
                </CardContent>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Total Applicants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {activePrograms.reduce((sum, program) => sum + program.applicants, 0)}
                  </p>
                  <p className="text-sm text-gray-400">Across all active programs</p>
                </CardContent>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-400">Programs closing soon</p>
                </CardContent>
              </Card>
            </ShineBorder>
          </div>

          <Tabs defaultValue="active" className="mb-10">
            <TabsList className="bg-white/10 text-white">
              <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Active Programs
              </TabsTrigger>
              <TabsTrigger value="drafts" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Drafts
              </TabsTrigger>
              <TabsTrigger value="closed" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Closed Programs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <div className="grid grid-cols-1 gap-4">
                {activePrograms.map((program) => (
                  <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>{program.name}</CardTitle>
                          <CardDescription className="text-gray-400">Category: {program.category}</CardDescription>
                        </div>
                        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Active</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4">
                          <div>
                            <p className="text-sm text-gray-400">Applicants</p>
                            <p className="font-medium">{program.applicants}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Deadline</p>
                            <p className="font-medium">{program.deadline}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" className="border-white/10">
                          View Applicants
                        </Button>
                        <Button variant="outline" className="border-white/10">
                          Edit Program
                        </Button>
                      </CardFooter>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drafts">
              <div className="grid grid-cols-1 gap-4">
                {draftPrograms.map((program) => (
                  <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>{program.name}</CardTitle>
                          <CardDescription className="text-gray-400">Category: {program.category}</CardDescription>
                        </div>
                        <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Draft</Badge>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <p className="text-sm text-gray-400">Last Updated</p>
                          <p className="font-medium">{program.lastUpdated}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" className="border-white/10">
                          Edit Draft
                        </Button>
                        <Button className="bg-white text-black hover:bg-gray-100">Publish Program</Button>
                      </CardFooter>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="closed">
              <div className="grid grid-cols-1 gap-4">
                {closedPrograms.map((program) => (
                  <ShineBorder key={program.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>{program.name}</CardTitle>
                          <CardDescription className="text-gray-400">Category: {program.category}</CardDescription>
                        </div>
                        <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30">Closed</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4">
                          <div>
                            <p className="text-sm text-gray-400">Total Applicants</p>
                            <p className="font-medium">{program.applicants}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">End Date</p>
                            <p className="font-medium">{program.endDate}</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2">
                        <Button variant="outline" className="border-white/10">
                          View Results
                        </Button>
                        <Button variant="outline" className="border-white/10">
                          Archive
                        </Button>
                      </CardFooter>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <ShineBorder borderClassName="border border-white/10 rounded-xl">
            <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
              <CardHeader>
                <CardTitle>Program Management Guide</CardTitle>
                <CardDescription className="text-gray-400">
                  Learn how to effectively manage your aid programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Create a Program</p>
                      <p className="text-sm text-gray-400">
                        Define eligibility criteria, required documents, and application deadlines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Review Applications</p>
                      <p className="text-sm text-gray-400">
                        Evaluate submitted applications against your defined criteria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Distribute Aid</p>
                      <p className="text-sm text-gray-400">Process approved applications and distribute resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Track Impact</p>
                      <p className="text-sm text-gray-400">
                        Monitor outcomes and gather feedback to improve future programs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-white/10 w-full">
                  View Full Documentation
                </Button>
              </CardFooter>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </main>
  )
}
