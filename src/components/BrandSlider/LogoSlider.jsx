import { motion } from 'framer-motion';
import br1 from '../../assets/brand_1.webp'
import br2 from '../../assets/brand-2.webp'
import br3 from '../../assets/brand_3_.webp' 
import br4 from '../../assets/brand_4.webp'
import br5 from '../../assets/brand_5.webp'
import br6 from '../../assets/brand_6.webp'

const brands = [
    { url: br1 }, { url: br2 }, { url: br3 },
    { url: br4 }, { url: br5 }, { url: br6 },
];

export default function LuxuryLogoWall() {
    // قمنا بزيادة تكرار المصفوفة لضمان عدم وجود فراغات في الشاشات العريضة جداً
    const doubledBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

    return (
        // تم تعديل الـ padding ليكون أقل في الموبايل
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* استايل السلايدر السلس */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 50s linear infinite;
                }
            `}} />

            {/* القسم العلوي (الهيدر) */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-6 mb-20 md:mb-32 z-10">
                <div className="relative flex flex-col items-center md:items-start">
                    {/* الكلمة الضخمة في الخلفية - تم ضبط حجم الخط للموبايل */}
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-[18vw] md:text-[12vw] font-black text-black/[0.03] absolute -top-8 md:-top-16 left-0 leading-none select-none tracking-tighter uppercase"
                        style={{ WebkitTextStroke: '1px rgba(0,0,0,0.08)' }}
                    >
                        PARTNERS
                    </motion.span>

                    {/* العنوان الرئيسي */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative z-10 flex items-center gap-3 md:gap-4"
                    >
                        <div className="w-6 h-[2px] md:w-8 bg-blue-600" />
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-black tracking-tighter uppercase italic text-center md:text-left">
                            World Class <span className="text-blue-600">Partners</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* السلايدر الفخم */}
            {/* تم تعديل الـ gap ليكون أصغر قليلاً في الموبايل */}
            <div className="relative flex flex-col gap-5 md:gap-8 -rotate-1 scale-105">
                
                {/* الصف الأول */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 md:gap-6 items-center whitespace-nowrap animate-scroll-left">
                        {doubledBrands.map((logo, i) => (
                            // تم تغيير الحجم من ثابت (w-44) إلى متغير (w-32 للموبايل و w-44 للديسك توب)
                            <div key={i} className="group relative flex-shrink-0 w-32 h-32 md:w-44 md:h-44 bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]">
                                <img 
                                    src={logo.url} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Brand"
                                    onError={(e) => e.target.parentElement.style.display = 'none'}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* الصف الثاني */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 md:gap-6 items-center whitespace-nowrap animate-scroll-right">
                        {doubledBrands.map((logo, i) => (
                            // نفس التعديل للحجم هنا
                            <div key={i} className="group relative flex-shrink-0 w-32 h-32 md:w-44 md:h-44 bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                                <img 
                                    src={logo.url} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    alt="Brand"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* تأثير التلاشي الجانبي - تم تصغيره في الموبايل حتى لا يغطي اللوجوهات */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-60 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-60 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}