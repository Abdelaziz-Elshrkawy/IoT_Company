"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Clock, DollarSign, BookOpen, Target } from "lucide-react";
import { courseWhatsAppMessageConstructor } from "@/helpers/helpers";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const courses = [
  {
    title: "Embedded Systems AVR + C programming",
    hours: "80 ساعة",
    price: "5000 جنيه",
    level: "من المبتدئ حتى مستوى المشاريع",
    images: [
      "/courses/Embedded_Systems_AVR_+_C programming/Embedded_Systems_AVR_+_C programming.png",
      "/courses/Embedded_Systems_AVR_+_C programming/Embedded_Systems_AVR_+_C programming_1.png",
      "/courses/Embedded_Systems_AVR_+_C programming/Embedded_Systems_AVR_+_C programming_2.png",
      "/courses/Embedded_Systems_AVR_+_C programming/Embedded_Systems_AVR_+_C programming_3.png",
    ],
    content: [
      "مقدمة في المتحكمات الدقيقة (Microcontrollers)",
      "العمل على متحكم ATmega32",
      "التعامل مع GPIO – ADC – Timers – UART – SPI – I2C",
      "تنفيذ مشاريع مثل: قراءة مستشعرات – عرض على LCD – تحكم في مداخل ومخارج",
    ],
    outcomes: [
      "بناء مشاريع إلكترونية عملية باستخدام لغة C",
      "فهم شامل لأساسيات الأنظمة المدمجة",
      "جاهز تبدأ في مجال البرمجة المضمنة Embedded",
    ],
  },
  {
    title: "ARM Cortex-M (STM32)",
    hours: "60 ساعة",
    price: "5000 جنيه",
    level: "متوسط إلى متقدم",
    images: [
      "/courses/ARM_Cortex-M_(STM32)/ARM_Cortex-M_(STM32).png",
      "/courses/ARM_Cortex-M_(STM32)/ARM_Cortex-M_(STM32)_1.png",
    ],
    content: [
      "أساسيات ARM Architecture",
      "العمل العملي على STM32F103 و STM32CubeIDE",
      "التعامل مع NVIC ، RCC ، GPIO ، Timers ، ADC ، UART",
      "بناء مشاريع متقدمة تشمل التعامل مع شاشات – حساسات – بروتوكولات اتصال",
    ],
    outcomes: [
      "احتراف البرمجة منخفضة المستوى لل ARM",
      "إعداد مشاريع حقيقية على بوردات ST",
      "دخول مجال شركات السيارات أو الأنظمة الصناعية",
    ],
  },
  {
    title: "AI",
    hours: "100 ساعة",
    price: "5000 جنيه",
    level: "من المبتدئ حتى التطبيقي",
    images: ["/courses/Ai/Ai.jpg"],
    content: [
      "مقدمة شاملة في الذكاء الاصطناعي وتطبيقاته",
      "أساسيات تعلم الآلة (Machine Learning)",
      "خوارزميات التصنيف والتجميع",
      "التعلم العميق (Neural Networks)",
      "مشاريع حقيقية باستخدام Python و مكتبات مثل TensorFlow, Keras, Scikit-learn",
      "بناء نموذج ذكي وتحليله خطوة بخطوة",
    ],
    outcomes: [
      "تبني مشاريع AI عملية بنفسك",
      "تفهم الفرق بين الخوارزميات، وتعرف تختار الأنسب",
      "تبدأ طريقك ك Junior AI Engineer",
    ],
  },
  {
    title: "Embedded Linux",
    hours: "100 ساعة",
    price: "7000 جنيه",
    level: "متقدم (لمن لديه خلفية عن Embedded أو C)",
    images: [
      "/courses/Embedded_Linux/Embedded_Linux.png",
      "/courses/Embedded_Linux/Embedded_Linux_1.png",
    ],
    content: [
      "مقدمة في Linux Kernel & Architecture",
      "Cross Compilation – Bootloader – File Systems",
      "التعامل مع Raspberry Pi / BeagleBone / Virtual Boards",
      "بناء Drivers – التحكم في الهاردوير – استخدام ال Shell و Scripting",
    ],
    outcomes: [
      "العمل على مشاريع Embedded Linux حقيقية",
      "جاهز لسوق العمل في شركات السيارات والصناعات الذكية",
      "بناء نظام تشغيل خاص بجهازك",
    ],
  },
  {
    title: "Smart Home Systems",
    hours: "40 ساعة",
    price: "4000 جنيه",
    level: "مناسب للمبتدئين والمهندسين",
    images: ["/courses/Smart_Home_System/Smart_Home_System.png"],
    content: [
      "مقدمة لأنظمة المنزل الذكي (Smart Home Overview)",
      "التعامل مع مستشعرات الحركة، الحرارة، الدخان، الإضاءة",
      "التحكم عن بُعد باستخدام Bluetooth – WiFi – RF",
      "مشاريع عملية: فتح باب ذكي – إضاءة تلقائية – نظام إنذار – تحكم من الموبايل",
    ],
    outcomes: [
      "بناء نظام Smart Home كامل خاص بيك",
      "ربط الأجهزة والتحكم فيها لا سلكيًا",
      "معرفة اختيار الموديولات المناسبة",
    ],
  },
  {
    title: "Python Programming",
    hours: "30 ساعة",
    price: "2000 جنيه",
    level: "مبتدئ إلى متوسط",
    images: [
      "/courses/Python_Programming/Python_Programming.png",
      "/courses/Python_Programming/Python_Programming_1.png",
      "/courses/Python_Programming/Python_Programming_2.png",
    ],
    content: [
      "أساسيات البرمجة بلغة بايثون",
      "التعامل مع المتغيرات، الحلقات، الدوال، التعامل مع الملفات",
      "مشاريع تطبيقية في Automation – Data Handling – Simple GUIs",
      "مقدمة في التعامل مع مكتبات مثل NumPy و Matplotlib",
    ],
    outcomes: [
      "كتابة سكريبتات احترافية لحل مشاكل حقيقية",
      "الاستعداد لتعلم Data Science / AI / Automation بعد الكورس",
    ],
  },
  {
    title: "C Programming",
    hours: "30 ساعة",
    price: "2000 جنيه",
    level: "أساسي وهام لمجال الأنظمة المضمنة",
    images: [
      "/courses/c_Programming/c_Programming.png",
      "/courses/c_Programming/c_Programming_1.png",
    ],
    content: [
      "أساسيات لغة C",
      "التحكم في تدفق البرنامج (if – for – while)",
      "التعامل مع ال Arrays – Pointers – Functions – Structures",
      "تدريب عملي على كتابة درايفرات بسيطة",
    ],
    outcomes: [
      "بناء أساس قوي في C",
      "القدرة على برمجة المتحكمات لاحقًا",
      "جاهز تبدأ في أي كورس Embedded أو Systems",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="mt-8 min-h-screen px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center text-3xl font-bold text-white"
      >
        Ready to Level Up to Next Step !
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col gap-6"
      >
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="h-full"
          >
            <Card className="h-full rounded-2xl border p-4 shadow-lg transition hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{course.level}</p>
              </CardHeader>
              <CardContent className="flex h-full items-start gap-10">
                {/* Carousel for images */}
                {course.images && course.images.length > 0 && (
                  <Carousel
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="w-[50%] rounded-md shadow-sm"
                  >
                    <CarouselContent>
                      {course.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                            <Image
                              src={img}
                              alt={`${course.title} preview ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                )}
                <div className="flex h-full w-[50%] flex-col items-start justify-between">
                  <div className="h-[90%] w-full">
                    <div className="mb-2 rounded-lg border bg-white p-4 shadow-sm">
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> {course.hours}
                      </p>
                      <p className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" /> {course.price}
                      </p>
                    </div>

                    <div className="w-full space-y-4">
                      {/* Content Section */}
                      <div className="rounded-lg border bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-medium">
                          <BookOpen className="h-4 w-4" /> محتوى التدريب
                        </div>
                        <ul className="mt-2 list-disc space-y-1 ps-6 text-sm">
                          {course.content.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes Section */}
                      <div className="rounded-lg border bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-2 font-medium">
                          <Target className="h-4 w-4" /> المخرجات
                        </div>
                        <ul className="mt-2 list-disc space-y-1 ps-6 text-sm">
                          {course.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex h-[20%] w-full justify-center">
                    <Button
                      asChild
                      className="rounded-full bg-green-600 text-white hover:bg-green-700"
                    >
                      <Link
                        href={courseWhatsAppMessageConstructor(course.title)}
                        target="_blank"
                      >
                        تواصل عبر WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* <div className="mt-12 text-center">
        <p className="text-lg font-medium">
          جميع الكورسات مدعومة ومعتمدة من شركة KPEK ✅
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          تواصل عبر الواتساب للحجز: <strong>+20 120 408 9577</strong>
        </p>
        <Link
          href="https://www.linkedin.com/in/carl-khalil-544755134"
          target="_blank"
          className="mt-2 inline-block text-blue-600 underline"
        >
          LinkedIn Profile
        </Link>
      </div> */}
    </div>
  );
}
