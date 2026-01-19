import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Globe, Zap, Palette, Code } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    bgColor: "#000000",
    textColor: "#ffffff",
    icon: <Globe className="text-blue-500" />,
    tags: ["SEO", "Strategy", "Growth"],
    desc: "Comprehensive digital strategies to amplify your online presence and reach your target audience."
  },
  {
    id: "02",
    title: "Paid Advertising",
    bgColor: "#f4f4f4",
    textColor: "#000000",
    icon: <Zap className="text-blue-600" />,
    tags: ["PPC", "ROI", "Targeting"],
    desc: "Precision-targeted campaigns on Meta, Google, and LinkedIn designed to convert."
  },
  {
    id: "03",
    title: "Branding",
    bgColor: "#1e3a8a",
    textColor: "#ffffff",
    icon: <Palette className="text-blue-400" />,
    tags: ["Identity", "Visuals", "Voice"],
    desc: "Crafting iconic visual languages that tell your brand's unique story and build legacy."
  },
  {
    id: "04",
    title: "Website Design",
    bgColor: "#ffffff",
    textColor: "#000000",
    icon: <Code className="text-blue-600" />,
    tags: ["React", "UI/UX", "High-Speed"],
    desc: "Industrial-grade websites built for seamless user experience and surgical precision performance."
  }
];

const ServiceCard = ({ service, i }) => {
  return (
    <div 
      className="sticky top-[10vh] md:top-[15vh] w-full mb-8 md:mb-16" 
      // الـ Padding-top هنا مهم جداً عشان الكروت تترص تحت بعضها في الـ Sticky
      style={{ paddingTop: `${i * 20}px` }} 
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        style={{ backgroundColor: service.bgColor, color: service.textColor }}
        className="relative w-full min-h-[450px] md:min-h-[500px] rounded-[30px] md:rounded-[60px] p-6 md:p-16 shadow-2xl overflow-hidden border border-black/5"
      >
        {/* الرقم في الخلفية - متصغر في الموبايل عشان ما يغلوش على النص */}
        <span className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-[30vw] md:text-[20vw] font-black opacity-[0.05] italic select-none">
          {service.id}
        </span>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10">
              {React.cloneElement(service.icon, { size: window.innerWidth < 768 ? 24 : 32 })}
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span key={tag} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest border border-current/20 px-2 md:px-3 py-1 rounded-full opacity-60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mt-12 md:mt-24">
            <h3 className="text-3xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 md:mb-6 leading-[0.9]">
              {service.title}
            </h3>
            <p className="text-sm md:text-xl font-bold opacity-70 leading-relaxed max-w-lg italic uppercase tracking-wider">
              {service.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AboutServices = () => {
  return (
    <section className="relative w-full py-16 md:py-32 bg-transparent overflow-visible">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="relative mb-20 md:mb-40 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 flex flex-col md:flex-row items-center gap-2 md:gap-4"
          >
            <div className="hidden md:block w-8 h-[2px] bg-blue-600" />
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
              Our <span className="text-blue-600">Services</span>
            </h2>
          </motion.div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative pb-[5vh] md:pb-[10vh]">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service} 
              i={i} 
            />
          ))}

          {/* Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-[100] mt-16 md:mt-32 flex flex-col items-center justify-center text-center"
          >
            <div className="w-full h-[1px] bg-black/5 mb-16 md:mb-32" />

            <Link to="/services" className="group relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-40 h-40 md:w-72 md:h-72 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white overflow-hidden shadow-2xl transition-all duration-500 group-hover:bg-black"
              >
                {/* Rotating Text Inside SVG */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 p-3 md:p-4"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white/20 group-hover:fill-white/10 transition-colors">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[8px] md:text-[9px] font-black uppercase tracking-[2px] md:tracking-[3px]">
                      <textPath xlinkHref="#circlePath">
                        Discover All Services • Discover All Services •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <Plus size={30} className="md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-500 mb-1 md:mb-2" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[3px] md:tracking-[4px]">View More</span>
              </motion.div>
            </Link>

            <h3 className="mt-8 md:mt-12 text-xl md:text-4xl font-black text-black tracking-tighter uppercase italic opacity-20 select-none px-4">
              Ready to elevate your business?
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;