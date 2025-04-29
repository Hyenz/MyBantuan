"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function DonatorForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationType: "",
    itemDescription: "",
    quantity: "",
    pickupAddress: "",
    additionalNotes: "",
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
      const donations = JSON.parse(localStorage.getItem("donations") || "[]")
      const newDonation = {
        id: `donation-${Date.now()}`,
        ...formData,
        status: "pending",
        type: "individual",
        createdAt: new Date().toISOString(),
      }

      donations.push(newDonation)
      localStorage.setItem("donations", JSON.stringify(donations))

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        donationType: "",
        itemDescription: "",
        quantity: "",
        pickupAddress: "",
        additionalNotes: "",
      })

      setIsSubmitting(false)

      toast({
        title: "Donation submitted successfully",
        description: "Thank you for your contribution! We will contact you soon.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
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
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="donationType" className="text-gray-700">
            Donation Type
          </Label>
          <Select value={formData.donationType} onValueChange={(value) => handleSelectChange("donationType", value)}>
            <SelectTrigger id="donationType" className="bg-white border-gray-300">
              <SelectValue placeholder="Select donation type" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-300">
              <SelectItem value="food">Food Items</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="household">Household Items</SelectItem>
              <SelectItem value="medical">Medical Supplies</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="itemDescription" className="text-gray-700">
            Item Description
          </Label>
          <Input
            id="itemDescription"
            name="itemDescription"
            placeholder="Describe the items you're donating"
            value={formData.itemDescription}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-gray-700">
            Quantity
          </Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="Enter quantity (e.g., 5kg, 10 pieces)"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="border-gray-300 bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pickupAddress" className="text-gray-700">
          Pickup Address
        </Label>
        <Textarea
          id="pickupAddress"
          name="pickupAddress"
          placeholder="Enter the address for item pickup"
          value={formData.pickupAddress}
          onChange={handleChange}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalNotes" className="text-gray-700">
          Additional Notes (Optional)
        </Label>
        <Textarea
          id="additionalNotes"
          name="additionalNotes"
          placeholder="Any additional information about your donation"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="border-gray-300 bg-white"
        />
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Donation"}
      </Button>
    </form>
  )
}
