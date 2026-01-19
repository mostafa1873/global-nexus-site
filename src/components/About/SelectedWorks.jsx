import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import wor1 from '../../assets/work-1.jpg';
import wor2 from '../../assets/web-1.png';
import wor3 from '../../assets/work-2.jpg';
import wor4 from '../../assets/work-3.jpg';
import wor5 from '../../assets/work-4.jpg';
import wor6 from '../../assets/web-1.png';

const SelectedWorks = () => {
    const projects = [
        { img: wor1, title: "Social Branding", aspect: "aspect-square", grid: "md:col-span-5" },
        { img: wor2, title: "Web Interface", aspect: "aspect-video", grid: "md:col-span-7" },
        { img: wor3, title: "Visual Identity", aspect: "aspect-square", grid: "md:col-span-4" },
        { img: wor4, title: "Digital Platform", aspect: "aspect-video", grid: "md:col-span-8" },
        { img: wor5, title: "Content Strategy", aspect: "aspect-square", grid: "md:col-span-5" },
        { img: wor6, title: "Digital Platform", aspect: "aspect-video", grid: "md:col-span-7" },

    ];

    return (
        <section className="w-full py-24 bg-white text-black">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic"
                    >
                        Selected <span className="text-gray-200">Works</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${project.grid}`}
                        >
                            <div className="relative overflow-hidden rounded-[4px]">
                                <div className={`${project.aspect} w-full bg-gray-50`}>
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 flex justify-between items-baseline border-t border-gray-100 pt-4">
                                <h3 className="text-[11px] font-black uppercase tracking-[2px]">
                                    {project.title}
                                </h3>
                                <span className="text-[10px] font-mono text-gray-400 italic">
                                    0{index + 1}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <Link to="/portfolio" className="group flex items-center gap-6">
                        <span className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter border-b-4 border-black group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-300">
                            See Full Archive
                        </span>
                        <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                            <ArrowRight size={24} />
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default SelectedWorks;