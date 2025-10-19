"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTranslate = () => {
    setTranslated(`Translated: ${text}`);
    setShowResult(true);
  };

  const handleReset = () => {
    setText("");
    setTranslated("");
    setShowResult(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="translator-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-background flex flex-col items-center justify-center min-h-screen px-4"
      >
        <h1 className="text-3xl font-bold mb-6">Hear Me Translator</h1>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter ASL (simulated)"
          className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <div className="flex gap-4">
          <button
            onClick={handleTranslate}
            className="bg-accent text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Translate
          </button>

          <button
            onClick={handleReset}
            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-gray-500"
          >
            Reset
          </button>
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-primary rounded-lg shadow-md w-full max-w-md text-center text-black font-medium"
            >
              {translated}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
