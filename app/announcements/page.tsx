"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New BKM Applications Open",
      category: "Program Update",
      date: "April 15, 2025",
      content:
        "Applications for Bantuan Keluarga Malaysia (BKM) are now open. Eligible families can apply through the MyBantuan portal until May 15, 2025.",
    },
    {
      id: 2,
      title: "System Maintenance Notice",
      category: "System",
      date: "April 10, 2025",
      content:
        "MyBantuan will be undergoing scheduled maintenance on April 12, 2025, from 2:00 AM to 5:00 AM MYT. During this time, the system will be unavailable.",
    },
    {
      id: 3,
      title: "Upcoming Deadline for IPT Applications",
      category: "Reminder",
      date: "April 8, 2025",
      content:
        "The deadline for Bantuan IPT applications is April 20, 2025. Please ensure all required documents are submitted before the deadline.",
    },
    {
      id: 5,
      title: "Holiday Office Hours",
      category: "General",
      date: "April 1, 2025",
      content:
        "Our support office will be operating with reduced hours during the upcoming holiday period. Please check the contact page for details.",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  // Load announcements from localStorage if available
  useEffect(() => {
    const savedAnnouncements = localStorage.getItem("announcements")
    if (savedAnnouncements) {
      try {
        const parsedAnnouncements = JSON.parse(savedAnnouncements)
        // Filter only published announcements
        const publishedAnnouncements = parsedAnnouncements.filter(
          (announcement: any) => announcement.status === "published",
        )
        if (publishedAnnouncements.length > 0) {
          setAnnouncements(publishedAnnouncements)
        }
      } catch (error) {
        console.error("Error parsing announcements:", error)
      }
    }
  }, [])

  // Get unique categories from announcements
  const categories = ["All", ...new Set(announcements.map((a) => a.category))]

  // Filter announcements based on search term and active category
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "All" || announcement.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Announcements</h1>
            <p className="text-gray-600">Stay updated with the latest news and information about aid programs</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search announcements..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="mb-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="space-y-4">
                {filteredAnnouncements.length > 0 ? (
                  filteredAnnouncements.map((announcement) => (
                    <Card key={announcement.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-gray-900">{announcement.title}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              {announcement.date}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{announcement.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{announcement.content}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No announcements found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {filteredAnnouncements.length > 5 && (
            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
