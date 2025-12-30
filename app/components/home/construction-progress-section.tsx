"use client"
import { motion } from 'framer-motion';
import {
    HardHat, CheckCircle2, Clock, Calendar,
    ArrowUpRight, PlayCircle, Camera
} from 'lucide-react';

const towerData = [
    { name: "Tòa S2 (Lumina)", status: "ĐÃ CẤT NÓC", progress: 100, detail: "Vượt tiến độ 2 tháng", color: "bg-green-600" },
    { name: "Tòa S5 (Đang mở bán)", status: "Tầng 36/40", progress: 90, detail: "Đang đổ sàn tầng 37", color: "bg-amber-500" },
    { name: "Tòa S3", status: "Tầng 35/40", progress: 87, detail: "Đang đổ sàn tầng 36", color: "bg-amber-500" },
    { name: "Tòa S4", status: "Tầng 32/40", progress: 80, detail: "Đang đổ sàn tầng 33", color: "bg-amber-500" },
    { name: "Tòa S1", status: "Tầng 21/40", progress: 52, detail: "Đang đổ sàn tầng 22", color: "bg-red-800" },
];

const amenityStatus = [
    { title: "Biển hồ nước mặn", status: "Hoàn thiện 100%", desc: "Đã hoàn thành trồng cây xanh cảnh quan.", done: true },
    { title: "Khối đế thương mại", status: "Đang triển khai", desc: "Đang ốp đá Marble mặt ngoài sang trọng.", done: false },
    { title: "Hệ thống nhạc nước", status: "Lắp đặt thiết bị", desc: "Dự kiến hoàn thành 01/2026.", done: false },
];

export default function ConstructionProgressSection() {
    return (
        <section id="tien-do" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-red-800 font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            <HardHat className="w-4 h-4" /> Real-time Construction Update
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                            Cam Kết Vàng <br />
                            <span className="text-amber-600 italic font-light">Từ Chủ Đầu Tư</span>
                        </h2>
                    </div>
                    <div className="pb-2">
                        <div className="flex items-center gap-3 text-slate-500 font-medium mb-2">
                            <Calendar className="w-5 h-5 text-red-800" /> Cập nhật: Tháng 12/2025
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs">Đảm bảo bàn giao đúng tiến độ Quý II/2027 với tiêu chuẩn 5 sao.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left: Tower Progress Bars */}
                    <div className="lg:col-span-5 space-y-8 bg-[#FCFBF8] p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                            Trạng Thái Xây Dựng <span className="text-sm font-sans font-normal text-slate-400">(Từng Tòa)</span>
                        </h3>

                        <div className="space-y-10">
                            {towerData.map((tower, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex justify-between items-end mb-3">
                                        <div>
                                            <h4 className="font-bold text-slate-900 tracking-tight">{tower.name}</h4>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{tower.detail}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${tower.color} mb-1 inline-block`}>
                                                {tower.status}
                                            </span>
                                            <p className="text-lg font-serif font-bold text-slate-900">{tower.progress}%</p>
                                        </div>
                                    </div>
                                    {/* Progress Bar Container */}
                                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tower.progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className={`h-full rounded-full ${tower.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-red-50 rounded-2xl border border-red-100">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-red-800 shrink-0" />
                                <p className="text-sm text-red-900 leading-relaxed italic">
                                    "Dự kiến: Cất nóc đồng loạt & Lắp kính Low-E toàn bộ 5 tòa tháp vào <strong>Tháng 06/2026</strong>."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Progress & Amenities */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Image Gallery Mockup */}
                        <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
                            <img
                                src="https://noblecrystal.com.vn/wp-content/uploads/2025/11/toan-canh-tien-do-xay-dung-noble-crystal-tay-ho-thang-11-2025-1024x767.jpg"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt="Công trường thực tế"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                <div>
                                    <span className="bg-amber-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                                        Live from site
                                    </span>
                                    <h4 className="text-white text-2xl font-serif font-bold italic">Hình ảnh thực tế tháng 12/2025</h4>
                                </div>
                                <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 hover:bg-red-800 transition-colors">
                                    <Camera className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Amenity Checklist */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {amenityStatus.map((item, idx) => (
                                <div key={idx} className="p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-amber-200 transition-colors">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.done ? 'bg-green-100 text-green-600' : 'bg-amber-50 text-amber-600 animate-pulse'}`}>
                                        {item.done ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                                    </div>
                                    <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-3 tracking-tighter">{item.status}</p>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Final */}
                        {/* <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-between bg-slate-900 text-white px-10 py-6 rounded-3xl font-bold text-xs uppercase tracking-[0.2em] w-full shadow-2xl hover:bg-red-800 transition-all"
                        >
                            Xem Video Tiến Độ Thực Tế (YouTube)
                            <PlayCircle className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                        </motion.button> */}

                    </div>
                </div>
            </div>
        </section>
    );
}