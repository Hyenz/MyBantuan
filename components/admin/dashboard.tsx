"\"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminOverview } from "@/components/admin/overview"
import { ApplicantsList } from "@/components/admin/applicants-list"
import { AnnouncementsList } from "@/components/admin/announcements-list"
import { ProgramsList } from "@/components/admin/programs-list"
import { UsersList } from "@/components/admin/users-list"
import { DonationsList } from "@/components/admin/donations-list"

type ActiveView = "overview" | "applicants" | "programs" | "users" | "donations" | "announcements"

type AdminDashboardProps = {}

export function AdminDashboard() {
  const [activeView, setActiveView] = useState<ActiveView>("overview")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar activeView={activeView} setActiveView={setActiveView} /> */}
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <AdminOverview />
          </TabsContent>
          <TabsContent value="applicants" className="space-y-4">
            <ApplicantsList />
          </TabsContent>
          <TabsContent value="programs" className="space-y-4">
            <ProgramsList />
          </TabsContent>
          <TabsContent value="announcements" className="space-y-4">
            <AnnouncementsList />
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <UsersList />
          </TabsContent>
          <TabsContent value="donations" className="space-y-4">
            <DonationsList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
