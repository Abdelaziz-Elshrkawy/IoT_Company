"use client";

import Lottie from "react-lottie";
import comingSoonAnimation from "../../../public/lottie/coming_soon.json";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-6 bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-md">
      <div className="flex items-center space-x-4 mb-6 text-indigo-600">
        <Lottie
          options={{
            animationData: comingSoonAnimation,
            autoplay: true,
            loop: false,
          }}
        />
      </div>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        We are working hard on this section. Stay tuned — something awesome is
        on the way!
      </p>
    </div>
  );
}
