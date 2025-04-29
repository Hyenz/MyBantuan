"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonatorForm } from "./donator-form"
import { AidProviderForm } from "./aid-provider-form"

export function ContributeOptions() {
  const [activeTab, setActiveTab] = useState("individual")

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Tabs defaultValue="individual" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="individual">Individual Donor</TabsTrigger>
          <TabsTrigger value="organization">Aid Provider</TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Donate as an Individual</h2>
            <p className="text-gray-600 mb-4">
              Donate physical items such as food, clothing, or other essential supplies to help those in need.
            </p>
            <DonatorForm />
          </div>
        </TabsContent>

        <TabsContent value="organization">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Register as an Aid Provider</h2>
            <p className="text-gray-600 mb-4">
              Organizations can register to provide structured aid programs and services to communities in need.
            </p>
            <AidProviderForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
