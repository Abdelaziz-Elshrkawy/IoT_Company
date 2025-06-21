"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Products } from "@/helpers/products";
import Link from "next/link";

export default function ProductPage() {
  const [animationkey, setAniamtionKey] = useState<string>();
  useEffect(() => {
    setAniamtionKey(new Date().toString());
  }, []);
  return (
    <main
      key={animationkey}
      className="min-h-screen bg-[#0f1e38] text-black py-16 px-6 md:px-12"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-white">
        Our Products
      </h1>

      {Object.entries(Products).map(([category, products]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2">
            {category}
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {products.map((product, index) => (
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center"
                key={`${category}-${product.name}-${index}`}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${category}-${product.name}`}>
                  <img
                    src={product.image} // Assuming images are in the public directory
                    alt={product.name}
                    className="w-[80%] object-contain rounded-lg mb-4" // object-contain to prevent cropping
                  />
                </Link>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-800 mb-4 flex-grow">
                  {product.description}
                </p>
                {/*<p className="text-lg font-bold text-gray-900 mb-4">*/}
                {/*    Price: {product.price_LE} L.E*/}
                {/*</p>*/}
                <a
                  href={`https://wa.me/201234567890?text=${encodeURIComponent(
                    product.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Buy on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
