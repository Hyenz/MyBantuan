import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { DonatorForm } from "@/components/donator/donator-form"

export default function BecomeDonatorPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32 pb-16 overflow-hidden">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Become a Donator</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community of donors who are making a difference by supporting aid programs. Your contribution
              helps us reach more people in need and provide essential resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-black/50 backdrop-blur-xl p-6 h-full">
                <h2 className="text-xl font-bold mb-4">Why Become a Donator?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500">✓</span>
                    </div>
                    <div>
                      <p className="font-medium">Make a Real Impact</p>
                      <p className="text-sm text-gray-400">
                        Your donations directly support individuals and families in need
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500">✓</span>
                    </div>
                    <div>
                      <p className="font-medium">Transparency</p>
                      <p className="text-sm text-gray-400">
                        Track exactly how your donations are being used and who they're helping
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500">✓</span>
                    </div>
                    <div>
                      <p className="font-medium">Tax Benefits</p>
                      <p className="text-sm text-gray-400">Receive tax deductions for your charitable contributions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-500">✓</span>
                    </div>
                    <div>
                      <p className="font-medium">Community Recognition</p>
                      <p className="text-sm text-gray-400">
                        Be recognized as a valued supporter of community development
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </ShineBorder>

            <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-black/50 backdrop-blur-xl p-6">
                <h2 className="text-xl font-bold mb-4">Donator Application</h2>
                <DonatorForm />
              </div>
            </ShineBorder>
          </div>

          <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-black/50 backdrop-blur-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Our Impact</h2>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-500">500+</p>
                  <p className="text-sm text-gray-400">Families Supported</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500">RM 2.5M</p>
                  <p className="text-sm text-gray-400">Aid Distributed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500">50+</p>
                  <p className="text-sm text-gray-400">Active Programs</p>
                </div>
              </div>
            </div>
          </ShineBorder>
        </div>
      </div>
    </main>
  )
}
