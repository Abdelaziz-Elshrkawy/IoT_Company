import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-8 py-10 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-4">
          <img src="/logo.jpg" alt="Company Logo" className="h-12 w-auto" />
          <p className="text-sm text-gray-500">
            Empowering your life with smart and secure home automation.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Products", "/products"],
            ["Offers", "/offers"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-sky-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-700" />
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
