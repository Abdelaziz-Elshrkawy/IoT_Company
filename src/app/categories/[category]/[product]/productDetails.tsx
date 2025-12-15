"use client";
import { constructProductImagePath, getProduct } from "@/helpers/helpers";
import ProductUrl from "../../../../components/general/productUrl";
import Image from "next/image";
import Back from "@/components/general/Back";
import { useLanguage } from "@/contexts/language";

export default function ProductDetails({ product }: { product: string }) {
  const { lang } = useLanguage();
  const decodedProductName = decodeURIComponent(product).split("-");
  const productName = decodedProductName[1]?.trim();
  const categoryName = decodedProductName[0]?.trim().split("_").join(" ");
  const isOffer = decodedProductName[2] === "offers";
  const { product: currentProduct, categoryName: catNameLocalized } =
    getProduct(productName, categoryName);

  return (
    <div className="relative min-h-screen bg-white px-6 py-12 text-black dark:bg-black dark:text-white">
      {/* Back Button */}
      <Back
        route={isOffer ? "/offers" : `/categories/${categoryName}`}
        text={isOffer ? "Offers" : catNameLocalized[lang]}
      />

      {/* Main Content */}
      <div className="mx-auto mt-16 flex max-w-5xl flex-col-reverse items-center gap-10 lg:flex-row lg:items-start">
        {/* Product Info */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-4 text-3xl font-bold">
            {currentProduct.name[lang]}
          </h1>
          <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {currentProduct.description[lang]}
          </p>
          <ProductUrl
            className="inline-flex items-center rounded bg-green-500 px-6 py-3 text-sm text-white transition hover:bg-green-600"
            url={`/products/${categoryName}-${currentProduct.urlName}`}
          />
        </div>

        {/* Product Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <Image
            width={400}
            height={400}
            draggable={false}
            src={constructProductImagePath(currentProduct.name["en"])}
            alt={currentProduct.name[lang]}
            className="max-h-[400px] rounded border border-gray-200 object-contain dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
