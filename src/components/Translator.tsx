"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Image from "next/image";

export default function Translator() {
    const [text, setText] = useState("");
    const [translated, setTranslated] = useState("");
    const [translating, setTranslating] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleTranslate = () => {
        setTranslating(true)
        setTranslated("sdfhsfs ksjhfks fks dfkshkf skhfkfk skfksdhfjshd fksfsk djfksfkhjdkjhd kdk");
        setShowResult(true);
    };

    const handleReset = () => {
        setText("");
        setTranslated("");
        setTranslating(false)
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
                className="bg-background h-full flex flex-col items-center justify-center min-h-screen px-4"
            >
                <Header />

                <div className="mt-20 bg-text items rounded-2xl w-full h-[70svh] p-8 flex items-center justify-center max-h-[700px] max-w-[600px] ">
                    <Image alt="" src={"/camera.svg"} width={50} height={50}></Image>
                </div>

                <div className="flex mt-6 gap-4">
                    {
                        !translating ? (<motion.button
                            onClick={handleTranslate}
                            animate={{ scale: 1 }}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{
                                duration: 0.1,
                                ease: "easeInOut",
                            }}
                            className="bg-gradient-to-r from-[#443AC3] to-accent text-white px-6 py-2 font-semibold rounded-full"
                        >
                            Translate
                        </motion.button>
                        ) : (
                            <motion.button
                                onClick={handleReset}
                                animate={{ scale: 1 }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                transition={{
                                    duration: 0.1,
                                    ease: "easeInOut",
                                }}
                                className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-2 font-semibold rounded-full"
                            >
                                Stop Recording
                            </motion.button>
                        )}




                </div>

                <div className="m-8 w-full max-w-md min-h-[150px]">
                    <AnimatePresence>
                        {showResult && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-background border-2 border-text rounded-lg w-full text-center text-black font-medium"
                            >
                                <div className="px-6 py-3 text-left">Translated</div>
                                <hr className="w-full h-4" />
                                <div className="text-left p-6">{translated}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
