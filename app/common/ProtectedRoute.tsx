
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const token = useAuthStore((s) => s.user?.token);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.replace("/login"); 
        }
    }, [token, router]);

    if (!token) return null;

    return <>{children}</>;
}