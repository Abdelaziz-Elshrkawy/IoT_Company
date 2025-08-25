import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/general/NavigationBar";
import Footer from "@/components/general/Footer";
import { Toaster } from "sonner";
import React from "react";

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
        <NavigationBar key={0} />

        <div className="mt-14 md:mt-16">{children}</div>

        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
