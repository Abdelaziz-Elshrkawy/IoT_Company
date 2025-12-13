"use client";

import {
  LightbulbIcon,
  RadioIcon,
  ShieldCheckIcon,
  LockIcon,
  MicIcon,
  ActivitySquareIcon,
} from "lucide-react";
import { JSX } from "react";

import { Products } from "@/helpers/helpers";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export default function ProductsCategoriesPage() {
  const categories = Object.values(Products);
  const { lang, dir } = useLanguage();
  const categoryIcons: Record<string, JSX.Element> = {
    "SMART WIFI LIGHTING SWITCHES": <LightbulbIcon className="h-6 w-6" />,
    "IR DEVICES CONTROL": <RadioIcon className="h-6 w-6" />,
    SENSORS: <ActivitySquareIcon className="h-6 w-6" />,
    "SAFETY PRODUCTS": <ShieldCheckIcon className="h-6 w-6" />,
    "VOICE CONTROL": <MicIcon className="h-6 w-6" />,
    "SMART DOOR LOCK": <LockIcon className="h-6 w-6" />,
  };
  return (
    <main
      dir={dir}
      className="min-h-screen w-full bg-gray-900 px-6 py-12 text-white md:px-12"
    >
      <h1 className="mb-12 text-center text-4xl font-bold">
        Product Categories
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((category, index) => {
          const icon = categoryIcons[category.catName["en"]] ?? (
            <ArrowRight className="h-6 w-6" />
          );

          return (
            <motion.div
              key={category.catName["en"]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg bg-gray-100 p-6 shadow transition duration-500 hover:shadow-md dark:bg-gray-800"
            >
              <Link
                href={`/categories/${category.catName["en"]}`}
                className="group flex items-center gap-4"
              >
                <div className="text-blue-600 transition group-hover:text-cyan-400">
                  {icon}
                </div>
                <span className="text-lg font-semibold text-gray-900 group-hover:underline hover:text-sky-500">
                  {category.catName[lang]}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
