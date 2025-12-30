"use client"
import { motion } from 'framer-motion';
import { 
  Smartphone, Building2, Car, Wind, Thermometer, 
  Gem, ShieldCheck, Cpu, ChevronRight, Mic 
} from 'lucide-react';

export default function SmartLuxurySection() {
  const smartFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Home",
      desc: "Điều khiển nhà bằng giọng nói/App. Thiết lập kịch bản ánh sáng, rèm cửa tự động. Chuông hình FaceID an ninh tuyệt đối.",
      badge: "In-App Control"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Smart Building",
      desc: "An ninh AI 24/7 giám sát người lạ. Thang máy nhận diện khuôn mặt chọn tầng. Robot thông minh giao hàng tận cửa.",
      badge: "AI Security"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Smart Parking",
      desc: "Hầm đỗ xe 65.000m² thông minh. Tự động nhận diện biển số, dẫn đường tìm xe và đặt chỗ qua App cư dân.",
      badge: "Auto Sensing"
    }
  ];

  return (
    <section className="py-24 bg-[#FCFBF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-red-800 font-bold tracking-[0.3em] uppercase text-xs mb-4"
            >
              <Cpu className="w-5 h-5" /> Next-Gen Living
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Công Nghệ Thông Minh <br/> 
              <span className="text-amber-600 italic font-light">& Nội Thất Xa Xỉ</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm pb-2 border-l-2 border-amber-500 pl-6 italic">
            "Tiên phong kiến tạo chuẩn sống 4.0 với hệ sinh thái Smart Living toàn diện."
          </p>
        </div>

        {/* 3 Smart Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {smartFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>
              <div className="mb-8 p-4 bg-red-50 text-red-800 rounded-2xl w-fit group-hover:bg-red-800 group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-amber-600 uppercase mb-3 block">
                {item.badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Health & Interior Dual Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Health Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-10 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-amber-500"></span> Sức Khỏe Là Vàng
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Wind />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight">Điều hòa lọc khí PM2.5</h4>
                    <p className="text-slate-400 text-sm font-light">Hệ thống cấp khí tươi & lọc bụi mịn PM2.5 cho từng căn hộ, đảm bảo không khí tinh khiết như resort.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Thermometer />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight">Hệ thống sưởi sàn Master</h4>
                    <p className="text-slate-400 text-sm font-light">Sưởi ấm tại phòng tắm & phòng ngủ master, duy trì nhiệt độ lý tưởng cho sức khỏe vào mùa đông.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          </motion.div>

          {/* Interior Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold mb-10 text-slate-900 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-red-800"></span> Nội Thất Hàng Hiệu
              </h3>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Branded Partners</p>
                  <p className="font-bold text-slate-800 italic">Duravit, Gessi, Bosch, Hansgrohe...</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Glass Technology</p>
                  <p className="font-bold text-slate-800 italic">Kính Low-E 3 Lớp (Full Glass)</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Tiêu chuẩn bàn giao nhập khẩu 100% Châu Âu. Hệ kính hộp Triple Low-E cản tia UV, cách âm tuyệt đối và bếp từ vô hình (Invisible Cooktop) hiện đại nhất thế giới.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between bg-red-800 text-white px-8 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] w-full shadow-xl shadow-red-900/20"
            >
              Xem Danh Mục Bàn Giao Chi Tiết
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}