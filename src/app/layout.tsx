import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/global/Sidebar";
import { VoiceProvider } from "@/lib/client/contexts/voice-context";
import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Emergify",
  description: "AI emergency responder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={cn(
          "h-screen max-h-screen bg-background font-sans antialiased",
        )}
      >
        <VoiceProvider>
          <div className="flex h-full flex-col">
            <Header />
            <Sidebar />
            <div className="flex-1 overflow-auto">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </VoiceProvider>
      </body>
    </html>
  );
}
