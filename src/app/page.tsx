"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { HomeIcon, ShieldCheck } from "lucide-react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.2, // triggers a bit before full view
  });

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isInView]);
  const features = [
    {
      id: 1,
      title: "Live Effortlessly",
      description:
          "Automate lighting, climate, and entertainment. Our system adapts to your lifestyle — not the other way around.",
      icon: <HomeIcon className="w-16 h-16 text-teal-400 mb-4" />,
      image: "/smart_life.jpg",
      bg: "bg-[#0f1e38]",
      reverse: false,
    },
    {
      id: 2,
      title: "Always Secure. Always Connected.",
      description:
          "Monitor and control your home from anywhere in the world. Peace of mind starts with smart security.",
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
            ref={ref}
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
        </section>

        {/* Features Section */}
        {features.map((feature) => (
            <SnapSection key={feature.id} feature={feature} />
        ))}
      </main>
  );
}

function SnapSection({ feature }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.2,
  });

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isInView]);

  return (
      <section
          ref={ref}
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
