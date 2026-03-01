"use client";


import { toast } from "sonner";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/navigation";

export default function useLogout() {
  const logoutStore = useAuthStore((s) => s.logout);
  const router = useRouter();

  const logout = () => {
    logoutStore();
    toast.success("Logged out successfully!");
    router.replace("/login");
  };

  return logout;
}
