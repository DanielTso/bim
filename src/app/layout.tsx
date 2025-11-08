import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/ToastContainer";

export const metadata: Metadata = {
  title: "TradeCareers - Your Path to a Rewarding Trade Career",
  description: "Discover trade careers, find training programs, access educational resources, and connect with a community of trade professionals.",
  keywords: "trade careers, apprenticeships, skilled trades, vocational training, blue collar jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <ToastProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
