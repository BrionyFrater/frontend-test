"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => router.push("/translate")}>
      {show && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          {/* Background dots */}
          <div className="absolute inset-0 dot-bg" />
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-b-[6.125rem] min-[495px]:rounded-b-[7.125rem] w-full px-12 py-24 flex flex-col items-center justify-center relative z-10"
          >
            <motion.img
              src="/logo.png"
              alt=""
              initial={{ y: -20, scale: 0, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[15%] min-w-24 h-[15%] min-h-24 mb-2"
            />
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-3xl font-bold"
            >
              Hear Me
            </motion.h1>


            <motion.img
              src="/hand_i_love_you.webp"
              alt=""
              initial={{ right: -3000 }}
              animate={{ right: 0 }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
              className="will-change-transform absolute top-[70%] right-0 w-[90%] origin-right z-20 max-w-[396px]"
            />

            <motion.img
              src="/hand_ok.webp"
              alt=""
              initial={{ left: -2000 }}
              animate={{ left: "-20%" }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.4 }}
              className="will-change-transform absolute top-[120%] left-[-20%] origin-left w-[80%] z-20 max-w-[358px] min-[495px]:left-[0%]"
            />

            <motion.img
              src="/hand_thumbs_up.webp"
              alt=""
              initial={{ y: 3000 }}
              animate={{ y: "-20%" }}
              transition={{ duration: 0.8, ease: "circInOut" }}
              className="will-change-transform fixed bottom-[-20%] right-[10%] w-[50%] origin-bottom z-20 max-w-[220px] min-[500px]:right-[30%]"
            />
          </motion.div>
        </div>

      )}
    </AnimatePresence>
  );
}
