import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Bell, FileText, User } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">My Applications</CardTitle>
                <CardDescription>Track your current applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">3</p>
                <p className="text-sm text-gray-600">Active applications</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/application-tracking">
                    <FileText className="mr-2 h-4 w-4" />
                    View Applications
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">Notifications</CardTitle>
                <CardDescription>Your recent updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-800">5</p>
                <p className="text-sm text-gray-600">Unread notifications</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/application-tracking">
                    <Bell className="mr-2 h-4 w-4" />
                    View Notifications
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-800">My Profile</CardTitle>
                <CardDescription>Manage your account</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Update your personal information and preferences</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#">
                    <User className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((program) => (
              <Card key={program} className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-800">Financial Aid Program #{program}</CardTitle>
                  <CardDescription>Matching score: {85 + program}%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-gray-700">
                    Provides assistance for qualified applicants with demonstrated financial need.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700">Education</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-700">Housing</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
