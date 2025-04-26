import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CheckCircle, Clock, FileText, XCircle } from "lucide-react"

export default function ApplicationTrackingPage() {
  const applications = [
    {
      id: 1,
      program: "Educational Grant Program",
      status: "approved",
      date: "April 15, 2025",
      description: "Financial assistance for continuing education",
    },
    {
      id: 2,
      program: "Housing Assistance Initiative",
      status: "under_review",
      date: "April 20, 2025",
      description: "Support for housing expenses and rent assistance",
    },
    {
      id: 3,
      program: "Career Development Fund",
      status: "submitted",
      date: "April 22, 2025",
      description: "Funding for professional development courses",
    },
    {
      id: 4,
      program: "Emergency Relief Grant",
      status: "rejected",
      date: "April 10, 2025",
      description: "One-time financial assistance for emergencies",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Application Status Update",
      message: "Your Educational Grant Program application has been approved!",
      date: "April 15, 2025",
      read: false,
    },
    {
      id: 2,
      title: "New Program Available",
      message: "A new Digital Skills Training Program is now accepting applications.",
      date: "April 18, 2025",
      read: false,
    },
    {
      id: 3,
      title: "Document Request",
      message: "Please submit additional documentation for your Housing Assistance application.",
      date: "April 21, 2025",
      read: false,
    },
    {
      id: 4,
      title: "Application Deadline Reminder",
      message: "The Small Business Grant application deadline is in 3 days.",
      date: "April 22, 2025",
      read: true,
    },
    {
      id: 5,
      title: "Application Rejected",
      message: "Your Emergency Relief Grant application was not approved.",
      date: "April 10, 2025",
      read: true,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "under_review":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "submitted":
        return <FileText className="h-5 w-5 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Rejected</Badge>
      case "under_review":
        return <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">Under Review</Badge>
      case "submitted":
        return <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">Submitted</Badge>
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Application Tracking & Notifications</h1>

          <Tabs defaultValue="applications" className="mb-10">
            <TabsList className="bg-white/10 text-white">
              <TabsTrigger value="applications" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Applications
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Notifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="applications">
              <div className="grid grid-cols-1 gap-4">
                {applications.map((app) => (
                  <ShineBorder key={app.id} borderClassName="border border-white/10 rounded-xl">
                    <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {getStatusIcon(app.status)}
                            {app.program}
                          </CardTitle>
                          <CardDescription className="text-gray-400">{app.description}</CardDescription>
                        </div>
                        {getStatusBadge(app.status)}
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>Submitted: {app.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="grid grid-cols-1 gap-4">
                {notifications.map((notification) => (
                  <ShineBorder key={notification.id} borderClassName="border border-white/10 rounded-xl">
                    <Card
                      className={`bg-black/50 backdrop-blur-xl border-0 text-white ${!notification.read ? "border-l-4 border-l-blue-500" : ""}`}
                    >
                      <CardHeader className="flex flex-row items-start justify-between">
                        <div className="flex gap-3">
                          <Bell
                            className={`h-5 w-5 mt-0.5 ${!notification.read ? "text-blue-500" : "text-gray-400"}`}
                          />
                          <div>
                            <CardTitle className="text-lg">{notification.title}</CardTitle>
                            <CardDescription className="text-gray-400 mt-1">{notification.message}</CardDescription>
                          </div>
                        </div>
                        {!notification.read && (
                          <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">New</Badge>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{notification.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </ShineBorder>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
