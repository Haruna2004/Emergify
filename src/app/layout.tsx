import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "LifeSaverAI",
  // FirstLine, Emergify, LifeSaver
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
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
