import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Search, Shield, Users } from "lucide-react"

export default function AdminControlPanelPage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "Organization",
      status: "Pending Verification",
    },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "User", status: "Inactive" },
    { id: 5, name: "Michael Wilson", email: "michael@example.com", role: "Admin", status: "Active" },
  ]

  const reports = [
    { id: 1, type: "Account Issue", status: "Open", reporter: "John Doe", date: "April 22, 2025" },
    { id: 2, type: "Suspicious Activity", status: "Under Review", reporter: "Jane Smith", date: "April 21, 2025" },
    { id: 3, type: "Technical Problem", status: "Resolved", reporter: "Robert Johnson", date: "April 20, 2025" },
  ]

  const organizations = [
    { id: 1, name: "Community Support Foundation", status: "Verified", programs: 5 },
    { id: 2, name: "Education First Initiative", status: "Pending Verification", programs: 3 },
    { id: 3, name: "Housing Assistance Network", status: "Verified", programs: 7 },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Control Panel</h1>
            <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30 px-3 py-1">Admin Access</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">152</p>
                  <p className="text-sm text-gray-400">Total users</p>
                </CardContent>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-400">Open issues</p>
                </CardContent>
              </Card>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl">
              <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    System Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-500">Secure</p>
                  <p className="text-sm text-gray-400">Last scan: 2 hours ago</p>
                </CardContent>
              </Card>
            </ShineBorder>
          </div>

          <Tabs defaultValue="users" className="mb-10">
            <TabsList className="bg-white/10 text-white">
              <TabsTrigger value="users" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Users
              </TabsTrigger>
              <TabsTrigger
                value="organizations"
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Organizations
              </TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>User Management</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            type="search"
                            placeholder="Search users..."
                            className="pl-8 bg-black/50 border-white/10"
                          />
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px] bg-black/50 border-white/10">
                            <SelectValue placeholder="Filter by role" />
                          </SelectTrigger>
                          <SelectContent className="bg-black/90 text-white border-white/10">
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="organization">Organization</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-white/10 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-white/10">
                          <tr>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Role</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id} className="border-t border-white/10">
                              <td className="py-3 px-4">{user.name}</td>
                              <td className="py-3 px-4">{user.email}</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-white/10 hover:bg-white/20">{user.role}</Badge>
                              </td>
                              <td className="py-3 px-4">
                                <Badge
                                  className={
                                    user.status === "Active"
                                      ? "bg-green-500/20 text-green-500"
                                      : user.status === "Inactive"
                                        ? "bg-red-500/20 text-red-500"
                                        : "bg-yellow-500/20 text-yellow-500"
                                  }
                                >
                                  {user.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm" className="h-8 border-white/10">
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 border-white/10 hover:bg-red-500/20 hover:text-red-500"
                                  >
                                    Suspend
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </ShineBorder>
            </TabsContent>

            <TabsContent value="organizations">
              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <CardTitle>Organization Verification</CardTitle>
                    <CardDescription className="text-gray-400">
                      Verify organizations before they can publish aid programs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-white/10 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-white/10">
                          <tr>
                            <th className="py-3 px-4 text-left">Organization</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Programs</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {organizations.map((org) => (
                            <tr key={org.id} className="border-t border-white/10">
                              <td className="py-3 px-4">{org.name}</td>
                              <td className="py-3 px-4">
                                <Badge
                                  className={
                                    org.status === "Verified"
                                      ? "bg-green-500/20 text-green-500"
                                      : "bg-yellow-500/20 text-yellow-500"
                                  }
                                >
                                  {org.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4">{org.programs}</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm" className="h-8 border-white/10">
                                    View Details
                                  </Button>
                                  {org.status === "Pending Verification" && (
                                    <Button size="sm" className="h-8 bg-green-500 hover:bg-green-600">
                                      Verify
                                    </Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </ShineBorder>
            </TabsContent>

            <TabsContent value="reports">
              <ShineBorder borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
                  <CardHeader>
                    <CardTitle>Reported Issues</CardTitle>
                    <CardDescription className="text-gray-400">Handle user reports and system issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border border-white/10 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-white/10">
                          <tr>
                            <th className="py-3 px-4 text-left">Issue Type</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Reported By</th>
                            <th className="py-3 px-4 text-left">Date</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reports.map((report) => (
                            <tr key={report.id} className="border-t border-white/10">
                              <td className="py-3 px-4">{report.type}</td>
                              <td className="py-3 px-4">
                                <Badge
                                  className={
                                    report.status === "Resolved"
                                      ? "bg-green-500/20 text-green-500"
                                      : report.status === "Open"
                                        ? "bg-red-500/20 text-red-500"
                                        : "bg-yellow-500/20 text-yellow-500"
                                  }
                                >
                                  {report.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4">{report.reporter}</td>
                              <td className="py-3 px-4">{report.date}</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm" className="h-8 border-white/10">
                                    View Details
                                  </Button>
                                  {report.status !== "Resolved" && (
                                    <Button size="sm" className="h-8 bg-green-500 hover:bg-green-600">
                                      Resolve
                                    </Button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </ShineBorder>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
