import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbBrandTiktok } from "react-icons/tb";
import { routes } from "./RoutesHelper";
export default function Footer() {
  return (
    <footer className="h-full bg-white text-gray-800 px-8 py-10 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/">
            <Image
              width={300}
              height={300}
              src="/logo.jpg"
              alt="Company Logo"
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-500 ">
            Empowering Your Lifestyle Through Smart, Secure Home Automation
            Enhance the way you live with innovative automation solutions that
            combine convenience, efficiency, and security. Our technology is
            designed to simplify everyday tasks, protect what matters most, and
            give you complete control over your home—anytime, anywhere.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          {routes.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577130665439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-blue-500 transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com/kpekcoumpany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandTiktok className="w-5 h-5 hover:text-red-300 font-bold transition-all duration-300" />
            </a>
            <a
              href="https://www.instagram.com/kpekcoumpany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-pink-500 transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/kpek-for-smart-home-solution-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-700 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} SmartHome Inc. All rights reserved.
      </div>
    </footer>
  );
}
