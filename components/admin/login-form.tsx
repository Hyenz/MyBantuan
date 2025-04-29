"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// List of authorized admin emails
const AUTHORIZED_ADMINS = ["admin@mybantuan.org", "director@mybantuan.org", "supervisor@mybantuan.org"]

export function AdminLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Check if email is in the authorized list
    if (!AUTHORIZED_ADMINS.includes(email)) {
      setError("You are not authorized to access the admin portal.")
      setIsLoading(false)
      return
    }

    // In a real application, you would validate credentials against a database
    // For demo purposes, we'll accept any password for authorized emails
    if (password.length < 6) {
      setError("Invalid password. Please try again.")
      setIsLoading(false)
      return
    }

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would set a session cookie or token here
      router.push("/admin/dashboard")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="admin@mybantuan.org"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-700">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-gray-300 bg-white"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  )
}
