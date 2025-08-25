"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Clock, DollarSign, BookOpen, Target } from "lucide-react";
import { courses, courseWhatsAppMessageConstructor } from "@/helpers/helpers";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Courses() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
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
                        href={courseWhatsAppMessageConstructor(
                          course.title,
                          origin,
                        )}
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
