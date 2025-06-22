"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { HomeIcon, ShieldCheck } from "lucide-react";
import { FeatureI } from "@/types/types";

export default function Home() {
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   amount: 0.2, // triggers a bit before full view
  // });

  // useEffect(() => {
  //   if (isInView && ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [isInView]);
  const features: FeatureI[] = [
    {
      id: 1,
      title: "Live Effortlessly",
      description:
        "Perfectly Tailored to You Simplify your daily routine with intelligent automation of lighting, climate control, and entertainment. Our smart home solutions are designed to seamlessly adapt to your habits and preferences—providing comfort, convenience, and efficiency without you having to lift a finger.",
      icon: <HomeIcon className="w-16 h-16 text-teal-400 mb-4" />,
      image: "/smart_life.jpg",
      bg: "bg-[#0f1e38]",
      reverse: false,
    },
    {
      id: 2,
      title: "Always Secure. Always Connected.",
      description:
        " Anytime, Anywhere Enjoy complete peace of mind with advanced smart security solutions that keep you in control, no matter where you are. Remotely monitor cameras, receive real-time alerts, and manage locks, sensors, and alarms—all from your smartphone. Your home’s safety is always just a tap away.",
      icon: <ShieldCheck className="w-16 h-16 text-green-400 mb-4" />,
      image: "/home_security.jpg",
      bg: "bg-[#132033]",
      reverse: true,
    },
  ];

  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <section
        // ref={ref}
        className="h-screen flex flex-col justify-center items-center text-center px-6 gap-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home_image.jpg')" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Home into a Smart Living Experience
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Experience the future of intelligent living with advanced home
          automation solutions designed for comfort, efficiency, and control.
          Seamlessly integrate lighting, climate, security, and entertainment
          systems — all managed effortlessly from your smartphone or smart
          device, anytime and anywhere.
        </motion.p>
      </section>

      {/* Features Section */}
      {features.map((feature: FeatureI) => (
        <SnapSection key={feature.id} feature={feature} />
      ))}
    </main>
  );
}

function SnapSection({ feature }: { feature: FeatureI }) {
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   amount: 0.2,
  // });

  // useEffect(() => {
  //   if (isInView && ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [isInView]);

  return (
    <section
      // ref={ref}
      className={`h-screen grid md:grid-cols-2 items-center px-10 gap-12 py-5 text-white ${feature.bg}`}
    >
      {!feature.reverse ? (
        <>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {feature.icon}
            <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-300 text-lg">{feature.description}</p>
          </motion.div>
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="rounded-xl shadow-xl w-full h-auto"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </>
      ) : (
        <>
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="rounded-xl shadow-xl w-full h-auto"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {feature.icon}
            <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-300 text-lg">{feature.description}</p>
          </motion.div>
        </>
      )}
    </section>
  );
}
