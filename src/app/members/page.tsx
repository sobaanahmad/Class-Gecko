import MembersPage from "@/components/ui/memberscomponents/memberspage";
import DashboardHeader from "@/components/ui/common/dashboardheader";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/sidebar/sidebar";

export default function Members() {
  return (
    <SidebarProvider className="[&_[data-slot=sidebar-gap]]:hidden">
      <div className="min-h-screen w-full">
        <AppSidebar />
        <main
          className="
            flex min-h-screen flex-col
            md:pl-32
            lg:pl-60
          "
        >
          <DashboardHeader />
          <div className="flex-1 p-4 sm:p-6 overflow-auto bg-[#F5F5F5]">
           <MembersPage />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
