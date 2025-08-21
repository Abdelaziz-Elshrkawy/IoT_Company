"use client";
import Back from "@/components/general/Back";
import LoadingImage from "@/components/general/LoadingImage";
import ProductUrl from "@/components/general/productUrl";
import { constructProductImagePath, Products } from "@/helpers/helpers";
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
      className="relative min-h-screen bg-gray-900 px-6 py-16 text-black md:px-12"
    >
      <Back color="white" route="/categories" text="Categories" />
      <div key={currentCategory} className="mt-10 mb-16">
        <h2 className="mb-8 border-b-2 border-gray-600 pb-2 text-3xl font-semibold text-white">
          {currentCategory} PRODUCTS
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products &&
            (products as ProductI[]).map((product: ProductI, index: number) => (
              <motion.div
                className="flex flex-col items-center justify-evenly rounded-xl bg-white p-6 text-center shadow-lg"
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
                    className="flex h-full justify-center"
                    href={`/categories/${currentCategory}/${currentCategory}-${product.urlName}`}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={constructProductImagePath(product.name)}
                      alt={product.name}
                      className="mb-4 rounded-lg object-contain transition-all duration-200 hover:scale-105"
                    />
                  </Link>
                </Suspense>
                <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                {/* <p className="text-gray-800 mb-4 flex-grow">
                  {product.description}
                </p> */}
                {/*<p className="text-lg font-bold text-gray-900 mb-4">*/}
                {/*    Price: {product.price_LE} L.E*/}
                {/*</p>*/}
                <ProductUrl
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
                  url={`/products/${currentCategory}-${product.urlName}`}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
