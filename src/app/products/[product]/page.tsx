import { constructProductImagePath, getProduct } from "@/helpers/products";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import ProductUrl from "../../../components/general/productUrl";
import Image from "next/image";

export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const decodedProductName = decodeURIComponent(product).split("-");
  const productName = decodedProductName[1]?.trim();
  const categoryName = decodedProductName[0]?.trim().split("_").join(" ");
  const currentProduct = getProduct(productName, categoryName);

  return (
    <div className="h-ful  bg-white dark:bg-black text-black dark:text-white px-6 py-12">
      <Link href="/products" className="absolute left-0 top-20">
        <ArrowLeftCircleIcon
          size={40}
          className="hover:translate-x-[-2px] left-4 transition-all duration-200 cursor-pointer text-gray-900"
        />
      </Link>
      <div className="max-w-4xl mx-auto flex flex-col justify-center lg:justify-start lg:items-start items-center text-center lg:text-left lg:flex-row gap-6">
        <Image
          width={300}
          height={300}
          draggable={false}
          src={constructProductImagePath(currentProduct.name)}
          alt={currentProduct.name}
          className="w-[80%] lg:w-[50%] object-cover mb-8 border border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
            {currentProduct.description}
          </p>

          <ProductUrl
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-sm"
            categoryName={categoryName}
            urlName={currentProduct.urlName}
            productName={currentProduct.name}
          />
        </div>
      </div>
    </div>
  );
}
