"use client";

import ComingSoon from "@/components/general/ComingSoon";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Smart Light Bulb",
    description: "Control brightness and color from your phone.",
    image: "/products/bulb.jpg",
    whatsappMessage: "I'm interested in the Smart Light Bulb!",
  },
  {
    id: 2,
    name: "Smart Door Lock",
    description: "Secure and unlock your door remotely.",
    image: "/products/lock.jpg",
    whatsappMessage: "I'd like to know more about the Smart Door Lock!",
  },
  {
    id: 3,
    name: "Smart Thermostat",
    description: "Automatically adjusts your home temperature.",
    image: "/products/thermostat.jpg",
    whatsappMessage: "Please tell me about the Smart Thermostat!",
  },
  // ... more products (copy as needed)
];

export default function OffersPage() {
  const [animationkey, setAniamtionKey] = useState();
  useEffect(() => {
    setAniamtionKey(new Date());
  }, []);
  return (
    <main
      key={animationkey}
      className="min-h-screen bg-gray-900 text-black py-16 px-6 md:px-12"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        Our Offers
      </h1>
      <ComingSoon />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white w-full h-full flex flex-col items-center justify-start rounded-md"
          >
            <img
              src="/product.jpg"
              alt={product.name}
              className="w-[40%] object-cover"
            />

            <div className="w-full flex flex-col items-start p-4 gap-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-300 dark:text-gray-700">
                {product.description}
              </p>
              <a
                href={`https://wa.me/201234567890?text=${encodeURIComponent(
                  product.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Buy on WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div> */}
    </main>
  );
}
