import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "../../sidebar";
import { SubMenuSidebar } from "../demos/sub-menu-sidebar";
import { SidebarHeader } from "./sidebar-header";

export function SidebarLayout() {
  return (
    <SidebarProvider>

      <SubMenuSidebar/> {/* This is one of the sidebar component variation */}

      {/* This is used for triggering the sidebar with the main component */}
        <SidebarInset>

            {/* Header Component For Sidebar */}
            <SidebarHeader>
                {/* This is where the header content will be placed */}
            </SidebarHeader>

            <main className="flex flex-1 flex-col gap-4 p-4">
                {/* This is where the main content will be placed */}
                <Outlet/> {/* Outlet is used when lazy import is used and the Main Layout Component is called as Component */}
            </main>

        </SidebarInset>
    </SidebarProvider>
  )
}