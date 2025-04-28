import { Button } from "@/components/ui/button"
import { CheckCircle, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const objectives = [
    "Provide a centralized platform for users to browse and apply for available aid programs",
    "Increase accessibility by recommending aid based on user eligibility",
    "Help organizations manage and distribute aid efficiently",
  ]

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-50 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Connecting People with
            <br />
            Aid Programs
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            MyBantuan is a centralized platform that connects individuals in need with aid programs and resources, while
            helping organizations efficiently manage and distribute assistance.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="gap-2 bg-white hover:bg-gray-100" asChild>
              <Link href="/application-tracking">
                <Play className="w-4 h-4" />
                Apply Now!
              </Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/aid-matching">Check Eligibility</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About MyBantuan</h2>
              <p className="text-gray-600 mb-6">
                MyBantuan serves as a bridge between those seeking assistance and organizations providing aid. Our
                platform streamlines the process of finding, applying for, and managing aid programs, making support
                more accessible to those who need it most.
              </p>
              <p className="text-gray-600">
                Whether you're an individual looking for financial assistance, education grants, or housing support, or
                an organization wanting to efficiently manage your aid distribution, MyBantuan provides the tools and
                connections you need.
              </p>
            </div>
          </div>
          <div>
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="People receiving aid"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Project Objectives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Aid application process"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1 text-gray-900">Easy Application Process</h3>
              <p className="text-sm text-gray-600">Apply for multiple aid programs through a single platform</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Personalized recommendations"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1 text-gray-900">Personalized Recommendations</h3>
              <p className="text-sm text-gray-600">Get matched with programs that fit your specific needs</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Organization management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-1 text-gray-900">Efficient Program Management</h3>
              <p className="text-sm text-gray-600">Tools for organizations to manage and distribute aid effectively</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
