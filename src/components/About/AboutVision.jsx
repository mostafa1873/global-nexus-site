import React from 'react';
import { motion } from 'framer-motion';

const AboutVision = () => {
    // الكلمات اللي هتتكرر في السلايدر
    const marqueeWords = "Innovation × Precision × Strategy × Impact";

    return (
        <section className="relative py-20 bg-[#fcfcfc] px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* 1. Left Side: The Bold Statement */}
                <div className="md:col-span-7 relative">
                    <span className="text-[10vw] font-black text-black/[0.02] absolute -top-10 -left-4 select-none italic">
                        01
                    </span>

                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter"
                    >
                        NOT JUST AN AGENCY. <br />
                        <span className="text-blue-600">A STRATEGIC ALLY.</span>
                    </motion.h2 >

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        className="h-[2px] bg-black mt-10"
                    />
                </div>

                {/* 2. Right Side: The Story */}
                <div className="md:col-span-5 flex flex-col justify-end md:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <h4 className="text-[10px] font-black uppercase tracking-[4px] text-gray-400 mb-6 italic">
                            / Our Vision
                        </h4>
                        <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed italic mb-8">
                            In a digital world crowded with "noise," we focus on <span className="text-black font-black">Impact.</span> We believe that every pixel should serve a purpose.
                        </p>

                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 leading-loose italic border-l border-black/10 pl-6">
                            Our mission is to bridge the gap between <span className="text-black">High-End Design</span> and <span className="text-black">Industrial Scalability</span>.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 3. INFINITE MARQUEE (التعديل هنا) */}
            <div className="mt-32 overflow-hidden border-y border-black/[0.05] py-12 bg-white/50">
                <div className="flex w-max">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }} // بيتحرك لنص المسافة فقط عشان التكرار يغطي الباقي
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap gap-20 pr-20"
                    >
                        {/* بنكرر السطر مرتين عشان الحركة تبان مالهاش نهاية */}
                        {[1, 2].map((i) => (
                            <h3 key={i} className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-black/[0.4]">
                                {marqueeWords} <span className="text-blue-600 ml-20">{marqueeWords}</span>
                            </h3>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutVision;