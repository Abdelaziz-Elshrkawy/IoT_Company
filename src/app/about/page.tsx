"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="h-[100%] pb-20 lg:pb-1 lg:min-h-screen pt-20 flex items-center  justify-center bg-[#0a1526] px-6 text-white">
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
          className="text-lg my-6 leading-relaxed text-gray-300"
        >
          <span className="text-white font-semibold">KPEK</span>, For Smart Home
          Solutions is your trusted partner in transforming traditional houses
          into intelligent, secure, and energy-efficient homes. We specialize in
          cutting-edge smart home systems that provide full control,
          convenience, and peace of mind — anytime, anywhere. From smart
          lighting, automated curtains, and voice-controlled appliances, to
          advanced security features like gas/water leak detection, surveillance
          systems, and smart door locks — we bring future-ready technology to
          your doorstep. Whether through voice, mobile apps, or touchless
          gestures, you’re always in command. We also offer customized smart
          solutions for businesses, helping improve efficiency, safety, and
          energy management.
        </motion.p>

        <motion.div
          className=" mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-bold text-3xl m-2">Why choose us?</p>
          <p>✔ Proven expertise with global smart home brands</p>
          <p>✔ 100% customer satisfaction and ongoing support</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mt-5"
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
