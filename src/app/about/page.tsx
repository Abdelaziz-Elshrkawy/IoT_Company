"use client";

import { useLanguage } from "@/contexts/language";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const { lang, dir } = useLanguage();
  const aboutText = {
    title: { en: "About Us", ar: "من نحن" },
    description: {
      en: `For Smart Home Solutions is your trusted partner in transforming traditional houses into intelligent, secure, and energy-efficient homes. We specialize in cutting-edge smart home systems that provide full control, convenience, and peace of mind — anytime, anywhere. From smart lighting, automated curtains, and voice-controlled appliances, to advanced security features like gas/water leak detection, surveillance systems, and smart door locks — we bring future-ready technology to your doorstep. Whether through voice, mobile apps, or touchless gestures, you’re always in command. We also offer customized smart solutions for businesses, helping improve efficiency, safety, and energy management.`,
      ar: `لحلول المنازل الذكية هي شريكك الموثوق في تحويل المنازل التقليدية إلى منازل ذكية وآمنة وموفرة للطاقة. نحن متخصصون في أنظمة المنزل الذكي المتطورة التي توفر السيطرة الكاملة والراحة وراحة البال — في أي وقت ومن أي مكان. من الإضاءة الذكية، الستائر الآلية، والأجهزة التي يتم التحكم فيها صوتيًا، إلى ميزات الأمان المتقدمة مثل كشف تسرب الغاز/المياه، أنظمة المراقبة، وأقفال الأبواب الذكية — نحن نجلب التكنولوجيا المستقبلية إلى منزلك. سواء عبر الصوت، تطبيقات الهاتف، أو الإيماءات دون لمس، ستكون دائمًا في السيطرة. نحن نقدم أيضًا حلولًا ذكية مخصصة للأعمال، مما يساعد على تحسين الكفاءة والسلامة وإدارة الطاقة.`,
    },
    whyChooseUsTitle: { en: "Why choose us?", ar: "لماذا تختارنا؟" },
    whyChooseUsPoints: {
      en: [
        "✔ Proven expertise with global smart home brands",
        "✔ 100% customer satisfaction and ongoing support",
      ],
      ar: [
        "✔ خبرة مثبتة مع علامات تجارية عالمية في المنازل الذكية",
        "✔ رضا العملاء 100٪ ودعم مستمر",
      ],
    },
  };

  return (
    <main className="flex h-[100%] items-center justify-center bg-[#0a1526] px-6 pt-20 pb-20 text-white lg:min-h-screen lg:pb-1">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-4xl font-bold"
        >
          {aboutText.title[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="my-6 text-lg leading-relaxed text-gray-300"
        >
          <p className="mb-2 text-4xl font-semibold text-white">KPEK</p>
          {aboutText.description[lang]}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="m-2 text-3xl font-bold">
            {aboutText.whyChooseUsTitle[lang]}
          </p>
          {aboutText.whyChooseUsPoints[lang].map((e) => (
            <p dir={dir}>{e}</p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-5 flex justify-center"
        >
          <Image
            src="/about_illustration.jpg"
            alt="IoT Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-[#0a1526]"
          >
            Learn More
          </Button>
        </motion.div> */}
      </div>
    </main>
  );
}
