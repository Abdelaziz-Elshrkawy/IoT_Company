import { useLanguage } from "@/contexts/language";
import React from "react";

declare module "@/components/ui/sidebar" {
  interface SidebarProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
}

export enum ProductCategory {
  IR_DEVICES_CONTROL = "IR DEVICES CONTROL",
  SMART_WIFI_LIGHTING_SWITCHES = "SMART WIFI LIGHTING SWITCHES",
  SENSORS = "Sensors",
  SAFETY_PRODUCTS = "Safety Products",
  VOICE_CONTROL = "VOICE CONTROL",
  SMART_DOOR_LOCK = "Smart door lock",
}

export interface ProductI {
  name: LocalizationI;
  urlName: string;
  category?: ProductCategory;
  description: LocalizationI;
  image?: string;
  whatsappMessage: LocalizationI;
  price_LE: number;
}

export type CategoryT = { catName: LocalizationI; products: ProductI[] };

export type CategoriesT = { [key: string]: CategoryT };

export interface FeatureI {
  id: number;
  title: LocalizationI;
  description: LocalizationI;
  icon: React.JSX.Element;
  image: string;
  bg: string;
  reverse: boolean;
}

export interface PositionI {
  name: string;
  description: PositionDescriptionI;
}

export interface PositionDescriptionI {
  jobDescription: string;
  requirements: string;
  keyResponsibilities: string;
  preferred: string;
}

export interface LocalizationI {
  ar: string;
  en: string;
}

export type LocalLanguages = "ar" | "en";

export interface LanguageProviderI {
  lang: LocalLanguages;
  dir: "ltr" | "rtl";
  toggleLang: (lang: LocalLanguages) => void;
}
