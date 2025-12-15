"use client";
import { LanguageProviderI, LocalLanguages } from "@/types/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext<LanguageProviderI | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LocalLanguages>("en");
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");

  const toggleLang = (newLang: "en" | "ar") => {
    setLang(newLang);
    setDir(newLang === "ar" ? "rtl" : "ltr");
    cookieStore.set("lang", newLang);
  };

  useEffect(() => {
    void (async () => {
      const currentLang = (await cookieStore.get("lang"))
        ?.value as LocalLanguages | null;
      if (currentLang) {
        toggleLang(currentLang);
      }
      console.log(currentLang);
    })();
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext) as LanguageProviderI;
}
