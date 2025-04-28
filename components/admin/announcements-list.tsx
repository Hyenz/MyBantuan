"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Edit, Plus, Trash, Share } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"

// Sample announcements data
const initialAnnouncements = [
  {
    id: 1,
    title: "New BKM Applications Open",
    category: "Program Update",
    date: "2025-04-15",
    status: "published",
    content:
      "Applications for Bantuan Keluarga Malaysia (BKM) are now open. Eligible families can apply through the MyBantuan portal until May 15, 2025.",
  },
  {
    id: 2,
    title: "System Maintenance Notice",
    category: "System",
    date: "2025-04-10",
    status: "published",
    content:
      "MyBantuan will be undergoing scheduled maintenance on April 12, 2025, from 2:00 AM to 5:00 AM MYT. During this time, the system will be unavailable.",
  },
  {
    id: 3,
    title: "Upcoming Deadline for IPT Applications",
    category: "Reminder",
    date: "2025-04-08",
    status: "published",
    content:
      "The deadline for Bantuan IPT applications is April 20, 2025. Please ensure all required documents are submitted before the deadline.",
  },
  {
    id: 4,
    title: "New Features Added to MyBantuan",
    category: "System",
    date: "2025-04-05",
    status: "draft",
    content:
      "We've added several new features to improve your experience with MyBantuan, including enhanced application tracking and personalized recommendations.",
  },
  {
    id: 5,
    title: "Holiday Office Hours",
    category: "General",
    date: "2025-04-01",
    status: "published",
    content:
      "Our support office will be operating with reduced hours during the upcoming holiday period. Please check the contact page for details.",
  },
]

export function AnnouncementsList() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    category: "",
    content: "",
    status: "draft",
  })
  const { toast } = useToast()

  // Load announcements from localStorage if available
  useEffect(() => {
    const savedAnnouncements = localStorage.getItem("announcements")
    if (savedAnnouncements) {
      setAnnouncements(JSON.parse(savedAnnouncements))
    }
  }, [])

  // Save announcements to localStorage when they change
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements))
  }, [announcements])

  const handleAddAnnouncement = () => {
    setIsAddDialogOpen(true)
    setNewAnnouncement({
      title: "",
      category: "",
      content: "",
      status: "draft",
    })
  }

  const handleEditAnnouncement = (announcement: any) => {
    setSelectedAnnouncement(announcement)
    setIsEditDialogOpen(true)
  }

  const handleDeleteAnnouncement = (id: number) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
    toast({
      title: "Announcement deleted",
      description: "The announcement has been successfully deleted.",
    })
  }

  const saveNewAnnouncement = () => {
    const newId = Math.max(...announcements.map((a) => a.id), 0) + 1
    const today = new Date().toISOString().split("T")[0]

    const announcement = {
      id: newId,
      title: newAnnouncement.title,
      category: newAnnouncement.category,
      date: today,
      status: newAnnouncement.status,
      content: newAnnouncement.content,
    }

    setAnnouncements([...announcements, announcement])
    setIsAddDialogOpen(false)

    toast({
      title: "Announcement created",
      description: "The announcement has been successfully created.",
    })
  }

  const updateAnnouncement = () => {
    setAnnouncements(announcements.map((a) => (a.id === selectedAnnouncement.id ? { ...selectedAnnouncement } : a)))
    setIsEditDialogOpen(false)

    toast({
      title: "Announcement updated",
      description: "The announcement has been successfully updated.",
    })
  }

  const publishAnnouncement = (id: number) => {
    setAnnouncements(announcements.map((a) => (a.id === id ? { ...a, status: "published" } : a)))

    toast({
      title: "Announcement published",
      description: "The announcement has been successfully published.",
    })
  }

  const publishToPublicPage = (announcement: any) => {
    // Get existing public announcements
    const publicAnnouncements = JSON.parse(localStorage.getItem("announcements") || "[]")

    // Check if announcement already exists in public list
    const exists = publicAnnouncements.some((a: any) => a.id === announcement.id)

    if (!exists) {
      // Format the announcement for public display
      const publicAnnouncement = {
        id: announcement.id,
        title: announcement.title,
        category: announcement.category,
        date: new Date(announcement.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: announcement.content,
        status: "published",
      }

      // Add to public announcements
      const updatedPublicAnnouncements = [...publicAnnouncements, publicAnnouncement]
      localStorage.setItem("announcements", JSON.stringify(updatedPublicAnnouncements))

      toast({
        title: "Announcement published to public page",
        description: "The announcement is now visible on the public announcements page.",
      })
    } else {
      toast({
        title: "Announcement already published",
        description: "This announcement is already on the public announcements page.",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Announcements Management</h1>
        <Button onClick={handleAddAnnouncement}>
          <Plus className="mr-2 h-4 w-4" />
          Add Announcement
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Announcements</CardTitle>
          <CardDescription>Manage announcements for users and programs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcements.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell className="font-medium">{announcement.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{announcement.category}</Badge>
                    </TableCell>
                    <TableCell>{announcement.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          announcement.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {announcement.status === "published" ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEditAnnouncement(announcement)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => publishToPublicPage(announcement)}>
                            <Share className="mr-2 h-4 w-4" />
                            Publish to Public Page
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDeleteAnnouncement(announcement.id)}>
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Announcement Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Announcement</DialogTitle>
            <DialogDescription>Create a new announcement for users</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newAnnouncement.category}
                onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Program Update">Program Update</SelectItem>
                  <SelectItem value="System">System</SelectItem>
                  <SelectItem value="Reminder">Reminder</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                rows={5}
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={newAnnouncement.status}
                onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveNewAnnouncement}>Save Announcement</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Announcement Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Announcement</DialogTitle>
            <DialogDescription>Update announcement details</DialogDescription>
          </DialogHeader>

          {selectedAnnouncement && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={selectedAnnouncement.title}
                  onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, title: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select
                  value={selectedAnnouncement.category}
                  onValueChange={(value) => setSelectedAnnouncement({ ...selectedAnnouncement, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Program Update">Program Update</SelectItem>
                    <SelectItem value="System">System</SelectItem>
                    <SelectItem value="Reminder">Reminder</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  rows={5}
                  value={selectedAnnouncement.content}
                  onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, content: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select
                  value={selectedAnnouncement.status}
                  onValueChange={(value) => setSelectedAnnouncement({ ...selectedAnnouncement, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={updateAnnouncement}>Update Announcement</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
