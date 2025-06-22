"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BoxIcon, HomeIcon, icons, Menu, PercentCircle } from "lucide-react";
import { useState } from "react";
import { TbExclamationCircle } from "react-icons/tb";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function NavigationBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const routes = [
    {
      path: "/",
      name: "Home",
      icon: <HomeIcon className="inline pr-1" />,
    },
    {
      path: "/products",
      name: "Products",
      icon: <BoxIcon className="inline pr-1" />,
    },
    {
      path: "/offers",
      name: "Offers",
      icon: <PercentCircle className="inline pr-1" />,
    },
    {
      path: "/career",
      name: "Career",
    },
    {
      path: "/about",
      name: "About",
      icon: <TbExclamationCircle className="inline pr-1" />,
    },
  ];

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
      <header className="md:hidden flex items-center justify-between px-4 py-3 shadow bg-white z-50 relative">
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
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Sidebar - must come AFTER backdrop in DOM */}
      <SidebarProvider>
        <Sidebar
          open={sidebarOpen}
          onOpenChange={setSidebarOpen}
          className="fixed left-0 h-[calc(100vh-56px)] w-[70%] z-40 bg-white shadow-lg md:hidden"
        >
          <SidebarContent className="pt-16">
            <SidebarMenu>
              {routes.map((route, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={route.path}
                      className="flex items-center gap-2 px-4 py-3 text-[#0a1526] font-semibold hover:bg-gray-100 transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {route.icon}
                      {route.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
