import { useMemo } from "react";
import { CategoriesT, CategoryT, ProductI } from "@/types/types";

export const Products: CategoriesT = {
  "IR DEVICES CONTROL": [
    {
      name: "Smart WiFi IR Universal Controller",
      description: "for all IR devices",
      price_LE: 1500,
      image: "image_2e1962.png",
      whatsappMessage:
        "I'm interested in the Smart WiFi IR Universal Controller! Price: 1500 L.E",
    },
    {
      name: "Smart WiFi IR + RF Universal Controller",
      description: "for all IR devices",
      price_LE: 2000,
      image: "image_2e1962.png",
      whatsappMessage:
        "I'm interested in the Smart WiFi IR + RF Universal Controller! Price: 2000 L.E",
    },
  ],
  "SMART WIFI LIGHTING SWITCHES": [
    {
      name: "1 gang Black or white with frame",
      description:
        "Lighting touch switch with frame, 1CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1850,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 1 gang Black or white with frame Smart WiFi Lighting Switch! Price: 1850 L.E",
    },
    {
      name: "1 gang Black or white without frame",
      description:
        "Lighting touch switch, 1CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1750,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 1 gang Black or white without frame Smart WiFi Lighting Switch! Price: 1750 L.E",
    },
    {
      name: "2 gang Black or white with frame",
      description:
        "Lighting touch switch with frame, 2CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1900,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 2 gang Black or white with frame Smart WiFi Lighting Switch! Price: 1900 L.E",
    },
    {
      name: "2 gang Black or white without frame",
      description:
        "Lighting touch switch, 2CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1800,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 2 gang Black or white without frame Smart WiFi Lighting Switch! Price: 1800 L.E",
    },
    {
      name: "3 gang Black or white with frame",
      description:
        "Lighting touch switch with frame, 3CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1950,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 3 gang Black or white with frame Smart WiFi Lighting Switch! Price: 1950 L.E",
    },
    {
      name: "3 gang Black or white without frame",
      description:
        "Lighting touch switch, 3CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1850,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 3 gang Black or white without frame Smart WiFi Lighting Switch! Price: 1850 L.E",
    },
    {
      name: "4 gang Black or white with frame",
      description:
        "Lighting touch switch with frame, 4CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 2000,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 4 gang Black or white with frame Smart WiFi Lighting Switch! Price: 2000 L.E",
    },
    {
      name: "4 gang Black or white without frame",
      description:
        "Lighting touch switch, 4CH on-off 10 A per channel, support mobile app control & voice command",
      price_LE: 1900,
      image: "image_2e169f.png",
      whatsappMessage:
        "I'm interested in the 4 gang Black or white without frame Smart WiFi Lighting Switch! Price: 1900 L.E",
    },
  ],
  Sensors: [
    {
      name: "Motion sensor",
      description:
        "WIFI Smart Mini PIR motion Sensor for Smart Security and Home automation System",
      price_LE: 1250,
      image: "image_2e1989.png",
      whatsappMessage: "I'm interested in the Motion sensor! Price: 1250 L.E",
    },
    {
      name: "Door sensor",
      description: "WIFI Smart Magnetic Door Sensor",
      price_LE: 1250,
      image: "image_2e1989.png",
      whatsappMessage: "I'm interested in the Door sensor! Price: 1250 L.E",
    },
    {
      name: "Gas sensor",
      description:
        "WIFI Smart CO Gas Concretization Fire Leak Security Gas Detector Alarm Sensor For Smart Life Tuya App Home Protection System Control",
      price_LE: 2450,
      image: "image_2e1989.png",
      whatsappMessage: "I'm interested in the Gas sensor! Price: 2450 L.E",
    },
  ],
  "Safety Products": [
    {
      name: "Circuit breaker",
      description:
        "Wireless Smart WiFi CB (Miniature Circuit Breaker) Can remotely control opening and closing 1 phase, 125 A",
      price_LE: 5000,
      image: "image_2e19c4.png",
      whatsappMessage: "I'm interested in the Circuit breaker! Price: 5000 L.E",
    },
    {
      name: "Water sensor",
      description:
        '"Smart Life/Tuya" on iOS and Android to add the device to detect the water level overflow, no hub required. Home in your hand all the time.',
      price_LE: 1450,
      image: "image_2e19c4.png",
      whatsappMessage: "I'm interested in the Water sensor! Price: 1450 L.E",
    },
    {
      name: "Gas & Heat Detector",
      description:
        "Wi-Fi Smart Gas Alarm Detector. Alarm and APP notification push and close the gas valve",
      price_LE: 2450,
      image: "image_2e19c4.png",
      whatsappMessage:
        "I'm interested in the Gas & Heat Detector! Price: 2450 L.E",
    },
    {
      name: "(Gas & water) valve",
      description:
        "Smart Valve to control Water & gas leak Remotely open and close pipe",
      price_LE: 2900,
      image: "image_2e19c4.png",
      whatsappMessage:
        "I'm interested in the (Gas & water) valve! Price: 2900 L.E",
    },
    {
      name: "Temperature sensor",
      description:
        "Wi-Fi Smart humidity and temperature Alarm Detector. Alarm and APP notification push and close the gas valve",
      price_LE: 2100,
      image: "image_2e19c4.png",
      whatsappMessage:
        "I'm interested in the Temperature sensor! Price: 2100 L.E",
    },
    {
      name: "Tuya camera",
      description:
        "Tuya Smart Camera HD 1080P Outdoor/Indoor Wireless WIFI IP Camera Compatible with Alexa & The Google Assistant / Smart Life APP for 2-Way Audio Auto Tracking Night Vision IP66 Waterproof UK Plug",
      price_LE: 3100,
      image: "image_2e19c4.png",
      whatsappMessage: "I'm interested in the Tuya camera! Price: 3100 L.E",
    },
  ],
  "VOICE CONTROL": [
    {
      name: "Alexa Echo dot 3",
      description: "Smart speaker with Alexa",
      price_LE: 3600,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Alexa Echo dot 3! Price: 3600 L.E",
    },
    {
      name: "Alexa 4th generation",
      description: "Smart speaker with Alexa",
      price_LE: 4750,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Alexa 4th generation! Price: 4750 L.E",
    },
    {
      name: "Alexa 5th generation",
      description: "Smart speaker with Alexa",
      price_LE: 5500,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Alexa 5th generation! Price: 5500 L.E",
    },
    {
      name: "Alexa Echo show 5",
      description: "5.5 inch HD Smart touchscreen, Camera: 2MP",
      price_LE: 8000,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Alexa Echo show 5! Price: 8000 L.E",
    },
  ],
  "Smart door lock": [
    {
      name: "Smart door lock for Iron doors",
      description:
        "[ fingerprint, password and card ] 200 user Application remote control",
      price_LE: 6650,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Smart door lock for Iron doors! Price: 6650 L.E",
    },
    {
      name: "Smart door lock for Alum. doors",
      description:
        "[ fingerprint, password and card ] 200 user Application remote control",
      price_LE: 9100,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Smart door lock for Alum. doors! Price: 9100 L.E",
    },
    {
      name: "Smart door lock for wooden or Armored doors",
      description:
        "[ fingerprint, password and card ] 200 user Application remote control",
      price_LE: 7500,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Smart door lock for wooden or Armored doors! Price: 7500 L.E",
    },
    {
      name: "Magic Smart door lock",
      description:
        "Face detection, fingerprint, password and card 200 user Application remote control intercom HD Camera",
      price_LE: 13500,
      image: "image_2e1a01.png",
      whatsappMessage:
        "I'm interested in the Magic Smart door lock! Price: 13500 L.E",
    },
  ],
};

export const useGetCategory = (categoryName: string) => {
  return Products[categoryName];
};
export const useGetProduct = (productName: string, categoryName: string) => {
  return useGetCategory(categoryName)?.find(
    (e: ProductI) => e.name === productName
  );
};
