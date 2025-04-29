"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Search, Filter, Check, X, Eye } from "lucide-react"

type Donation = {
  id: string
  name: string
  email: string
  phone: string
  donationType: string
  itemDescription: string
  quantity: string
  pickupAddress: string
  additionalNotes?: string
  status: "pending" | "approved" | "rejected"
  type: "individual"
  createdAt: string
}

type AidProvider = {
  id: string
  orgName: string
  licenseNumber: string
  contactNumber: string
  email: string
  address: string
  accreditationStatus: string
  programType: string
  totalFundsAllocated: string
  organizationDescription: string
  programDescription: string
  status: "pending" | "approved" | "rejected"
  type: "organization"
  programCounter: number
  createdAt: string
}

export function ContributionsList() {
  const { toast } = useToast()
  const [donations, setDonations] = useState<Donation[]>([])
  const [aidProviders, setAidProviders] = useState<AidProvider[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<AidProvider | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("donations")

  useEffect(() => {
    // Load data from localStorage
    const storedDonations = JSON.parse(localStorage.getItem("donations") || "[]")
    const storedProviders = JSON.parse(localStorage.getItem("aidProviders") || "[]")

    setDonations(storedDonations)
    setAidProviders(storedProviders)
  }, [])

  const handleStatusChange = (id: string, status: "approved" | "rejected", type: "donation" | "provider") => {
    if (type === "donation") {
      const updatedDonations = donations.map((donation) => (donation.id === id ? { ...donation, status } : donation))
      setDonations(updatedDonations)
      localStorage.setItem("donations", JSON.stringify(updatedDonations))

      toast({
        title: `Donation ${status}`,
        description: `The donation has been ${status}.`,
      })
    } else {
      const updatedProviders = aidProviders.map((provider) => (provider.id === id ? { ...provider, status } : provider))
      setAidProviders(updatedProviders)
      localStorage.setItem("aidProviders", JSON.stringify(updatedProviders))

      toast({
        title: `Aid Provider ${status}`,
        description: `The aid provider application has been ${status}.`,
      })
    }
  }

  const filteredDonations = donations.filter(
    (donation) =>
      donation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donation.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donation.donationType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredProviders = aidProviders.filter(
    (provider) =>
      provider.orgName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.programType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const viewDonationDetails = (donation: Donation) => {
    setSelectedDonation(donation)
    setSelectedProvider(null)
    setViewDialogOpen(true)
  }

  const viewProviderDetails = (provider: AidProvider) => {
    setSelectedProvider(provider)
    setSelectedDonation(null)
    setViewDialogOpen(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Contributions</h2>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search contributions..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="donations" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="donations">Individual Donations</TabsTrigger>
          <TabsTrigger value="providers">Aid Providers</TabsTrigger>
        </TabsList>

        <TabsContent value="donations">
          {filteredDonations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDonations.map((donation) => (
                <Card key={donation.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{donation.name}</CardTitle>
                        <CardDescription>{donation.email}</CardDescription>
                      </div>
                      {getStatusBadge(donation.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Type:</span>
                        <span className="capitalize">{donation.donationType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Items:</span>
                        <span>{donation.itemDescription}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Quantity:</span>
                        <span>{donation.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Date:</span>
                        <span>{new Date(donation.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" onClick={() => viewDonationDetails(donation)}>
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                    <div className="flex gap-2">
                      {donation.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleStatusChange(donation.id, "approved", "donation")}
                          >
                            <Check className="h-4 w-4 mr-1" /> Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleStatusChange(donation.id, "rejected", "donation")}
                          >
                            <X className="h-4 w-4 mr-1" /> Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No donations found</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="providers">
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProviders.map((provider) => (
                <Card key={provider.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{provider.orgName}</CardTitle>
                        <CardDescription>{provider.email}</CardDescription>
                      </div>
                      {getStatusBadge(provider.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">License:</span>
                        <span>{provider.licenseNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Program:</span>
                        <span className="capitalize">{provider.programType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Funds:</span>
                        <span>MYR {provider.totalFundsAllocated}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Date:</span>
                        <span>{new Date(provider.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" onClick={() => viewProviderDetails(provider)}>
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                    <div className="flex gap-2">
                      {provider.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-200 hover:bg-green-50"
                            onClick={() => handleStatusChange(provider.id, "approved", "provider")}
                          >
                            <Check className="h-4 w-4 mr-1" /> Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50"
                            onClick={() => handleStatusChange(provider.id, "rejected", "provider")}
                          >
                            <X className="h-4 w-4 mr-1" /> Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No aid providers found</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedDonation && (
            <>
              <DialogHeader>
                <DialogTitle>Donation Details</DialogTitle>
                <DialogDescription>
                  Submitted on {new Date(selectedDonation.createdAt).toLocaleString()}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Donor Name</Label>
                  <p className="text-sm">{selectedDonation.name}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm">{selectedDonation.email}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Phone</Label>
                  <p className="text-sm">{selectedDonation.phone}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Donation Type</Label>
                  <p className="text-sm capitalize">{selectedDonation.donationType}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Item Description</Label>
                  <p className="text-sm">{selectedDonation.itemDescription}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Quantity</Label>
                  <p className="text-sm">{selectedDonation.quantity}</p>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-sm font-medium">Pickup Address</Label>
                  <p className="text-sm">{selectedDonation.pickupAddress}</p>
                </div>
                {selectedDonation.additionalNotes && (
                  <div className="space-y-2 col-span-2">
                    <Label className="text-sm font-medium">Additional Notes</Label>
                    <p className="text-sm">{selectedDonation.additionalNotes}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Status</Label>
                  <p className="text-sm">{getStatusBadge(selectedDonation.status)}</p>
                </div>
              </div>

              <DialogFooter>
                {selectedDonation.status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      onClick={() => {
                        handleStatusChange(selectedDonation.id, "approved", "donation")
                        setViewDialogOpen(false)
                      }}
                    >
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => {
                        handleStatusChange(selectedDonation.id, "rejected", "donation")
                        setViewDialogOpen(false)
                      }}
                    >
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                  </div>
                )}
                <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}

          {selectedProvider && (
            <>
              <DialogHeader>
                <DialogTitle>Aid Provider Details</DialogTitle>
                <DialogDescription>
                  Submitted on {new Date(selectedProvider.createdAt).toLocaleString()}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Organization Name</Label>
                  <p className="text-sm">{selectedProvider.orgName}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">License Number</Label>
                  <p className="text-sm">{selectedProvider.licenseNumber}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Contact Number</Label>
                  <p className="text-sm">{selectedProvider.contactNumber}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm">{selectedProvider.email}</p>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-sm font-medium">Address</Label>
                  <p className="text-sm">{selectedProvider.address}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Accreditation Status</Label>
                  <p className="text-sm capitalize">{selectedProvider.accreditationStatus}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Program Type</Label>
                  <p className="text-sm capitalize">{selectedProvider.programType}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Total Funds Allocated</Label>
                  <p className="text-sm">MYR {selectedProvider.totalFundsAllocated}</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Status</Label>
                  <p className="text-sm">{getStatusBadge(selectedProvider.status)}</p>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-sm font-medium">Organization Description</Label>
                  <p className="text-sm">{selectedProvider.organizationDescription}</p>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label className="text-sm font-medium">Program Description</Label>
                  <p className="text-sm">{selectedProvider.programDescription}</p>
                </div>
              </div>

              <DialogFooter>
                {selectedProvider.status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      onClick={() => {
                        handleStatusChange(selectedProvider.id, "approved", "provider")
                        setViewDialogOpen(false)
                      }}
                    >
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => {
                        handleStatusChange(selectedProvider.id, "rejected", "provider")
                        setViewDialogOpen(false)
                      }}
                    >
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                  </div>
                )}
                <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
