import { Header } from "@/components/header"
import { ProgramSlider } from "@/components/program-slider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuredPrograms = [
    {
      title: "Bantuan Keluarga Malaysia",
      description: "Financial assistance for eligible Malaysian families",
      category: "Financial",
    },
    {
      title: "Bantuan IPT",
      description: "Education assistance for higher education students",
      category: "Education",
    },
    {
      title: "eKasih",
      description: "National poverty database for aid distribution",
      category: "Welfare",
    },
  ]

  const benefits = [
    "Easy application process for multiple aid programs",
    "Personalized recommendations based on your profile",
    "Real-time application status tracking",
    "Secure and private data handling",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        {/* Hero Slider */}
        <div className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <ProgramSlider />
          </div>
        </div>

        {/* Featured Programs */}
        <div className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Programs</h2>
              <Button variant="outline" asChild>
                <Link href="/programs" className="flex items-center gap-2">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/programs">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Why Use MyBantuan?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="mt-1 bg-blue-100 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/programs">Find Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
