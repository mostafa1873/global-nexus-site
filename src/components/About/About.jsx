import React from 'react';
import { motion } from 'framer-motion';
import AboutVision from './AboutVision';
import AboutServices from './AboutServices';
import SelectedWorks from './SelectedWorks';
import FooterCTA from './FooterCTA';

const AboutHero = () => {
  return (
    <div className="relative w-full bg-[#fcfcfc]">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] md:opacity-[0.02]">
          <h1 className="text-[35vw] md:text-[25vw] font-black italic uppercase tracking-tighter select-none">
            AGENCY
          </h1>
        </div>
      </div>

      <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden">

          <div className="relative mt-12 text-center flex flex-col items-center w-full">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 rounded-full border border-black/5 bg-white shadow-sm mb-6 md:mb-10"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[2px] md:tracking-[3px] text-gray-400 italic">
                About Global Nexus
              </span>
            </motion.div>

            <h2 className="text-[14vw] md:text-[8vw] font-black tracking-tighter leading-[0.8] md:leading-[0.85] uppercase italic mb-10 md:mb-16">
              <motion.span
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block"
              >
                CRAFTING
              </motion.span>
              <motion.span
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-blue-600 block md:inline"
              >
                LEGACIES.
              </motion.span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-20 w-full max-w-lg md:max-w-none">

              <div className="flex items-end gap-1 md:gap-1.5 h-12 md:h-16">
                {[0.4, 0.7, 1, 0.6, 0.8, 0.5].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1), duration: 1, ease: "circOut" }}
                    style={{ height: `${h * 100}%`, originY: 1 }}
                    className={`w-1.5 md:w-3 rounded-t-sm ${i === 2 ? 'bg-blue-600' : 'bg-black/10'}`}
                  >
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                      className="w-full h-full bg-inherit rounded-t-sm"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="max-w-[240px] md:max-w-[280px] text-center md:text-left text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 leading-relaxed italic border-t md:border-t-0 md:border-l border-black/5 pt-6 md:pt-0 md:pl-6"
              >
                We don't just build, we <span className="text-black italic">engineer</span> digital
                ecosystems with <span className="text-blue-600">surgical precision.</span>
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 md:bottom-8 flex flex-col items-center gap-4 md:gap-6"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[8px] md:text-[9px] font-black uppercase tracking-[4px] md:tracking-[6px] text-gray-300 italic rotate-90 select-none mb-4 md:mb-0"
            >
              Scroll
            </motion.span>

            <div className="relative w-[1px] h-10 md:h-16 bg-gray-100 overflow-hidden">
              <motion.div
                animate={{ y: [-64, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "circIn" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent"
              />
            </div>
          </motion.div>
        </section>

        {/* VISION SECTION */}
        <AboutVision />

        {/* Services SECTION */}
        <AboutServices />

        {/* Works SECTION */}
        <SelectedWorks />

        {/* Works SECTION */}
        <FooterCTA />

      </div>
    </div>
  );
};

export default AboutHero;