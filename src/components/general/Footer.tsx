"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "./RoutesHelper";
import { useLanguage } from "@/contexts/language";

const footerText = {
  description: {
    en: "Empowering Your Lifestyle Through Smart, Secure Home Automation. Enhance the way you live with innovative automation solutions that combine convenience, efficiency, and security. Our technology is designed to simplify everyday tasks, protect what matters most, and give you complete control over your home—anytime, anywhere.",
    ar: "تمكين أسلوب حياتك من خلال الأتمتة المنزلية الذكية والآمنة. عزز طريقة عيشك مع حلول الأتمتة المبتكرة التي تجمع بين الراحة والكفاءة والأمان. تم تصميم تقنيتنا لتبسيط المهام اليومية وحماية ما هو مهم ومنحك السيطرة الكاملة على منزلك في أي وقت ومن أي مكان.",
  },
  quickLinks: {
    en: "Quick Links",
    ar: "روابط سريعة",
  },
  followUs: {
    en: "Follow Us",
    ar: "تابعنا",
  },
  copyright: {
    en: `© ${new Date().getFullYear()} KPEK. All rights reserved.`,
    ar: `جميع الحقوق محفوظ.${new Date().getFullYear()} .KPEK © `,
  },
};

export default function Footer() {
  const { lang, dir } = useLanguage();
  return (
    <footer
      className="h-full border-t bg-white px-8 py-10 text-gray-800"
      dir={dir}
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-3">
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
          <p className="text-sm text-gray-500">
            {footerText.description[lang]}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-lg font-semibold">
            {footerText.quickLinks[lang]}
          </h4>
          {routes.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-sm text-gray-600 transition hover:text-blue-600"
            >
              {name} {/* Ensure route names also support {en, ar} */}
            </Link>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">{footerText.followUs[lang]}</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577130665439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5 transition-all duration-300 hover:text-blue-500" />
            </a>
            <a
              href="https://twitter.com/kpekcoumpany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5 font-bold transition-all duration-300 hover:text-[#1DA1F2]" />
            </a>
            <a
              href="https://www.instagram.com/kpekcoumpany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 transition-all duration-300 hover:text-pink-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/kpek-for-smart-home-solution-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 transition-all duration-300 hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-400">
        {footerText.copyright[lang]}
      </div>
    </footer>
  );
}
