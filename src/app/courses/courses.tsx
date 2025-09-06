"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/helpers/helpers";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separators } from "@/types/enums";

export default function CoursesN() {
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
        className="mb-8 flex flex-wrap items-center justify-center gap-6"
      >
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[45%]"
          >
            <Card className="h-full rounded-2xl border border-gray-700 bg-white p-6 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="mb-2 text-2xl font-bold text-cyan-400">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-400">{course.level}</p>
              </CardHeader>
              <CardContent className="flex flex-col">
                {course.images && course.images.length > 0 && (
                  <Carousel
                    plugins={[Autoplay({ delay: 3000 })]}
                    className="mb-6 w-full rounded-xl shadow-lg"
                  >
                    <CarouselContent>
                      {course.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
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

                <div className="flex w-full flex-col items-start justify-between">
                  {/* <div className="w-full space-y-4">
              <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 font-medium text-gray-200">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm">Duration:</span>
                  <span className="font-semibold">{course.hours}</span>
                </div>
                <div className="flex items-center gap-2 font-medium text-gray-200">
                  <DollarSign className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm">Price:</span>
                  <span className="font-semibold">{course.price}</span>
                </div>
              </div>
            </div> */}

                  <div className="mt-6 flex w-full flex-col gap-4">
                    <Button
                      asChild
                      className="w-full rounded-full bg-cyan-600 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <Link
                        href={`/courses/${course.title.replace(/\s+/g, Separators.CourseNameParam)}`}
                      >
                        More Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full rounded-full bg-green-600 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50"
                    ></Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
