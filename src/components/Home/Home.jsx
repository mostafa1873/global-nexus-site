import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MousePointer2, Zap, Globe, Layout, BarChart3, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

import wor1 from '../../assets/work-1.jpg';
import wor2 from '../../assets/work-2.jpg';
import wor3 from '../../assets/work-3.jpg';
import wor4 from '../../assets/work-4.jpg';
import wor5 from '../../assets/work-5.jpg';
import wor6 from '../../assets/work-6.jpg';
import LogoSlider from '../BrandSlider/LogoSlider';

const ServiceCard = ({ service, i, total }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      ref={container}
      className="sticky top-0 h-screen flex items-center justify-center w-full px-4 md:px-0"
    >
      <motion.div
        style={{
          scale,
          opacity,
          zIndex: i + 1,
          top: `calc(10% + ${i * 35}px)`,
          backgroundColor: service.bgColor,
          color: service.textColor
        }}
        // تم تعديل padding الموبايل (p-8) وتوسيط العناصر flex-col items-center
        className="relative w-full h-[75vh] md:h-[80vh] rounded-[3rem] md:rounded-[4rem] border border-black/5 shadow-[0_-20px_80px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col justify-between p-8 md:p-20 origin-top will-change-transform"
      >
        <span className="absolute -bottom-10 -right-10 text-[30vw] font-black opacity-[0.03] leading-none pointer-events-none select-none">
          {service.id}
        </span>

        {/* الجزء العلوي: الأيقونة والعنوان */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start w-full text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 rounded-2xl bg-black/5 backdrop-blur-sm">
                {service.icon}
              </div>
              <span className="text-xs md:text-sm font-black uppercase tracking-[4px] opacity-60">Service {service.id}</span>
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.85] mb-8">
              {service.title.split(' ')[0]} <br />
              <span className="opacity-40">{service.title.split(' ')[1]}</span>
            </h3>
          </div>

          <div className="mt-4 md:mt-0">
            <Link to={service.link || "#"}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 45 }}
                className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-current flex items-center justify-center group cursor-pointer"
              >
                <ArrowUpRight size={30} className="md:w-10 md:h-10" strokeWidth={1.5} />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* الجزء السفلي: الوصف والتاجز */}
        <div className="relative z-10 flex flex-col items-center md:items-end w-full border-t border-current/10 pt-8 md:pt-10 text-center md:text-right">
          <p className="text-lg md:text-2xl font-medium max-w-xl leading-snug italic mb-6 md:mb-0">
            {service.desc || "Transforming your brand with world-class digital experiences and innovative design solutions."}
          </p>
          
          <div className="hidden md:flex gap-2 mt-6">
            {service.tags && service.tags.map((tag, index) => (
              <span key={index} className="px-5 py-2 rounded-full border border-current/20 text-xs font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const words = ["GROWTH", "WEBSITES", "SOLUTIONS", "STRATEGY"];
  const projectImages = [wor1, wor2, wor3, wor4, wor5, wor6];

  const services = [
    {
      id: "01",
      title: "Digital Branding",
      bgColor: "#000000",
      textColor: "#ffffff",
      icon: <Zap className="text-blue-500" />,
      tags: ["Identity", "Strategy", "Voice"],
      desc: "We craft unique visual identities that resonate with your audience."
    },
    {
      id: "02",
      title: "Web Experience",
      bgColor: "#f4f4f4",
      textColor: "#000000",
      icon: <Layout className="text-blue-600" />,
      tags: ["React", "UI/UX", "WebGL"],
      desc: "Immersive digital interfaces built with cutting-edge technology."
    },
    {
      id: "03",
      title: "E-Commerce",
      bgColor: "#1e3a8a",
      textColor: "#ffffff",
      icon: <BarChart3 className="text-blue-400" />,
      tags: ["Shopify", "Conversion", "Growth"],
      desc: "High-converting online stores designed for global scale."
    },
    {
      id: "04",
      title: "Marketing Strategy",
      bgColor: "#ffffff",
      textColor: "#000000",
      icon: <Globe className="text-blue-600" />,
      tags: ["SEO", "Performance", "Data"],
      desc: "Data-driven campaigns that deliver real, measurable results."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full bg-[#fcfcfc]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-slate-50 rounded-full" />
        <motion.div
          animate={{ rotate: [15, 25, 15], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-[5%] w-64 h-64 border-[1px] border-blue-600/20 rounded-[40px] rotate-12"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[5%] w-80 h-80 border-[40px] border-blue-50 rounded-full"
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px',
            opacity: 0.03
          }} />
      </div>

      <div className="relative z-10">

        {/* --- SECTION 1: HERO --- */}
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-36 pb-40">
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.05] bg-white shadow-sm mb-12"
            >
              <MousePointer2 size={14} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-500">Transforming Businesses</span>
            </motion.div>

            <div className="flex flex-col items-center justify-center mb-10 leading-none">
              <h1 className="text-[11vw] md:text-[8.5vw] font-black text-black tracking-tighter uppercase">YOUR DIGITAL</h1>
              <div className="h-[12vw] md:h-[9.5vw] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[11vw] md:text-[8.5vw] font-black text-blue-600 tracking-tighter block"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto text-gray-500 text-base md:text-xl font-medium leading-relaxed mb-16 px-4"
            >
              At <span className="text-black font-semibold">Global Nexus</span>, we build high-converting digital ecosystems.
              Real results through <span className="italic text-blue-600 font-bold">intelligent strategy.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact">
                <button className="h-16 px-12 bg-black text-white rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3">
                  Start a Project <ArrowUpRight size={18} />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="h-16 px-12 bg-white border border-black/5 text-black rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
                  Our Portfolio
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[3px]">Explore Work</span>
            <div className="w-[1px] h-14 bg-slate-200 relative overflow-hidden">
              <motion.div
                animate={{ y: [-56, 56] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-blue-600"
              />
            </div>
          </motion.div>
        </section>

        {/* --- SECTION 2: SLIDER --- */}
        <section className="relative w-full py-20 overflow-hidden bg-transparent">
          <div className="relative max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center md:items-start">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[12vw] font-black text-black/[0.03] absolute -top-10 md:-top-16 left-0 leading-none select-none tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
            >
              PROJECTS
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 flex items-center gap-4"
            >
              <div className="w-8 h-[2px] bg-blue-600" />
              <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
                Recent <span className="text-blue-600">Work</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative flex items-center">
            <motion.div
              className="flex gap-6 px-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...projectImages, ...projectImages].map((img, i) => (
                <div key={i} className="w-[280px] md:w-[400px] h-[380px] md:h-[480px] flex-shrink-0">
                  <div className="w-full h-full overflow-hidden rounded-[2.5rem] bg-white border border-white shadow-xl">
                    <img src={img} alt="" className="w-full h-full object-cover transition-all duration-700 hover:scale-110 grayscale-[0.2] hover:grayscale-0" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: STACKING SERVICES CARDS --- */}
        <section className="relative w-full py-16 md:py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="relative mb-16 md:mb-32 flex flex-col items-center md:items-start">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[15vw] md:text-[12vw] font-black text-black/[0.03] absolute -top-8 md:-top-16 left-0 leading-none select-none tracking-tighter uppercase"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
              >
                SERVICES
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10 flex items-center gap-2 md:gap-4"
              >
                <div className="w-6 md:w-8 h-[2px] bg-blue-600" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
                  Our <span className="text-blue-600">Services</span>
                </h2>
              </motion.div>
            </div>

            <div className="relative">
              {services.map((service, i) => (
                <ServiceCard
                  key={i}
                  service={service}
                  i={i}
                  total={services.length}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-[100] mt-12 md:mt-20 flex flex-col items-center justify-center text-center"
              >
                <div className="w-full h-[1px] bg-black/5 mb-10 md:mb-20" />

                <Link to="/services" className="group relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white overflow-hidden transition-colors duration-500 group-hover:bg-black shadow-2xl"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 p-3 md:p-4"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-white/20 group-hover:fill-white/10 transition-colors">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[9px] font-black uppercase tracking-[3px]">
                          <textPath xlinkHref="#circlePath">
                            Discover All Services • Discover All Services •
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    <Plus size={30} className="md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-500 mb-1 md:mb-2" />
                    <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[3px] md:tracking-[4px]">View More</span>
                  </motion.div>
                </Link>

                <h3 className="mt-8 md:mt-12 text-xl sm:text-2xl md:text-4xl font-black text-black tracking-tighter uppercase italic opacity-20 select-none">
                  Ready to elevate your business?
                </h3>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION: SELECTED WORKS --- */}
        <section className="relative w-full py-32 bg-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative mb-32 flex flex-col items-center md:items-start">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[12vw] font-black text-black/[0.03] absolute -top-10 md:-top-16 left-0 leading-none select-none tracking-tighter uppercase"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
              >
                WORKS
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10 flex items-center gap-4"
              >
                <div className="w-8 h-[2px] bg-blue-600" />
                <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic">
                  Selected <span className="text-blue-600">Works</span>
                </h2>
              </motion.div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {[
                { img: wor1, height: "aspect-[4/5]" },
                { img: wor2, height: "aspect-square" },
                { img: wor3, height: "aspect-[3/4]" },
                { img: wor4, height: "aspect-video" },
                { img: wor5, height: "aspect-[4/5]" },
                { img: wor6, height: "aspect-square" },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-[2rem] bg-white group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`${project.height} overflow-hidden`}>
                    <motion.img
                      src={project.img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>

            <div className="mt-32 flex justify-center">
              <Link to="/portfolio" className="group relative">
                <div className="relative flex items-center gap-8 py-6 px-12 border border-black/10 rounded-full group-hover:bg-black transition-all duration-500">
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter italic text-black group-hover:text-white transition-colors">
                    All Projects
                  </span>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-700">
                    <ArrowUpRight size={28} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: TESTIMONIALS --- */}
        <section className="relative w-full py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative mb-24 flex flex-col items-center text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10vw] font-black text-black/[0.02] absolute -top-10 leading-none select-none uppercase"
              >
                REVIEWS
              </motion.span>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase italic">
                  Trusted by <span className="text-blue-600">Visionaries</span>
                </h2>
                <p className="text-gray-400 font-medium mt-4 uppercase tracking-[4px] text-xs">Real stories from real partners</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-black/5 flex flex-col justify-between transition-all"
              >
                <div className="flex gap-1 mb-8 text-blue-600">
                  {[...Array(5)].map((_, i) => <Plus key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-black leading-tight tracking-tight mb-10">
                  "Working with Global Nexus was a game-changer. They didn't just build a website; they built a digital engine that tripled our conversion rate in 3 months."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center font-black text-blue-600">JD</div>
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest text-black">John Doe</p>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter">CEO @ TechFlow</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-black p-10 rounded-[3rem] text-white flex flex-col justify-between transition-all"
              >
                <div className="text-blue-500 mb-6 font-black text-4xl leading-none">“</div>
                <p className="text-xl font-medium italic opacity-80 leading-relaxed">
                  "Their attention to detail and performance optimization is unmatched. Our site is now 4x faster."
                </p>
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center font-bold">SK</div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-[2px]">Sarah Khan</p>
                    <p className="text-[10px] opacity-50 uppercase tracking-widest">Founder of Lux</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-blue-600 p-10 rounded-[3rem] text-white transition-all"
              >
                <p className="text-lg font-bold leading-snug mb-8">
                  "Best investment we made for our branding this year."
                </p>
                <p className="font-black text-xs uppercase tracking-[3px] opacity-70">— Mark R.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="md:col-span-2 bg-[#f4f4f4] p-10 rounded-[3rem] border border-black/5 flex flex-col md:flex-row gap-10 items-center transition-all"
              >
                <div className="flex-1">
                  <p className="text-xl font-bold text-black/80 leading-relaxed italic">
                    "The SEO strategy they implemented put us on the first page of Google within weeks. We've seen a 200% increase in organic leads."
                  </p>
                </div>
                <div className="w-full md:w-auto flex flex-col items-center md:items-end">
                  <div className="p-4 bg-white rounded-2xl shadow-sm mb-4">
                    <BarChart3 className="text-blue-600" />
                  </div>
                  <p className="font-black text-[10px] uppercase tracking-[3px] text-black">Impact Report</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <LogoSlider />
      </div>
    </div>
  );
}