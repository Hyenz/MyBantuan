"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Plus, Search, Trash } from "lucide-react"

// Sample programs data
const initialPrograms = [
  {
    id: 1,
    name: "Bantuan Keluarga Malaysia (BKM)",
    category: "Financial Aid",
    deadline: "2025-05-15",
    status: "active",
    description: "Financial assistance for eligible Malaysian families",
    eligibility: "Malaysian citizens with household income below RM5,000 per month",
    amount: "RM2,000",
  },
  {
    id: 2,
    name: "Bantuan IPT",
    category: "Education",
    deadline: "2025-05-30",
    status: "active",
    description: "Financial assistance for higher education students",
    eligibility: "Full-time students at recognized institutions",
    amount: "RM1,500",
  },
  {
    id: 3,
    name: "eKasih Registration",
    category: "Poverty Alleviation",
    deadline: "2025-06-15",
    status: "active",
    description: "Registration for poverty database and assistance programs",
    eligibility: "Households with income below poverty line",
    amount: "Varies",
  },
  {
    id: 4,
    name: "Zakat Asnaf",
    category: "Religious Aid",
    deadline: "2025-06-30",
    status: "active",
    description: "Zakat distribution for eligible recipients",
    eligibility: "Muslims who fall under asnaf categories",
    amount: "Varies",
  },
]

export function ProgramsList() {
  const [programs, setPrograms] = useState(initialPrograms)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState<any>(null)
  const [newProgram, setNewProgram] = useState({
    name: "",
    category: "",
    deadline: "",
    status: "active",
    description: "",
    eligibility: "",
    amount: "",
  })

  // Load programs from localStorage if available
  useEffect(() => {
    const savedPrograms = localStorage.getItem("adminPrograms")
    if (savedPrograms) {
      setPrograms(JSON.parse(savedPrograms))
    }
  }, [])

  // Filter programs based on search term
  const filteredPrograms = programs.filter((program) => {
    return (
      program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const handleAddProgram = () => {
    setIsAddDialogOpen(true)
    setNewProgram({
      name: "",
      category: "",
      deadline: "",
      status: "active",
      description: "",
      eligibility: "",
      amount: "",
    })
  }

  const handleEditProgram = (program: any) => {
    setSelectedProgram(program)
    setIsEditDialogOpen(true)
  }

  const handleDeleteProgram = (id: number) => {
    const updatedPrograms = programs.filter((program) => program.id !== id)
    setPrograms(updatedPrograms)

    // Save to localStorage
    localStorage.setItem("adminPrograms", JSON.stringify(updatedPrograms))
  }

  const saveNewProgram = () => {
    const newId = Math.max(...programs.map((p) => p.id)) + 1
    const updatedPrograms = [...programs, { id: newId, ...newProgram }]
    setPrograms(updatedPrograms)

    // Save to localStorage
    localStorage.setItem("adminPrograms", JSON.stringify(updatedPrograms))

    setIsAddDialogOpen(false)
  }

  const updateProgram = () => {
    const updatedPrograms = programs.map((p) => (p.id === selectedProgram.id ? { ...selectedProgram } : p))
    setPrograms(updatedPrograms)

    // Save to localStorage
    localStorage.setItem("adminPrograms", JSON.stringify(updatedPrograms))

    setIsEditDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Programs Management</h1>
        <Button onClick={handleAddProgram}>
          <Plus className="mr-2 h-4 w-4" />
          Add Program
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Programs</CardTitle>
          <CardDescription>Manage aid programs and their details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search programs..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPrograms.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell className="font-medium">{program.name}</TableCell>
                    <TableCell>{program.category}</TableCell>
                    <TableCell>{new Date(program.deadline).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditProgram(program)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteProgram(program.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Program Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Program</DialogTitle>
            <DialogDescription>Create a new aid program</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Program Name</Label>
              <Input
                id="name"
                value={newProgram.name}
                onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newProgram.category}
                onValueChange={(value) => setNewProgram({ ...newProgram, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Financial Aid">Financial Aid</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Housing">Housing</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Poverty Alleviation">Poverty Alleviation</SelectItem>
                  <SelectItem value="Religious Aid">Religious Aid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Application Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={newProgram.deadline}
                onChange={(e) => setNewProgram({ ...newProgram, deadline: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newProgram.description}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eligibility">Eligibility Criteria</Label>
              <Textarea
                id="eligibility"
                value={newProgram.eligibility}
                onChange={(e) => setNewProgram({ ...newProgram, eligibility: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Aid Amount</Label>
              <Input
                id="amount"
                value={newProgram.amount}
                onChange={(e) => setNewProgram({ ...newProgram, amount: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={newProgram.status}
                onValueChange={(value) => setNewProgram({ ...newProgram, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveNewProgram}>Save Program</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Program Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Program</DialogTitle>
            <DialogDescription>Update program details</DialogDescription>
          </DialogHeader>

          {selectedProgram && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Program Name</Label>
                <Input
                  id="edit-name"
                  value={selectedProgram.name}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select
                  value={selectedProgram.category}
                  onValueChange={(value) => setSelectedProgram({ ...selectedProgram, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Financial Aid">Financial Aid</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Housing">Housing</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Poverty Alleviation">Poverty Alleviation</SelectItem>
                    <SelectItem value="Religious Aid">Religious Aid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-deadline">Application Deadline</Label>
                <Input
                  id="edit-deadline"
                  type="date"
                  value={selectedProgram.deadline.split("T")[0]}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, deadline: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={selectedProgram.description}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-eligibility">Eligibility Criteria</Label>
                <Textarea
                  id="edit-eligibility"
                  value={selectedProgram.eligibility}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, eligibility: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-amount">Aid Amount</Label>
                <Input
                  id="edit-amount"
                  value={selectedProgram.amount}
                  onChange={(e) => setSelectedProgram({ ...selectedProgram, amount: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select
                  value={selectedProgram.status}
                  onValueChange={(value) => setSelectedProgram({ ...selectedProgram, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={updateProgram}>Update Program</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
