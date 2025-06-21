"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  useEffect(() => {
    const categorySlug = categoryName.split(" ").join("_");
    const productUrl = `${window.location.origin}/products/${categorySlug}-${urlName}`;
    const message = `Hello, I am interested in buying ${productName}.\n\nProduct link: ${productUrl}`;
    const encodedUrl = `https://api.whatsapp.com/send/?phone=201121418155&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=1`;

    setWhatsappUrl(encodedUrl);
  }, [categoryName, urlName, productName]);

  return (
    <a
      href={whatsappUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Buy on WhatsApp
    </a>
  );
}
