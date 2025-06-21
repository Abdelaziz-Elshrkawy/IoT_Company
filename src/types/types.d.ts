import React from "react";

export enum ProductCategory {
  IR_DEVICES_CONTROL = "IR DEVICES CONTROL",
  SMART_WIFI_LIGHTING_SWITCHES = "SMART WIFI LIGHTING SWITCHES",
  SENSORS = "Sensors",
  SAFETY_PRODUCTS = "Safety Products",
  VOICE_CONTROL = "VOICE CONTROL",
  SMART_DOOR_LOCK = "Smart door lock",
}

export interface ProductI {
  name: string;
  urlName: string;
  category: ProductCategory;
  description: string;
  image: string;
  whatsappMessage: string;
  price_LE: number;
}

export type CategoryT = ProductI[];

export type CategoriesT = { [key: string]: Category };

export interface FeatureI {
  id: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
  image: string;
  bg: string;
  reverse: boolean;
}
