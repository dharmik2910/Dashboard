import { DataTable } from "@/components/Table"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function UsersPage() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold tracking-tight px-4 lg:px-6">Users</h2>
              </div>
              <DataTable />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
