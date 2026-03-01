"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
    FiHome,
    FiShoppingCart,
    FiUsers,
    FiLogOut,
} from "react-icons/fi"

const menuItems = [
    { title: "Dashboard", url: "/", icon: FiHome },
    { title: "Products", url: "/products", icon: FiShoppingCart },
    { title: "Users", url: "/users", icon: FiUsers },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon" className="border-r">
            {/* Header */}
            <SidebarHeader className="p-4 text-xl font-bold text-[#4880FF] bg-[#273142]">
                <p>Ecom<span className="text-white">Admin</span></p>
            </SidebarHeader>

            {/* Content */}
            <SidebarContent className="bg-[#273142]">
                <SidebarGroup>
                    <SidebarMenu>
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.url

                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`transition-all font-semibold text-white ${isActive
                                            ? "bg-[#4880FF] py-4 text-white dark:bg-white dark:text-black"
                                                : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                            }`}
                                    >
                                        <Link href={item.url} className="flex items-center gap-3">
                                            <Icon size={18} />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="p-4 text-sm text-muted-foreground bg-[#273142]">
                © 2026 Ecom
            </SidebarFooter>
        </Sidebar>
    )
}