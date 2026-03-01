"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import ProtectedRoute from "../common/ProtectedRoute";
import { AppSidebar } from "../common/app-sidebar";
import { ReactNode } from "react";
import Header from "./components/header";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    return (
        <ProtectedRoute>
            <SidebarProvider>
                <div className="flex flex-col min-h-screen w-full">

                    {/* Top Header */}
                    <Header />

                    {/* Body Section */}
                    <div className="flex flex-1">

                        {/* Sidebar */}
                        <AppSidebar />

                        {/* Main Content */}
                        <main className="flex-1 p-6 bg-[#1B2431]">
                            {children}
                        </main>

                    </div>
                </div>
            </SidebarProvider>
        </ProtectedRoute>
    );
}