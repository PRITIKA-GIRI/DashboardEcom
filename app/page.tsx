
import Dashboard from "./dashboard/page";
import ProtectedLayout from "./(protected)/layout";
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function Home() {
  return (
    <ProtectedLayout>
  

      <Dashboard />
    </ProtectedLayout>
  );
}
