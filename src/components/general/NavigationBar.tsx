"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BoxIcon, HomeIcon, Menu, PercentCircle } from "lucide-react";
import { useState } from "react";
import { TbExclamationCircle } from "react-icons/tb";

export function NavigationBar() {
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
    // {
    //   path: "/contact",
    //   name: "ContactUs",
    // },
    {
      path: "/about",
      name: "About",
      icon: <TbExclamationCircle className="inline pr-1" />,
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col fixed w-full fixed top-0 z-[100]">
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)} // click to close
        />
      )}
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
          {/*<Link href="/products" className="text-lg">Products</Link>*/}
          {/*<Link href="/offers" className="text-lg">Offers</Link>*/}
          {/*<Link href="/about" className="text-lg">About</Link>*/}
          {/*<Link href="/contact" className="text-lg">Contact</Link>*/}
        </nav>
      </header>

      {/* Mobile Header + Sidebar Toggle Button */}
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

      {/* Sidebar - mobile only */}
      <aside
        className={` md:hidde4 fixed top-14 left-0 h-screen w-[40%] bg-white border-r shadow transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 h-scree w-[70vw] blur-lg"></div>
        <nav className="flex flex-col p-4 gap-4 font-[roboto] font-bold">
          {routes.map((route, i) => (
            <div className="flex" key={i}>
              <Link
                key={i}
                href={route.path}
                onClick={() => setSidebarOpen(false)}
              >
                {route.name}
              </Link>
            </div>
          ))}
        </nav>
        <div>
          <Image alt="logo" width={40} height={40} src={"/logo.jpg"} />
        </div>
      </aside>
    </div>
  );
}
