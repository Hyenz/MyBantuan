"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  // Simulate checking if user is logged in
  useEffect(() => {
    // Check local storage for user data
    const userData = localStorage.getItem("user")
    if (userData) {
      setIsLoggedIn(true)
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogin = () => {
    router.push("/login")
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsLoggedIn(false)
    router.push("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-white/90 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/mybantuan-logo.png" alt="MyBantuan" width={40} height={40} className="w-10 h-10" />
            <span className="font-medium text-gray-800">MyBantuan</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/program-management" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Program
          </Link>
          <Link href="/aid-matching" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Matching & Recommendations
          </Link>
          <Link href="/announcements" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Announcements
          </Link>
          <Link href="/become-donator" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Become A Donator
          </Link>
        </nav>

        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/user-avatar.png" alt={user?.name || "User"} />
                  <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "AA"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/account")}>
                <User className="mr-2 h-4 w-4" />
                <span>My Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/application-progress")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Application Progress</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700" onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </header>
  )
}
