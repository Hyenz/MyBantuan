import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Bell, FileText, User } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle>My Applications</CardTitle>
                  <CardDescription className="text-gray-400">Track your current applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-400">Active applications</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white/10" asChild>
                    <Link href="/application-tracking">
                      <FileText className="mr-2 h-4 w-4" />
                      View Applications
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription className="text-gray-400">Your recent updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-400">Unread notifications</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white/10" asChild>
                    <Link href="/application-tracking">
                      <Bell className="mr-2 h-4 w-4" />
                      View Notifications
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription className="text-gray-400">Manage your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">Update your personal information and preferences</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-white/10" asChild>
                    <Link href="#">
                      <User className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </ShineBorder>
          </div>

          <h2 className="text-2xl font-bold mb-4">Recommended Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((program) => (
              <ShineBorder key={program} borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <CardTitle>Financial Aid Program #{program}</CardTitle>
                    <CardDescription className="text-gray-400">Matching score: {85 + program}%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">
                      Provides assistance for qualified applicants with demonstrated financial need.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-white/10 rounded-full">Education</span>
                      <span className="px-2 py-1 bg-white/10 rounded-full">Housing</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-white/10">
                      Learn More
                    </Button>
                    <Button className="bg-white text-black hover:bg-gray-100">Apply Now</Button>
                  </CardFooter>
                </Card>
              </ShineBorder>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
