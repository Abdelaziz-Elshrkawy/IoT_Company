import Footer from "@/components/general/Footer";
import { NavigationBar } from "@/components/general/NavigationBar";
import { LanguageProvider } from "@/contexts/language";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KPEK",
  description:
    "IoT Smart Home Company Aiming to provide and enhance smart home experience.",
  verification: {
    google: "google4e250d8943a8f0d7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 antialiased`}
      >
        <LanguageProvider>
          <NavigationBar key={0} />
          <div className="mt-14 md:mt-16">{children}</div>
          <Footer />
        </LanguageProvider>

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
