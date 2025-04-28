"use client"
import { BarChart3, Users, FileText, Package, DollarSign, Megaphone, Settings } from "lucide-react"

type ActiveView = "overview" | "applicants" | "programs" | "users" | "donations" | "announcements"

interface SidebarProps {
  activeView: ActiveView
  setActiveView: (view: ActiveView) => void
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <BarChart3 className="h-5 w-5" /> },
    { id: "applicants", label: "Applicants", icon: <Users className="h-5 w-5" /> },
    { id: "programs", label: "Programs", icon: <Package className="h-5 w-5" /> },
    { id: "users", label: "Users", icon: <FileText className="h-5 w-5" /> },
    { id: "donations", label: "Donations", icon: <DollarSign className="h-5 w-5" /> },
    { id: "announcements", label: "Announcements", icon: <Megaphone className="h-5 w-5" /> },
  ]

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto">
      <div className="py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as ActiveView)}
              className={`flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md ${
                activeView === item.id ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-2 mt-8">
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <Settings className="h-5 w-5" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
