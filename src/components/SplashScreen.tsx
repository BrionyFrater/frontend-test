"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 300000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="bg-primary text-text">
            <div className="dot-bg">
              <div className="">
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background rounded-b-[4.125rem] border-2 border-black w-full p-20 flex flex-col items-center justify-center"
                   
                  >
                    <motion.img
                      src="/logo.png"
                      alt=""
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-24 h-24 mb-4"
                    />
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-3xl font-bold"
                    >
                      Hear Me
                    </motion.h1>
                  </motion.div>
              </div>
            </div>
        </div>
      )}
    </AnimatePresence>
  );
}
