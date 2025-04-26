import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const objectives = [
    "Provide a centralized platform for users to browse and apply for available aid programs",
    "Increase accessibility by recommending aid based on user eligibility",
    "Help organizations manage and distribute aid efficiently",
  ]

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Connecting People with
            <br />
            Aid Programs
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            MyBantuan is a centralized platform that connects individuals in need with aid programs and resources, while
            helping organizations efficiently manage and distribute assistance.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10" asChild>
              <Link href="/application-tracking">
                <Play className="w-4 h-4" />
                Apply Now!
              </Link>
            </Button>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
              <Link href="/aid-matching">Check Eligibility</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <ShineBorder className="h-full" borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="bg-black/50 backdrop-blur-xl p-6 h-full">
                <h2 className="text-2xl font-bold mb-4">About MyBantuan</h2>
                <p className="text-gray-400 mb-6">
                  MyBantuan serves as a bridge between those seeking assistance and organizations providing aid. Our
                  platform streamlines the process of finding, applying for, and managing aid programs, making support
                  more accessible to those who need it most.
                </p>
                <p className="text-gray-400">
                  Whether you're an individual looking for financial assistance, education grants, or housing support,
                  or an organization wanting to efficiently manage your aid distribution, MyBantuan provides the tools
                  and connections you need.
                </p>
              </div>
            </ShineBorder>
          </div>
          <div>
            <ShineBorder className="h-full" borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="People receiving aid"
                  fill
                  className="object-cover"
                />
              </div>
            </ShineBorder>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Objectives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <ShineBorder key={index} borderClassName="border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-black/50 backdrop-blur-xl p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{objective}</p>
                  </div>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Aid application process"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black/50 backdrop-blur-xl p-4">
              <h3 className="font-medium mb-1">Easy Application Process</h3>
              <p className="text-sm text-gray-400">Apply for multiple aid programs through a single platform</p>
            </div>
          </ShineBorder>

          <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Personalized recommendations"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black/50 backdrop-blur-xl p-4">
              <h3 className="font-medium mb-1">Personalized Recommendations</h3>
              <p className="text-sm text-gray-400">Get matched with programs that fit your specific needs</p>
            </div>
          </ShineBorder>

          <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Organization management"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-black/50 backdrop-blur-xl p-4">
              <h3 className="font-medium mb-1">Efficient Program Management</h3>
              <p className="text-sm text-gray-400">Tools for organizations to manage and distribute aid effectively</p>
            </div>
          </ShineBorder>
        </div>
      </ShineBorder>
    </section>
  )
}
