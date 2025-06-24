"use client";

import {
  constructOffersImagePath,
  whatsAppPhoneNumber,
  offers,
} from "@/helpers/helpers";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Bed, Home, ShieldCheck } from "lucide-react";
import Image from "next/image";

// const getProductRouteInfo = (name: string): string | undefined => {
//   for (const [categoryName, products] of Object.entries(Products)) {
//     const match = products.find((p: ProductI) => p.name === name);
//     if (match) {
//       return `/${categoryName}/${categoryName}-${match.urlName}`;
//     }
//   }
//   return undefined;
// };

export default function OffersPage() {
  // const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  // const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
  //   x: 0,
  //   y: 0,
  // });

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-800 to-gray-900 text-white py-16 px-6 md:px-12">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Limited Time Offers</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our exclusive smart home packages — premium features,
            unbeatable prices.
          </p>
        </section>

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
                className="bg-white text-gray-800 shadow-2xl rounded-2xl p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-3xl relative group"
              >
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-600 to-pink-500 text-white px-3 py-1 text-xs rounded-full shadow-md font-bold">
                  10% OFF
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {renderIcon()}
                  <h2 className="text-2xl font-bold">{offer.name}</h2>
                </div>

                <div className="relative mb-6 flex justify-center">
                  <Image
                    src={constructOffersImagePath(offer.name)}
                    alt={offer.name}
                    width={400}
                    height={400}
                    className="rounded-lg object-contain border border-gray-200"
                  />
                </div>

                {/* <table className="w-full text-sm text-gray-700 mb-4 border border-gray-200 rounded overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-3 text-left">Product</th>
                      <th className="py-2 px-3 text-left">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offer.items.map((item, i) => {
                      const urlName = getProductRouteInfo(item.name);
                      const imagePath = constructProductImagePath(item.name);
                      return (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="py-2 px-3">
                            {urlName ? (
                              <Link
                                href={`${Routes.Products}${urlName}-offers`}
                                className="text-blue-600 underline hover:text-blue-800"
                                onMouseEnter={() => setHoveredImage(imagePath)}
                                onMouseMove={(e) =>
                                  setCursorPos({
                                    x: e.clientX,
                                    y: e.clientY,
                                  })
                                }
                                onMouseLeave={() => setHoveredImage(null)}
                              >
                                {item.name}
                              </Link>
                            ) : (
                              item.name
                            )}
                          </td>
                          <td className="py-2 px-3">{item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}

                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsAppPhoneNumber}&text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center text-sm inline-flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* {hoveredImage && (
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
      )} */}
    </>
  );
}
