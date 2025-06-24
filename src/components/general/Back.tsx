import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Back({
  route,
  text,
  color,
}: {
  route: string;
  text: string;
  color?: string;
}) {
  return (
    <>
      <Link
        href={route}
        className={`group md:mt-6 lg:mt-3 text-${
          color || "black"
        } inline-flex items-center gap-2 absolute left-6 top-6 lg:top-10 text-gray-800hover:text-blue-600 dark:hover:text-cyan-400 transition-all hover:underline underline-offset-1`}
      >
        <ArrowLeftCircleIcon className="w-6 h-6  group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="text-sm font-semibold ">Back to {text}</span>
      </Link>
    </>
  );
}

export default Back;
