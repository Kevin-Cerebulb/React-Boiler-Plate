import { SidebarTrigger } from "../../sidebar";

export function SidebarHeader({ children }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger />
        {children}
      </div>
    </header>
  )
}