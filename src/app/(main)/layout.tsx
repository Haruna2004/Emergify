import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/global/Sidebar";
import { VoiceProvider } from "@/lib/client/contexts/voice-context";
import Footer from "@/components/global/Footer";
import SidePanel from "@/components/global/SidePanel";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen max-h-screen bg-background">
      <VoiceProvider>
        <div className="flex h-full flex-col md:flex-row">
          <Header />
          <Sidebar />
          <SidePanel />
          <div className="flex-1 overflow-auto scrollbar-thin md:flex-[0.75] lg:flex-[0.85]">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </VoiceProvider>
    </main>
  );
}
