import { LoginForm } from "@/components/auth/login-form"
import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { InteractiveGrid } from "@/components/ui/interactive-grid"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />
        <div className="max-w-md mx-auto px-6">
          <ShineBorder className="relative z-10" borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-black/50 backdrop-blur-xl p-8 rounded-xl">
              <h1 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h1>
              <LoginForm />
            </div>
          </ShineBorder>
        </div>
      </div>
    </main>
  )
}
