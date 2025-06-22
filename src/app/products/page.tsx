"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { constructProductImagePath, Products } from "@/helpers/products";
import Link from "next/link";
import { ProductI } from "@/types/types";
import ProductUrl from "@/components/general/productUrl";
import LoadingImage from "@/components/general/LoadingImage";
import Image from "next/image";

export default function ProductPage() {
  const [animationKey, setAnimationKey] = useState<string>();
  useEffect(() => {
    setAnimationKey(new Date().toString());
  }, []);
  return (
    <main
      key={animationKey}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product: ProductI, index: number) => (
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-evenly items-center text-center"
                key={`${category.split(" ").join("_")}-${
                  product.name
                }-${index}`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Suspense fallback={<LoadingImage />}>
                  <Link
                    className="h-full flex justify-center"
                    href={`/products/${category}-${product.urlName}`}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={constructProductImagePath(product.name)}
                      alt={product.name}
                      className=" object-contain rounded-lg mb-4 hover:scale-105 transition-all duration-200"
                    />
                  </Link>
                </Suspense>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                {/* <p className="text-gray-800 mb-4 flex-grow">
                  {product.description}
                </p> */}
                {/*<p className="text-lg font-bold text-gray-900 mb-4">*/}
                {/*    Price: {product.price_LE} L.E*/}
                {/*</p>*/}
                <ProductUrl
                  className="mt-auto inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                  categoryName={category}
                  urlName={product.urlName}
                  productName={product.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
