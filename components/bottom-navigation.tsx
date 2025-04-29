"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Bell, User, BarChart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BottomNavigation() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isInsightOpen, setIsInsightOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  // Sample programs data for search
  const programs = [
    {
      id: 1,
      name: "Bantuan Keluarga Malaysia (BKM)",
      category: "Financial Aid",
      description: "Financial assistance for eligible Malaysian families",
    },
    {
      id: 2,
      name: "Bantuan IPT",
      category: "Education",
      description: "Financial assistance for higher education students",
    },
    {
      id: 3,
      name: "eKasih Registration",
      category: "Poverty Alleviation",
      description: "Registration for poverty database and assistance programs",
    },
    {
      id: 4,
      name: "Zakat Asnaf",
      category: "Religious Aid",
      description: "Zakat distribution for eligible recipients",
    },
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = programs.filter(
      (program) =>
        program.name.toLowerCase().includes(query) ||
        program.category.toLowerCase().includes(query) ||
        program.description.toLowerCase().includes(query),
    )

    setSearchResults(results)
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
        <div className="flex items-center justify-around h-16">
          <Link
            href="/dashboard"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/dashboard" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/programs"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/programs" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Programs</span>
          </Link>
          <Link
            href="/application-tracking"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/application-tracking" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <Bell className="h-5 w-5" />
            <span className="text-xs mt-1">Updates</span>
          </Link>
          <button
            onClick={() => setIsInsightOpen(true)}
            className="flex flex-col items-center justify-center w-full h-full text-gray-500"
          >
            <BarChart className="h-5 w-5" />
            <span className="text-xs mt-1">Insight</span>
          </button>
          <Link
            href="/account"
            className={`flex flex-col items-center justify-center w-full h-full ${
              pathname === "/account" ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Programs</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                type="text"
                placeholder="Search for programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" size="sm" className="px-3" onClick={handleSearch}>
              <span className="sr-only">Search</span>
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-4 space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((program) => (
                <Card key={program.id} className="cursor-pointer hover:bg-gray-50">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{program.name}</CardTitle>
                    <CardDescription>{program.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              ))
            ) : searchQuery ? (
              <p className="text-center text-gray-500 py-4">No results found</p>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>

      {/* Insight Dialog */}
      <Dialog open={isInsightOpen} onOpenChange={setIsInsightOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Application Insights</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Application Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Approved</span>
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Under Review</span>
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Submitted</span>
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rejected</span>
                    <span className="text-sm font-medium">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div>
                      <p className="text-sm font-medium">eKasih Registration</p>
                      <p className="text-xs text-gray-500">Applied: 3 April 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div>
                      <p className="text-sm font-medium">Zakat Asnaf</p>
                      <p className="text-xs text-gray-500">Applied: 28 March 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
