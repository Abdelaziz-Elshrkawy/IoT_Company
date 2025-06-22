"use client";

import { whatsAppPhoneNumber } from "@/helpers/helpers";
import {
  constructProductImagePath,
  offers,
  Products,
} from "@/helpers/products";
import { ProductI } from "@/types/types";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Bed, Home, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const getProductRouteInfo = (name: string): string | undefined => {
  for (const [categoryName, products] of Object.entries(Products)) {
    const match = products.find((p: ProductI) => p.name === name) as ProductI;
    if (match) {
      return `/${categoryName}/${categoryName}-${match.urlName}`;
    }
  }
  return undefined;
};

export default function OffersPage() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <>
      <main
        key={"offers"}
        className="min-h-screen bg-gray-900 text-black py-16 px-6 md:px-12"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Our Offers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const whatsappMessage = `Hello, I’m interested in the "${
              offer.name
            }" package which includes:\n${offer.items
              .map((item) => `- ${item.quantity}x ${item.name}`)
              .join("\n")}`;

            const renderIcon = () => {
              if (offer.name === "Show")
                return <Lightbulb className="text-yellow-500 w-6 h-6" />;
              if (["Room 1", "Room 2"].includes(offer.name))
                return <Bed className="text-blue-500 w-6 h-6" />;
              if (["Home 1", "Home 2"].includes(offer.name))
                return <Home className="text-green-600 w-6 h-6" />;
              if (offer.name === "Safety")
                return <ShieldCheck className="text-red-500 w-6 h-6" />;
              return null;
            };

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between relative"
              >
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 text-xs rounded-full shadow-md font-bold">
                  10% OFF
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {renderIcon()}
                  <h2 className="text-2xl font-bold text-black">
                    {offer.name}
                  </h2>
                </div>

                <table className="w-full text-sm mb-4">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-1">Product</th>
                      <th className="pb-1">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offer.items.map((item, i) => {
                      const urlName = getProductRouteInfo(item.name);
                      const imagePath = constructProductImagePath(item.name);
                      return (
                        <tr key={i}>
                          <td className="py-1 pr-4">
                            {urlName ? (
                              <Link
                                href={`/categories${urlName}-offers`}
                                className="text-blue-600 underline hover:text-blue-800"
                                onMouseEnter={() => setHoveredImage(imagePath)}
                                onMouseMove={(e) =>
                                  setCursorPos({ x: e.clientX, y: e.clientY })
                                }
                                onMouseLeave={() => setHoveredImage(null)}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              item.name
                            )}
                          </td>
                          <td className="py-1">{item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsAppPhoneNumber}&text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm w-full rounded"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </main>

      {hoveredImage && (
        <div
          className="hidden lg:block pointer-events-none fixed z-50"
          style={{
            top: cursorPos.y + 20,
            left: cursorPos.x + 20,
          }}
        >
          <Image
            width={100}
            height={100}
            src={hoveredImage}
            alt="Preview"
            className="w-40 h-40 object-contain border border-gray-300 rounded-md shadow-lg bg-white"
          />
        </div>
      )}
    </>
  );
}
