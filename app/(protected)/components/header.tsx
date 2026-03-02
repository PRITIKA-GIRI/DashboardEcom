"use client";


import useLogout from "@/app/hooks/useLogout";
import { useAuthStore } from "@/app/store/authStore";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { FiLogOut } from "react-icons/fi";

export default function Header() {
    const logout = useLogout();
    const user = useAuthStore((s) => s.user);

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
            <div>
                <div className="md:hidden text-white">
                    <SidebarTrigger size="icon-lg" />
                </div>
            </div>

            <div className="flex items-center gap-7">
                <div className="text-md text-white">
                    Welcome, {user?.username || "User"}
                </div>
                <button
                    onClick={logout}
                    className="px-4 py-2 text-red-500 bg-white rounded-lg font-medium"
                    title="logout"
                >
                    <FiLogOut size={18} />
                </button>
            </div>

        </div>
    );
}