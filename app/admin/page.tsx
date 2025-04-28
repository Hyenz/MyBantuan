import { AdminDashboard } from "@/components/admin/dashboard"

export default function AdminPage() {
  // In a real application, you would check server-side session here
  // For now, we'll just render the dashboard
  // If not authenticated, redirect to login
  // const session = await getServerSession()
  // if (!session || !session.user || !session.user.isAdmin) {
  //   redirect('/admin/login')
  // }

  return <AdminDashboard />
}
