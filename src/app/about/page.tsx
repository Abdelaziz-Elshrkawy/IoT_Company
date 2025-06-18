"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1526] px-6 text-white">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-4"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg mb-6 leading-relaxed text-gray-300"
        >
          At <span className="text-white font-semibold">KPEK</span>, we bridge
          the digital and physical worlds by building cutting-edge IoT
          solutions. Our mission is to simplify connectivity and enable smarter
          systems — from smart homes to industrial automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/about_illustration.jpg"
            alt="IoT Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-[#0a1526]"
          >
            Learn More
          </Button>
        </motion.div> */}
      </div>
    </main>
  );
}
