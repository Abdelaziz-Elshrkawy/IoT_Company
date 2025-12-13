import { useLanguage } from "@/contexts/language";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

function Back({
  route,
  text,
  color,
  className,
}: {
  route: string;
  text: string;
  color?: string;
  className?: string;
}) {
  const { lang } = useLanguage();
  return (
    <>
      <Link
        href={route}
        className={twMerge(
          `group md:mt-6 lg:mt-3 text-${
            color || "black"
          } text-gray-800hover:text-blue-600 absolute top-6 left-6 inline-flex items-center gap-2 underline-offset-1 transition-all hover:underline lg:top-10 dark:hover:text-cyan-400`,
          className,
        )}
      >
        <ArrowLeftCircleIcon className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-1" />
        <span className="text-sm font-semibold">
          {lang === "en" ? "Back to" : "العودة الى"} {text}
        </span>
      </Link>
    </>
  );
}

export default Back;
