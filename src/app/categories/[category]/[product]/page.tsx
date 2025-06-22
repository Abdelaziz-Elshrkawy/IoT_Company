import { constructProductImagePath, getProduct } from "@/helpers/products";
import ProductUrl from "../../../../components/general/productUrl";
import Image from "next/image";
import Back from "@/components/general/Back";

export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const decodedProductName = decodeURIComponent(product).split("-");
  const productName = decodedProductName[1]?.trim();
  const categoryName = decodedProductName[0]?.trim().split("_").join(" ");
  const isOffer = decodedProductName[2] === "offers";
  const currentProduct = getProduct(productName, categoryName);

  return (
    <div className="min-h-[63vh] bg-white dark:bg-black text-black dark:text-white px-6 py-12 relative">
      {/* Back Button */}
      <Back
        route={isOffer ? "/offers" : `/categories/${categoryName}`}
        text={isOffer ? "Offers" : categoryName}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-16 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
        {/* Product Info */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {currentProduct.description}
          </p>
          <ProductUrl
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-sm rounded transition"
            url={`/products/${categoryName}-${currentProduct.urlName}`}
          />
        </div>

        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            width={400}
            height={400}
            draggable={false}
            src={constructProductImagePath(currentProduct.name)}
            alt={currentProduct.name}
            className="rounded border border-gray-200 dark:border-gray-700 object-contain max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
