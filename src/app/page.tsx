"use client";

import { motion } from "framer-motion";
import { HomeIcon, ShieldCheck } from "lucide-react";
import { FeatureI } from "@/types/types";
import { useLanguage } from "@/contexts/language";

export default function Home() {
  const { lang, dir } = useLanguage();

  const homeIntro = {
    description: {
      en: "Experience the future of intelligent living with advanced home automation solutions designed for comfort, efficiency, and control. Seamlessly integrate lighting, climate, security, and entertainment systems — all managed effortlessly from your smartphone or smart device, anytime and anywhere.",
      ar: "اختبر مستقبل الحياة الذكية مع حلول الأتمتة المنزلية المتقدمة المصممة للراحة والكفاءة والتحكم. قم بدمج أنظمة الإضاءة والمناخ والأمان والترفيه بسلاسة — جميعها يمكن التحكم بها بسهولة من هاتفك الذكي أو جهازك الذكي، في أي وقت ومن أي مكان.",
    },
    title: {
      en: "Transform Your Home into a Smart Living Experience",
      ar: "حوّل منزلك إلى تجربة معيشة ذكية",
    },
  };

  const features: FeatureI[] = [
    {
      id: 1,
      title: {
        en: "Live Effortlessly",
        ar: "عش براحة وبدون عناء",
      },
      description: {
        en: "Perfectly Tailored to You Simplify your daily routine with intelligent automation of lighting, climate control, and entertainment. Our smart home solutions are designed to seamlessly adapt to your habits and preferences—providing comfort, convenience, and efficiency without you having to lift a finger.",
        ar: "مصممة خصيصًا لك لتبسيط روتينك اليومي من خلال الأتمتة الذكية للإضاءة والتحكم في المناخ والترفيه. حلول المنزل الذكي لدينا مصممة لتتكيف بسلاسة مع عاداتك وتفضيلاتك، موفرة الراحة والسهولة والكفاءة دون أن تحتاج لرفع إصبعك.",
      },
      icon: <HomeIcon className="mb-4 h-16 w-16 text-teal-400" />,
      image: "/smart_life.jpg",
      bg: "bg-[#0f1e38]",
      reverse: false,
    },
    {
      id: 2,
      title: {
        en: "Always Secure. Always Connected.",
        ar: "آمن دائمًا، متصل دائمًا",
      },
      description: {
        en: "Anytime, Anywhere Enjoy complete peace of mind with advanced smart security solutions that keep you in control, no matter where you are. Remotely monitor cameras, receive real-time alerts, and manage locks, sensors, and alarms—all from your smartphone. Your home’s safety is always just a tap away.",
        ar: "في أي وقت وأي مكان، تمتع براحة البال الكاملة مع حلول الأمان الذكية المتقدمة التي تمنحك السيطرة مهما كنت. راقب الكاميرات عن بُعد، استقبل التنبيهات الفورية، وتحكم في الأقفال وأجهزة الاستشعار والإنذارات - كل ذلك من هاتفك الذكي. أمان منزلك دائمًا على بعد نقرة واحدة.",
      },
      icon: <ShieldCheck className="mb-4 h-16 w-16 text-green-400" />,
      image: "/home_security.jpg",
      bg: "bg-[#132033]",
      reverse: false,
    },
  ];

  return (
    <main className="overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <motion.section
        dir={dir}
        // ref={ref}
        viewport={{ amount: 0.8 }}
        className="flex h-screen flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-6 text-center"
        style={{ backgroundImage: "url('/home_image.jpg')" }}
      >
        <motion.h1
          className="text-4xl leading-tight font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {homeIntro.title[lang]}{" "}
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg font-bold text-gray-800 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {homeIntro.description[lang]}
        </motion.p>
      </motion.section>

      {/* Features Section */}
      {features.map((feature: FeatureI) => (
        <SnapSection key={feature.id} feature={feature} />
      ))}
    </main>
  );
}

function SnapSection({ feature }: { feature: FeatureI }) {
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref, {
  //   amount: 0.2,
  // });

  // useEffect(() => {
  //   if (isInView && ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, [isInView]);

  const { lang, dir } = useLanguage();
  return (
    <motion.section
      dir={dir}
      // ref={ref}
      viewport={{ amount: 0.8 }}
      className={`grid h-screen items-center gap-12 px-10 py-5 text-white md:grid-cols-2 ${feature.bg}`}
    >
      {!feature.reverse ? (
        <>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {feature.icon}
            <h2 className="mb-4 text-3xl font-bold">{feature.title[lang]}</h2>
            <p className="text-lg text-gray-300">{feature.description[lang]}</p>
          </motion.div>
          <motion.img
            src={feature.image}
            alt={feature.title[lang]}
            className="h-auto w-full rounded-xl shadow-xl"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </>
      ) : (
        <>
          <motion.img
            src={feature.image}
            alt={feature.title[lang]}
            className="h-auto w-full rounded-xl shadow-xl"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {feature.icon}
            <h2 className="mb-4 text-3xl font-bold">{feature.title[lang]}</h2>
            <p className="text-lg text-gray-300">{feature.description[lang]}</p>
          </motion.div>
        </>
      )}
    </motion.section>
  );
}
