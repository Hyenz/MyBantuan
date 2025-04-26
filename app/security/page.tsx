import { Header } from "@/components/header"
import { ShineBorder } from "@/components/ui/shine-border"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Lock, Shield, ShieldAlert, ShieldCheck } from "lucide-react"

export default function DataSecurityPage() {
  const securityFeatures = [
    {
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure password policies protect user accounts",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions ensure users only access appropriate information",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Encrypted Data Storage",
      description: "All sensitive data is encrypted at rest and in transit",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Security Monitoring",
      description: "24/7 monitoring for suspicious activities and potential threats",
      icon: <ShieldAlert className="h-6 w-6" />,
    },
  ]

  const faqs = [
    {
      question: "How is my personal information protected?",
      answer:
        "All personal information is encrypted using industry-standard AES-256 encryption. Our system implements strict access controls, ensuring only authorized personnel can access your data when necessary for processing applications or providing support.",
    },
    {
      question: "Who can see my application details?",
      answer:
        "Your application details are only visible to you and the specific organization administering the aid program you applied for. System administrators may access limited information for troubleshooting purposes, but all access is logged and monitored.",
    },
    {
      question: "How long is my data stored?",
      answer:
        "We retain your data for as long as necessary to fulfill the purposes outlined in our privacy policy. You can request data deletion at any time through your account settings, subject to legal retention requirements.",
    },
    {
      question: "What security certifications does the platform have?",
      answer:
        "Our platform complies with SOC 2 Type II, GDPR, and CCPA requirements. We undergo regular security audits and penetration testing to ensure the highest standards of data protection.",
    },
    {
      question: "How can I report a security concern?",
      answer:
        "If you discover a security vulnerability or have concerns about data privacy, please contact our security team immediately at security@cropstudio.com. We take all reports seriously and will investigate promptly.",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Data Security & Access Control</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We prioritize the security and privacy of your data with industry-leading protection measures and
              transparent access controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <ShineBorder key={index} borderClassName="border border-white/10 rounded-xl">
                <Card className="bg-black/50 backdrop-blur-xl border-0 text-white h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {feature.icon}
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </ShineBorder>
            ))}
          </div>

          <ShineBorder borderClassName="border border-white/10 rounded-xl mb-12">
            <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
              <CardHeader>
                <CardTitle>Our Security Commitment</CardTitle>
                <CardDescription className="text-gray-400">
                  We implement comprehensive security measures to protect your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Regular Security Audits</p>
                      <p className="text-gray-400">Our systems undergo regular third-party security assessments</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Data Encryption</p>
                      <p className="text-gray-400">All sensitive data is encrypted both at rest and in transit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Access Controls</p>
                      <p className="text-gray-400">Strict role-based access controls limit data visibility</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Compliance</p>
                      <p className="text-gray-400">We comply with industry standards and regulations</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder borderClassName="border border-white/10 rounded-xl">
            <Card className="bg-black/50 backdrop-blur-xl border-0 text-white">
              <CardHeader>
                <CardTitle>Security & Privacy FAQ</CardTitle>
                <CardDescription className="text-gray-400">
                  Common questions about how we protect your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </main>
  )
}
