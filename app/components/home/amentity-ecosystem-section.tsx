"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Music, Cloud, ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';

const amenities = [
  {
    id: 0,
    icon: <Waves className="w-6 h-6" />,
    title: "BIỂN HỒ NƯỚC MẶN 7.200M²",
    desc: "Đầu tiên & Duy nhất tại Hà Nội có một bãi cát trắng mịn, mang vị biển về giữa lòng phố dành chỉ riêng cho khu căn hộ.",
    image: "https://noblecrystal.com.vn/wp-content/uploads/2024/07/be-boi-noble-crystal-tay-ho.jpg",
    stats: "7.200m²"
  },
  {
    id: 1,
    icon: <Music className="w-6 h-6" />,
    title: "QUẢNG TRƯỜNG NHẠC NƯỚC 500M",
    desc: "Trung tâm lễ hội ngoài trời trải dài 500m, nơi trình diễn ánh sáng và âm thanh đỉnh cao mang tầm quốc tế.",
    image: "https://noblecrystal.com.vn/wp-content/uploads/2024/10/quang-truong-crystal-square-1-300x170.jpg",
    stats: "500m"
  },
  {
    id: 2,
    icon: <Cloud className="w-6 h-6" />,
    title: "RESORT CHÂN MÂY 3000M²",
    desc: "Bể bơi vô cực, Sky Bar, Sảnh Cigar trên tầng 40. Nơi ngắm trọn vẹn hoàng hôn sông Hồng và ánh sáng thành phố.",
    image: "https://noblecrystal.com.vn/wp-content/uploads/2024/08/yoga-300x211.jpg",
    stats: "Tầng 40"
  },
  {
    id: 3,
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "50+ TIỆN ÍCH ALL-IN-ONE",
    desc: "Shopping Mall, Rạp chiếu phim, Gym/Spa 5 sao, Bể bơi 4 mùa... Mọi nhu cầu sống thượng lưu được đáp ứng ngay lập tức.",
    image: "https://noblecrystal.com.vn/wp-content/uploads/2024/10/trung-tam-thuong-mai-300x169.jpg",
    stats: "50+ Tiện ích"
  }
];

export default function AmenityEcosystemSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-red-800 font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            <Sparkles className="w-4 h-4" /> Resort City In The Air
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Hệ Sinh Thái <br/> 
            <span className="text-amber-600 italic font-light">Tiện Ích Đa Tầng</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Sống như nghỉ dưỡng tại “Resort Chân Mây”. Noble Crystal Tây Hồ tái hiện không gian nghỉ dưỡng 6 sao ngay thềm nhà với những kỷ lục chưa từng có.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Amenity List */}
          <div className="space-y-4">
            {amenities.map((item, idx) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`group cursor-pointer p-8 rounded-[2rem] transition-all duration-500 border ${
                  activeTab === idx 
                  ? 'bg-white border-amber-200 shadow-[0_20px_40px_rgba(0,0,0,0.04)]' 
                  : 'bg-transparent border-transparent grayscale opacity-60 hover:opacity-100 hover:grayscale-0'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl transition-colors duration-500 ${
                    activeTab === idx ? 'bg-red-800 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-xl font-bold transition-colors ${
                        activeTab === idx ? 'text-slate-900' : 'text-slate-500'
                      }`}>
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                        {item.stats}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed font-light transition-all ${
                      activeTab === idx ? 'text-slate-600 opacity-100' : 'text-slate-400 opacity-0 h-0 overflow-hidden'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex items-center justify-between bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] w-full group shadow-xl hover:bg-red-800 transition-all"
            >
              Xem Chi Tiết 50+ Tiện Ích
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button> */}
          </div>

          {/* Right Column: Dynamic Image Carousel */}
          <div className="lg:sticky lg:top-32">
            <div className="relative h-[650px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={amenities[activeTab].image} 
                    alt={amenities[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Image Badge */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-2">Highlight Amenity</p>
                      <h3 className="text-3xl font-serif text-white font-bold">{amenities[activeTab].title}</h3>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCFBF8] rounded-bl-[3rem] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-amber-200 flex items-center justify-center animate-spin-slow">
                   <Sparkles className="text-amber-500 w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {amenities.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    activeTab === i ? 'w-12 bg-red-800' : 'w-2 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}