import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Dashboard from "./dashboard/page";


export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">

        <AppSidebar />

        <main className="flex-1 p-6 bg-[#1B2431]">
          {/* Mobile Toggle Button */}
          <div className="md:hidden mb-4">
            <SidebarTrigger />
          </div>

        <Dashboard/>
        </main>

      </div>
    </SidebarProvider>
  );
}
