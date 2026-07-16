import { AppSidebar } from "@/components/App-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (  <html lang="en">
      <body>
    
  
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
    </body>
    </html>
  )
}