"use client";

import { productWhatsAppMessageConstructor } from "@/helpers/products";
import { ProductI } from "@/types/types";
import { MessageCircle } from "lucide-react";

export default function ProductUrl({
  categoryName,
  urlName,
  productName,
  className,
}: {
  categoryName: string;
  urlName: string;
  productName: string;
  className: string;
}) {
  return (
    <a
      href={productWhatsAppMessageConstructor(
        categoryName,
        urlName,
        productName
      )}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Buy on WhatsApp
    </a>
  );
}
