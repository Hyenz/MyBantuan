import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonatorForm } from "@/components/donator/donator-form"

export default function BecomeDonatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Become a Donator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of donors who are making a difference by supporting aid programs. Your contribution
              helps us reach more people in need and provide essential resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Why Become a Donator?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Make a Real Impact</p>
                    <p className="text-sm text-gray-600">
                      Your donations directly support individuals and families in need
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Transparency</p>
                    <p className="text-sm text-gray-600">
                      Track exactly how your donations are being used and who they're helping
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tax Benefits</p>
                    <p className="text-sm text-gray-600">Receive tax deductions for your charitable contributions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Community Recognition</p>
                    <p className="text-sm text-gray-600">
                      Be recognized as a valued supporter of community development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donator Application</CardTitle>
              </CardHeader>
              <CardContent>
                <DonatorForm />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-gray-600">Families Supported</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">RM 2.5M</p>
                  <p className="text-sm text-gray-600">Aid Distributed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-sm text-gray-600">Active Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
