"use client";

import { whatsAppPhoneNumber } from "@/helpers/helpers";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductUrl({
  url,
  className,
}: {
  url: string;
  className: string;
}) {
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  useEffect(() => {
    const productUrl = `${window.location.origin}/${url}`;
    const message = `Hello, I am interested in buying. \n\n ${productUrl}`;
    const encodedUrl = `https://api.whatsapp.com/send?phone=${whatsAppPhoneNumber}&text=${encodeURIComponent(
      message
    )}&type=phone_number`;

    setWhatsappUrl(encodedUrl);
  }, [url]);

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
