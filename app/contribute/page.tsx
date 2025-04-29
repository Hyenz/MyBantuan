import { ContributeOptions } from "@/components/contribute/contribute-options"

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Contribute to MyBantuan</h1>
          <p className="text-gray-600 text-center mb-8">
            Choose how you would like to contribute to help those in need
          </p>

          <ContributeOptions />
        </div>
      </div>
    </div>
  )
}
