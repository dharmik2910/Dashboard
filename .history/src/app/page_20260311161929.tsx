import { AppSidebar } from "@/components/app-sidebar"
import { DataTable } from "@/components/data-table"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface Props {
  params: Promise<{
    id?: string
  }>
}

async function getTableData() {
  const res = await fetch("https://dummyjson.com/users?limit=100", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const { users } = await res.json()

  return users.map((user: any) => ({
    id: user.id,
    header: `${user.firstName} ${user.lastName}`,
    type: "User",
    status: "Done",
    target: user.age.toString(),
    limit: "0",
    reviewer: user.email,
  }))
}

export default async function Home() {
  const data = await getTableData()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
