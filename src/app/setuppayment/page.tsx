import SetupPaymentSidebar from "@/components/ui/setuppaymentcomponents/sidebar";
import SetupPaymentArea from "@/components/ui/setuppaymentcomponents/submit";

export default function SetupPayment() {
  return (
    <div className="min-h-screen w-full">
      <div className="lg:flex">
        <SetupPaymentSidebar />
        <main className="flex-1 bg-gray-100 min-h-screen">
          <div className="p-4 sm:p-6">
            <SetupPaymentArea />
          </div>
        </main>
      </div>
    </div>
  );
}
