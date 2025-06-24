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

export default function ProductsCategoriesPage() {
  const categories = Object.keys(Products);
  const categoryIcons: Record<string, JSX.Element> = {
    "SMART WIFI LIGHTING SWITCHES": <LightbulbIcon className="w-6 h-6" />,
    "IR DEVICES CONTROL": <RadioIcon className="w-6 h-6" />,
    SENSORS: <ActivitySquareIcon className="w-6 h-6" />,
    "SAFETY PRODUCTS": <ShieldCheckIcon className="w-6 h-6" />,
    "VOICE CONTROL": <MicIcon className="w-6 h-6" />,
    "SMART DOOR LOCK": <LockIcon className="w-6 h-6" />,
  };
  return (
    <main className="min-h-screen w-full bg-gray-900  text-white py-12 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Product Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          const icon = categoryIcons[category] ?? (
            <ArrowRight className="w-6 h-6" />
          );

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition duration-500"
            >
              <Link
                href={`/categories/${category}`}
                className="flex items-center gap-4 group"
              >
                <div className="text-blue-600 group-hover:text-cyan-400 transition">
                  {icon}
                </div>
                <span className="text-lg text-gray-900 hover:text-sky-500 font-semibold group-hover:underline">
                  {category}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
