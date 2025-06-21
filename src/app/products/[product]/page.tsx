import { useGetProduct } from "@/helpers/products";
import { MessageCircle } from "lucide-react";

export default async function product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const currentProduct = useGetProduct(
    decodeURI(product)?.split("-")[1].trim(),
    decodeURI(product)?.split("-")[0].trim()
  );
  console.log(decodeURI(product)?.split("-")[1]);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-64 object-cover mb-8 border border-gray-300"
        /> */}
        <h1 className="text-3xl font-bold mb-4">{currentProduct.name}</h1>
        <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
          {currentProduct.description}
        </p>

        <a
          href={`https://wa.me/201234567890?text=${encodeURIComponent(
            currentProduct.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Buy on WhatsApp
        </a>
      </div>
    </div>
  );
}
