"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function AidProviderForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    orgName: "",
    licenseNumber: "",
    contactNumber: "",
    email: "",
    address: "",
    accreditationStatus: "",
    programType: "",
    totalFundsAllocated: "",
    organizationDescription: "",
    programDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // Store in localStorage for admin to review
      const aidProviders = JSON.parse(localStorage.getItem("aidProviders") || "[]")
      const newProvider = {
        id: `provider-${Date.now()}`,
        ...formData,
        status: "pending",
        type: "organization",
        programCounter: 0,
        createdAt: new Date().toISOString(),
      }

      aidProviders.push(newProvider)
      localStorage.setItem("aidProviders", JSON.stringify(aidProviders))

      // Reset form
      setFormData({
        orgName: "",
        licenseNumber: "",
        contactNumber: "",
        email: "",
        address: "",
        accreditationStatus: "",
        programType: "",
        totalFundsAllocated: "",
        organizationDescription: "",
        programDescription: "",
      })

      setIsSubmitting(false)

      toast({
        title: "Application submitted successfully",
        description: "Thank you for your interest! We will review your application and contact you soon.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="orgName" className="text-gray-700">
            Organization Name
          </Label>
          <Input
            id="orgName"
            name="orgName"
            placeholder="Enter organization name"
            value={formData.orgName}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseNumber" className="text-gray-700">
            License Number
          </Label>
          <Input
            id="licenseNumber"
            name="licenseNumber"
            placeholder="Enter organization license number"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="contactNumber" className="text-gray-700">
            Contact Number
          </Label>
          <Input
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter organization email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-700">
          Organization Address
        </Label>
        <Textarea
          id="address"
          name="address"
          placeholder="Enter organization address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="accreditationStatus" className="text-gray-700">
            Accreditation Status
          </Label>
          <Select
            value={formData.accreditationStatus}
            onValueChange={(value) => handleSelectChange("accreditationStatus", value)}
          >
            <SelectTrigger id="accreditationStatus" className="bg-white border-gray-300">
              <SelectValue placeholder="Select accreditation status" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300">
              <SelectItem value="accredited">Accredited</SelectItem>
              <SelectItem value="pending">Pending Accreditation</SelectItem>
              <SelectItem value="inProcess">In Process</SelectItem>
              <SelectItem value="notAccredited">Not Accredited</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="programType" className="text-gray-700">
            Program Type
          </Label>
          <Select value={formData.programType} onValueChange={(value) => handleSelectChange("programType", value)}>
            <SelectTrigger id="programType" className="bg-white border-gray-300">
              <SelectValue placeholder="Select program type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300">
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="food">Food Security</SelectItem>
              <SelectItem value="housing">Housing</SelectItem>
              <SelectItem value="emergency">Emergency Relief</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="totalFundsAllocated" className="text-gray-700">
          Total Funds Allocated (MYR)
        </Label>
        <Input
          id="totalFundsAllocated"
          name="totalFundsAllocated"
          type="number"
          placeholder="Enter total funds allocated"
          value={formData.totalFundsAllocated}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organizationDescription" className="text-gray-700">
          Organization Description
        </Label>
        <Textarea
          id="organizationDescription"
          name="organizationDescription"
          placeholder="Describe your organization"
          value={formData.organizationDescription}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="programDescription" className="text-gray-700">
          Program Description
        </Label>
        <Textarea
          id="programDescription"
          name="programDescription"
          placeholder="Describe the program you want to provide"
          value={formData.programDescription}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
