"use client";
import Back from "@/components/general/Back";
import LoadingImage from "@/components/general/LoadingImage";
import ProductUrl from "@/components/general/productUrl";
import { constructProductImagePath, Products } from "@/helpers/products";
import { ProductI } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function ProductsPage({ category }: { category: string }) {
  const currentCategory = decodeURIComponent(category);
  const products = Products[currentCategory];
  return (
    <main
      key={new Date().toString()}
      className="min-h-screen bg-[#0f1e38] text-black py-16 px-6 md:px-12 relative"
    >
      <Back color="white" route="/categories" text="Categories" />
      <div key={currentCategory} className="mb-16 mt-10">
        <h2 className="text-3xl font-semibold mb-8 text-white border-b-2 border-gray-600 pb-2">
          {currentCategory} PRODUCTS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products &&
            (products as ProductI[]).map((product: ProductI, index: number) => (
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-evenly items-center text-center"
                key={`${currentCategory.split(" ").join("_")}-${
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
                    href={`/categories/${currentCategory}/${currentCategory}-${product.urlName}`}
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
                  url={`/products/${currentCategory}-${product.urlName}`}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
