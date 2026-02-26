import { SidebarProvider } from "@/components/ui/sidebar";
import ProtectedRoute from "../common/ProtectedRoute";
import { AppSidebar } from "../common/app-sidebar";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    return (
        <ProtectedRoute>
            <SidebarProvider>
                <div className="flex min-h-screen w-full">
                    <AppSidebar />

                    <main className="flex-1 p-6 bg-[#1B2431]">{children}</main>
                </div>
            </SidebarProvider>
        </ProtectedRoute>
    );
}