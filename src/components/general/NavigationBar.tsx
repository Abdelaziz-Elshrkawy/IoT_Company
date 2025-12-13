"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { routes } from "./RoutesHelper";
import { useLanguage } from "@/contexts/language"; // import your context hook

export function NavigationBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { lang, toggleLang } = useLanguage(); // get lang & toggle function

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="fixed top-0 z-[100] flex w-full flex-col">
      {/* Top Navbar - visible only on md+ */}
      <header className="hidden items-center justify-between bg-white px-6 py-4 shadow md:flex">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" width={40} height={40} alt="Logo" />
          <span className="text-lg font-bold">KPEK</span>
        </Link>

        <nav className="flex items-end gap-6 font-[roboto] font-bold">
          {routes.map((route, i) => (
            <Link key={i} href={route.path} className="text-lg text-gray-900">
              {route.name}
            </Link>
          ))}
          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={lang === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleLang("en")}
            >
              EN
            </Button>
            <Button
              variant={lang === "ar" ? "default" : "outline"}
              size="sm"
              onClick={() => toggleLang("ar")}
            >
              AR
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="relative z-50 flex items-center justify-between bg-white px-4 py-3 shadow md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" width={28} height={28} alt="Logo" />
          <span className="text-base font-semibold">KPEK</span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Button
            variant={lang === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => toggleLang("en")}
          >
            EN
          </Button>
          <Button
            variant={lang === "ar" ? "default" : "outline"}
            size="sm"
            onClick={() => toggleLang("ar")}
          >
            AR
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-gray-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="mr h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Custom Sidebar */}
      <div
        className={`fixed top-14 right-0 z-40 h-screen w-[50%] bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-5 p-6">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.path}
              className="flex items-center gap-2 font-medium text-gray-800 hover:text-blue-600"
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
