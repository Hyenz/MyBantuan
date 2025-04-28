"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, Eye, Filter, MoreHorizontal, Search } from "lucide-react"

// Sample applicant data
const applicantsData = [
  {
    id: "APP001",
    name: "Ahmad bin Abdullah",
    program: "Bantuan Keluarga Malaysia (BKM)",
    date: "2025-04-12",
    status: "approved",
    email: "ahmad@example.com",
    phone: "+60123456789",
    income: "RM 2,500",
  },
  {
    id: "APP002",
    name: "Siti binti Rahman",
    program: "Bantuan IPT",
    date: "2025-04-05",
    status: "processing",
    email: "siti@example.com",
    phone: "+60123456790",
    income: "RM 3,200",
  },
  {
    id: "APP003",
    name: "Raj Kumar",
    program: "eKasih Registration",
    date: "2025-04-03",
    status: "under_review",
    email: "raj@example.com",
    phone: "+60123456791",
    income: "RM 1,800",
  },
  {
    id: "APP004",
    name: "Mei Ling",
    program: "Zakat Asnaf",
    date: "2025-03-28",
    status: "rejected",
    email: "meiling@example.com",
    phone: "+60123456792",
    income: "RM 2,100",
  },
  {
    id: "APP005",
    name: "Kamal bin Hassan",
    program: "Bantuan Keluarga Malaysia (BKM)",
    date: "2025-03-25",
    status: "approved",
    email: "kamal@example.com",
    phone: "+60123456793",
    income: "RM 2,300",
  },
]

export function ApplicantsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [updateStatusDialogOpen, setUpdateStatusDialogOpen] = useState(false)
  const [newStatus, setNewStatus] = useState("")

  // Filter applicants based on search term and status filter
  const filteredApplicants = applicantsData.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || applicant.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleViewApplicant = (applicant: any) => {
    setSelectedApplicant(applicant)
    setViewDialogOpen(true)
  }

  const handleUpdateStatus = (applicant: any) => {
    setSelectedApplicant(applicant)
    setNewStatus(applicant.status)
    setUpdateStatusDialogOpen(true)
  }

  const confirmStatusUpdate = () => {
    // In a real app, you would update the status in the database
    // For now, we'll just close the dialog
    setUpdateStatusDialogOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
      case "under_review":
        return <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Applicants Management</h1>
        <Button>Export Data</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Applicants</CardTitle>
          <CardDescription>View and manage all aid program applicants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search applicants..."
                  className="pl-8 w-[300px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Filter by status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Date Applied</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="font-medium">{applicant.id}</TableCell>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.program}</TableCell>
                    <TableCell>{new Date(applicant.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(applicant.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewApplicant(applicant)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleUpdateStatus(applicant)}>
                            <ChevronDown className="mr-2 h-4 w-4" />
                            Update Status
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

      {/* View Applicant Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Applicant Details</DialogTitle>
            <DialogDescription>Detailed information about the applicant</DialogDescription>
          </DialogHeader>

          {selectedApplicant && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">ID</p>
                  <p>{selectedApplicant.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p>{getStatusBadge(selectedApplicant.status)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p>{selectedApplicant.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Program</p>
                  <p>{selectedApplicant.program}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{selectedApplicant.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p>{selectedApplicant.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Income</p>
                  <p>{selectedApplicant.income}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date Applied</p>
                  <p>{new Date(selectedApplicant.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setViewDialogOpen(false)
                handleUpdateStatus(selectedApplicant)
              }}
            >
              Update Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Update Status Dialog */}
      <Dialog open={updateStatusDialogOpen} onOpenChange={setUpdateStatusDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Update Application Status</DialogTitle>
            <DialogDescription>Change the status of this application</DialogDescription>
          </DialogHeader>

          {selectedApplicant && (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Applicant: {selectedApplicant.name}</p>
                <p className="text-sm mb-4">Program: {selectedApplicant.program}</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={newStatus} onValueChange={setNewStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="under_review">Under Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setUpdateStatusDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmStatusUpdate}>Update Status</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
