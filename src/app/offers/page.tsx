"use client";

import { useLanguage } from "@/contexts/language";
import {
  constructOffersImagePath,
  whatsAppPhoneNumber,
  offers,
  // Products,
} from "@/helpers/helpers";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Bed, Home, ShieldCheck } from "lucide-react";
import Image from "next/image";
// import { ProductI } from "@/types/types";

// const getProductRouteInfo = (name: string): string | undefined => {
//   for (const [categoryName, products] of Object.entries(Products)) {
//     const match = products.find((p: ProductI) => p.name === name);
//     if (match) {
//       return `/${categoryName}/${categoryName}-${match.urlName}`;
//     }
//   }
//   return undefined;
// };

export const offersSectionText = {
  title: {
    en: "Limited Time Offers",
    ar: "عروض محدودة الوقت",
  },
  description: {
    en: "Explore our exclusive smart home packages — premium features, unbeatable prices.",
    ar: "اكتشف باقات المنزل الذكي الحصرية لدينا — ميزات مميزة وأسعار لا تقارن.",
  },
};

export default function OffersPage() {
  // const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  // const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
  //   x: 0,
  //   y: 0,
  // });
  const { lang, dir } = useLanguage();
  return (
    <>
      <main className="min-h-screen to-gray-900 px-6 py-16 text-white md:px-12">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-extrabold">
            {offersSectionText.title[lang]}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            {offersSectionText.description[lang]}
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const whatsappMessage = `Hello, I’m interested in the "${
              offer.name
            }" package which includes:\n${offer.items
              .map((item) => `- ${item.quantity}x ${item.name}`)
              .join("\n")}`;

            const renderIcon = () => {
              if (offer.name["en"] === "Show")
                return <Lightbulb className="h-6 w-6 text-yellow-500" />;
              if (["Room 1", "Room 2"].includes(offer.name["en"]))
                return <Bed className="h-6 w-6 text-blue-500" />;
              if (["Home 1", "Home 2"].includes(offer.name["en"]))
                return <Home className="h-6 w-6 text-green-600" />;
              if (offer.name["en"] === "Safety")
                return <ShieldCheck className="h-6 w-6 text-red-500" />;
              return null;
            };

            return (
              <motion.div
                dir={dir}
                key={offer.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="hover:shadow-3xl group relative flex flex-col justify-between rounded-2xl bg-white p-6 text-gray-800 shadow-2xl transition-transform hover:-translate-y-1"
              >
                <div className="absolute -top-4 -right-4 rounded-full bg-gradient-to-br from-red-600 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                  10% OFF
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {renderIcon()}
                  <h2 className="text-2xl font-bold">{offer.name[lang]}</h2>
                </div>

                <div className="relative mb-6 flex justify-center">
                  <Image
                    src={constructOffersImagePath(offer.name["en"])}
                    alt={offer.name[lang]}
                    width={400}
                    height={400}
                    className="rounded-lg border border-gray-200 object-contain"
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
                      // const imagePath = constructProductImagePath(item.name);
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
                                // onMouseEnter={() => setHoveredImage(imagePath)}
                                // onMouseMove={(e) =>
                                //   setCursorPos({
                                //     x: e.clientX,
                                //     y: e.clientY,
                                //   })
                                // }
                                // onMouseLeave={() => setHoveredImage(null)}
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
                    whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-center text-sm text-white transition-all hover:bg-green-700"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
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
