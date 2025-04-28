import { SignupForm } from "@/components/auth/signup-form"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        <div className="max-w-md mx-auto px-6">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h1>
              <SignupForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
