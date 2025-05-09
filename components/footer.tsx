import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">MyBantuan</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connecting people with aid programs and resources to improve lives and communities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/program-management" className="text-gray-600 hover:text-blue-600 text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/aid-matching" className="text-gray-600 hover:text-blue-600 text-sm">
                  Matching & Recommendations
                </Link>
              </li>
              <li>
                <Link href="/become-donator" className="text-gray-600 hover:text-blue-600 text-sm">
                  Become A Donator
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-600 hover:text-blue-600 text-sm">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-blue-600 text-sm">
                  Data Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Aid Street, Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <Link href="tel:+60123456789" className="text-gray-600 hover:text-blue-600 text-sm">
                  +60 12-345 6789
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <Link href="mailto:info@mybantuan.org" className="text-gray-600 hover:text-blue-600 text-sm">
                  info@mybantuan.org
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} MyBantuan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
