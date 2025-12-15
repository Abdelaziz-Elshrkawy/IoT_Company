import ProductUrl from "@/components/general/productUrl";
import { useLanguage } from "@/contexts/language";
import { constructProductImagePath } from "@/helpers/helpers";
import { ProductI } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
  category,
  index,
}: {
  product: ProductI;
  category: string;
  index?: number;
}) {
  const { lang } = useLanguage();

  return (
    <motion.div
      className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index ?? 0) * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/categories/${category}/${category}-${product.urlName}`}>
        <Image
          width={250}
          height={250}
          src={constructProductImagePath(product.name.en)}
          alt={product.name[lang]}
          className="mb-4 rounded-lg object-contain transition hover:scale-105"
        />
      </Link>

      <h3 className="mb-2 text-lg font-semibold">{product.name[lang]}</h3>

      <ProductUrl
        className="mt-auto flex items-center rounded bg-green-500 px-4 py-2 text-white"
        url={`/products/${category}-${product.urlName}`}
      />
    </motion.div>
  );
}
