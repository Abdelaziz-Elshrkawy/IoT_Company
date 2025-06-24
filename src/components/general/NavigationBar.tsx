"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { routes } from "./RoutesHelper";

export function NavigationBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);
  return (
    <div className="flex flex-col fixed w-full top-0 z-[100]">
      {/* Backdrop - must come BEFORE sidebar in DOM */}
      {/* {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )} */}
      {/* Top Navbar - visible only on md+ */}
      <header className="hidden md:flex items-center justify-between px-6 py-4 shadow bg-white">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" width={40} height={40} alt="Logo" />
          <span className="font-bold text-lg">KPEK</span>
        </Link>
        <nav className="flex gap-6 font-[roboto] font-bold items-end">
          {routes.map((route, i) => (
            <Link key={i} href={route.path} className="text-lg text-gray-900">
              {route.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 z-50 shadow bg-white relative">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" width={28} height={28} alt="Logo" />
          <span className="font-semibold text-base">KPEK</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-900"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6 mr" />
        </Button>
      </header>

      {/* Sidebar - must come AFTER backdrop in DOM */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Custom Sidebar */}
      <div
        className={`fixed top-14 right-0 h-screen w-[50%] z-40 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-5">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.path}
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-600"
              onClick={() => setSidebarOpen(false)}
            >
              {route.icon}
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
