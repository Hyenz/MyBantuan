"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, CheckCircle, Clock, Eye, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function ApplicationProgressPage() {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)

  // Sample applications data
  const applications = [
    {
      id: 1,
      name: "Bantuan Keluarga Malaysia (BKM)",
      status: "approved",
      date: "12 April 2025",
      details: {
        amount: "RM 2,000",
        approvalDate: "15 April 2025",
        paymentDate: "20 April 2025",
        documents: ["IC Copy", "Income Statement", "Household Declaration"],
      },
    },
    {
      id: 2,
      name: "Bantuan IPT",
      status: "processing",
      date: "5 April 2025",
      details: {
        institution: "Universiti Malaya",
        program: "Bachelor of Computer Science",
        semester: "Semester 2, 2025",
        documents: ["Student ID", "Academic Transcript", "Acceptance Letter"],
      },
    },
    {
      id: 3,
      name: "eKasih Registration",
      status: "under_review",
      date: "3 April 2025",
      details: {
        household: "5 members",
        income: "RM 1,800 monthly",
        location: "Kuala Lumpur",
        documents: ["IC Copy", "Income Statement", "Utility Bills", "Rental Agreement"],
      },
    },
    {
      id: 4,
      name: "Zakat Asnaf",
      status: "rejected",
      date: "28 March 2025",
      details: {
        reason: "Income exceeds eligibility threshold",
        appealDeadline: "15 April 2025",
        documents: ["IC Copy", "Income Statement", "Bank Statements"],
      },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        )
      case "rejected":
        return (
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
        )
      case "processing":
        return (
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
        )
      case "under_review":
        return (
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
            <Eye className="h-6 w-6 text-yellow-600" />
          </div>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Rejected</Badge>
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Processing</Badge>
      case "under_review":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Under Review</Badge>
      default:
        return null
    }
  }

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application)
    setDetailsOpen(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="bg-blue-600 text-white py-6 px-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl font-bold text-center">Application Progress</h1>
      </div>

      <div className="pt-20 px-4">
        <Tabs defaultValue="active" className="mb-4">
          <TabsList className="w-full">
            <TabsTrigger value="active" className="flex-1">
              Active
            </TabsTrigger>
            <TabsTrigger value="history" className="flex-1">
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-4">
            <div className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id} className="p-4 shadow-sm">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(application.status)}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{application.name}</h3>
                      <p className="text-sm text-gray-500">Applied: {application.date}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {getStatusBadge(application.status)}
                      <Button variant="ghost" size="icon" onClick={() => handleViewDetails(application)}>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center py-8 text-gray-500">
              <p>No historical applications found</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>Information about your application</DialogDescription>
          </DialogHeader>

          {selectedApplication && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{selectedApplication.name}</h3>
                {getStatusBadge(selectedApplication.status)}
              </div>

              <div>
                <p className="text-sm text-gray-500">Applied: {selectedApplication.date}</p>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Details</h4>
                <dl className="space-y-2">
                  {Object.entries(selectedApplication.details).map(([key, value]: [string, any]) => {
                    if (key !== "documents") {
                      return (
                        <div key={key} className="grid grid-cols-2">
                          <dt className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</dt>
                          <dd className="text-sm font-medium">{value}</dd>
                        </div>
                      )
                    }
                    return null
                  })}
                </dl>
              </div>

              {selectedApplication.details.documents && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Submitted Documents</h4>
                  <ul className="space-y-1">
                    {selectedApplication.details.documents.map((doc: string) => (
                      <li key={doc} className="text-sm">
                        • {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedApplication.status === "rejected" && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Appeal Information</h4>
                  <p className="text-sm">
                    You can submit an appeal for this rejected application before{" "}
                    {selectedApplication.details.appealDeadline}.
                  </p>
                  <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Submit Appeal</Button>
                </div>
              )}

              {selectedApplication.status === "approved" && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Payment Information</h4>
                  <p className="text-sm">
                    Your approved amount of {selectedApplication.details.amount} will be disbursed on{" "}
                    {selectedApplication.details.paymentDate}.
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <BottomNavigation />
    </main>
  )
}
