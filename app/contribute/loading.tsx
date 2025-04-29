import { Skeleton } from "@/components/ui/skeleton"

export default function ContributeLoading() {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-3/4 mx-auto mb-2" />
          <Skeleton className="h-5 w-2/3 mx-auto mb-8" />

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex border-b mb-6">
              <Skeleton className="h-10 w-32 mr-4" />
              <Skeleton className="h-10 w-32" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-10 w-32 mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
