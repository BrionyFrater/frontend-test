"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => setShow(false), 300000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
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
      src="/hand_i_love_you.png"
      alt=""
      initial={{ scale: 0}}
      animate={{ scale: 1}}
      transition={{ duration: 0.5, ease: "circInOut" }}
      className="absolute top-[70%] right-0 w-[90%] origin-right z-20 max-w-[396px]"
    />

    <motion.img
      src="/hand_ok.png"
      alt=""
      initial={{ scale: 0}}
      animate={{ scale: 1}}
      transition={{ duration: 0.5, ease: "circInOut" }}
      className="absolute top-[120%] left-[-20%] origin-left w-[80%] z-20 max-w-[358px] min-[495px]:left-[0%]"
    />

    <motion.img
      src="/hand_thumbs_up.png"
      alt=""
      initial={{ scale: 0, y: -100}}
      animate={{ scale: 1, y: 0}}
      transition={{ duration: 0.5, ease: "circInOut" }}
      className="fixed bottom-[-20%] right-[10%] w-[50%] origin-bottom z-20 max-w-[220px]"
    />
  </motion.div>
</div>

      )}
    </AnimatePresence>
  );
}
