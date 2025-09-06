"use client";

import Back from "@/components/general/Back";
import { Button } from "@/components/ui/button";
import { courses, courseWhatsAppMessageConstructor } from "@/helpers/helpers";
import { Routes } from "@/types/enums";
import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  BookOpen,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CourseDetailsPage({ param }: { param: string }) {
  const course = courses.find((c) => c.title === param);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <p className="text-2xl font-semibold">Course not found.</p>
          <Link
            href={Routes.Courses}
            className="group flex items-center justify-center gap-2"
          >
            <ArrowLeftCircle className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-1" />{" "}
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-10 text-white">
      <Back
        className="top-16 md:top-14 lg:top-16"
        route={Routes.Courses}
        text="Courses"
        color="white"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2 text-center text-4xl font-extrabold text-white sm:text-5xl"
      >
        {course.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 text-center text-xl text-gray-400"
      >
        {course.level}
      </motion.p>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-full max-w-2xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl border border-gray-700 bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-2 font-medium text-black">
              <Clock className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">Duration:</span>
              <span className="text-lg">{course.hours}</span>
            </div>
            <div className="flex items-center gap-2 font-medium text-black">
              <DollarSign className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold">Price:</span>
              <span className="text-lg">{course.price}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="rounded-xl border border-gray-700 bg-white p-6 shadow-2xl"
          >
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-black">
              <BookOpen className="h-6 w-6 text-cyan-400" />
              Course Content
            </h2>
            <ul className="list-disc space-y-2 ps-6 text-gray-400">
              {course.content.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="rounded-xl border border-gray-700 bg-white p-6 shadow-2xl"
          >
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-black">
              <Target className="h-6 w-6 text-cyan-400" />
              Learning Outcomes
            </h2>
            <ul className="list-disc space-y-2 ps-6 text-gray-400">
              {course.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="mt-16 text-center text-white"
      >
        <div className="mt-6 flex w-full flex-col items-center justify-center">
          <Button
            asChild
            className="w-full max-w-sm rounded-full bg-green-600 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50"
          >
            <a
              href={courseWhatsAppMessageConstructor(course.title, origin)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
