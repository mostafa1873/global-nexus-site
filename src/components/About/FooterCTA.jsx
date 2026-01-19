import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
    return (
        <section className="w-full py-40 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 font-bold uppercase tracking-[6px] text-[10px] mb-8"
                    >
                        Next Step
                    </motion.p>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-16"
                    >
                        Ready to <span className="text-blue-600">Start?</span>
                    </motion.h2>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to="/contact" 
                            className="group relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full border border-gray-200 bg-white hover:bg-black transition-colors duration-500 overflow-hidden shadow-sm"
                        >
                            <div className="relative z-10 flex flex-col items-center gap-3 group-hover:text-white transition-colors duration-500">
                                <span className="text-sm font-black uppercase tracking-widest">Let's talk</span>
                                <ArrowRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                            
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                        </Link>
                    </motion.div>

                    <div className="mt-20 flex flex-col md:flex-row gap-10 text-[11px] font-black uppercase tracking-widest text-gray-300">
                        <a href="mailto:hello@yourbrand.com" className="hover:text-black transition-colors">hello@yourbrand.com</a>
                        <span className="hidden md:block">/</span>
                        <a href="tel:+201000000000" className="hover:text-black transition-colors">+20 100 000 0000</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FooterCTA;