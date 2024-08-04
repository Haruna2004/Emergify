import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/global/Sidebar";
import { VoiceProvider } from "@/lib/client/contexts/voice-context";
// import VoiceAssist from "@/lib/client/voice-assist/useVoiceAssist";
// import VoiceControl from "@/lib/client/voice-assist/voiceControl";

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
          <Header />
          <Sidebar />
          {children}
          {/* <VoiceAssist /> */}
          {/* <VoiceControl /> */}
          <Toaster />
        </VoiceProvider>
      </body>
    </html>
  );
}
