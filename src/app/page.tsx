"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HomeIcon, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      {/* Section 1: Hero */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6 gap-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home_image.jpg')" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Home. Smarter.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl font-bold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover intelligent living with seamless automation and total control
          — all in the palm of your hand.
        </motion.p>
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        > */}
        {/* <Button className="text-lg px-6 py-3">Get Started</Button> */}
        {/* </motion.div> */}
      </section>

      {/* Section 2: Smart Living */}
      <section className="h-screen grid md:grid-cols-2 items-center px-10 gap-12 bg-[#0f1e38] text-white">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <HomeIcon className="w-16 h-16 text-teal-400 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Live Effortlessly</h2>
          <p className="text-gray-300 text-lg">
            Automate lighting, climate, and entertainment. Our system adapts to
            your lifestyle — not the other way around.
          </p>
        </motion.div>
        <motion.img
          src="/smart_life.jpg"
          alt="Smart Living"
          className="rounded-xl shadow-xl w-full h-auto"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </section>

      {/* Section 3: Security and Control */}
      <section className="h-screen grid md:grid-cols-2 items-center px-10 gap-12 py-5 bg-[#132033] text-white">
        <motion.img
          src="/home_security.jpg"
          alt="Home Security"
          className="rounded-xl shadow-xl w-full h-auto"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ShieldCheck className="w-16 h-16 text-green-400 mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Always Secure. Always Connected.
          </h2>
          <p className="text-gray-300 text-lg">
            Monitor and control your home from anywhere in the world. Peace of
            mind starts with smart security.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
