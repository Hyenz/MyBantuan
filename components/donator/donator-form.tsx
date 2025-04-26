"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export function DonatorForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [organization, setOrganization] = useState("")
  const [donationType, setDonationType] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-400 mb-6">
          Your application to become a donator has been submitted successfully. Our team will contact you shortly to
          discuss the next steps.
        </p>
        <Button
          variant="outline"
          className="border-white/10"
          onClick={() => {
            setIsSubmitted(false)
            setName("")
            setEmail("")
            setPhone("")
            setOrganization("")
            setDonationType("")
            setAmount("")
            setMessage("")
          }}
        >
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-black/50 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-black/50 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="bg-black/50 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="organization">Organization (if applicable)</Label>
        <Input
          id="organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="bg-black/50 border-white/10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="donationType">Donation Type</Label>
        <Select value={donationType} onValueChange={setDonationType} required>
          <SelectTrigger className="bg-black/50 border-white/10">
            <SelectValue placeholder="Select donation type" />
          </SelectTrigger>
          <SelectContent className="bg-black/90 text-white border-white/10">
            <SelectItem value="monetary">Monetary</SelectItem>
            <SelectItem value="goods">Goods & Supplies</SelectItem>
            <SelectItem value="services">Professional Services</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {donationType === "monetary" && (
        <div className="space-y-2">
          <Label htmlFor="amount">Estimated Donation Amount (RM)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-black/50 border-white/10"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-black/50 border-white/10 min-h-[100px]"
          placeholder="Tell us more about how you'd like to contribute..."
        />
      </div>

      <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
