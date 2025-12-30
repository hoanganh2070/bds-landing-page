"use client"
import { useState, useEffect } from 'react';
import {
    ChevronDown, MapPin, Building2, Home, Phone, Menu, X, Star,
    ShieldCheck, Gem, Utensils, Waves, Globe, Car, Coffee, PlayCircle,
    CheckCircle2, Sparkles, Wind, Thermometer, Shield
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProductCard from './product-card';
import SmartLuxurySection from './smart-luxury-section';
import AmenityEcosystemSection from './amentity-ecosystem-section';
import ConstructionProgressSection from './construction-progress-section';
import DeveloperTrustSection from './developer-trust-section';
import PriceListSection from './price-list-section';

export default function NobleCrystalTayHo() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Tổng Quan', id: 'tong-quan' },
        { name: 'Vị Trí', id: 'vi-tri' },
        { name: 'Dịch Vụ Elite', id: 'dich-vu' },
        { name: 'Mặt Bằng', id: 'mat-bang' },
        { name: 'Tiện Ích', id: 'tien-ich' },
        { name: 'Pháp Lý', id: 'phap-ly' }
    ];

    return (
        <div className="min-h-screen bg-[#FCFBF8] text-slate-900 selection:bg-red-200">
            {/* 1. NAVIGATION */}
            <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-red-800/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-6'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <img src='/images/logo.webp' alt="Noble Logo" className="h-12 w-auto brightness-0 invert" />
                    </motion.div>

                    <div className="hidden lg:flex space-x-8">
                        {menuItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-amber-400 transition-colors">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="tel:0868986829" className="hidden md:flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full text-[12px] font-bold hover:bg-white transition-all shadow-lg">
                            <Phone className="w-4 h-4" /> 0868 986 829
                        </a>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 2. HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img src="/images/overview.jpg" className="w-full h-full object-cover animate-slow-zoom" alt="Noble Crystal Hero" />
                </div>
                <div className="relative z-20 text-center px-4 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-6 py-2 border border-amber-200/50 rounded-full text-amber-200 text-[10px] tracking-[0.4em] mb-8 bg-white/10 backdrop-blur-sm uppercase">
                            Branded Residences By WorldHotels Elite
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-[1.1]">
                            DINH THỰ BAY <br /> <span className="text-amber-400 italic font-light">GIỮA MIỀN DI SẢN</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            Tổ hợp 5 tòa tháp pha lê kiêu hãnh vươn mình bên sông Hồng, tái hiện biểu tượng Marina Bay Sands giữa lòng Ciputra.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button className="bg-amber-500 text-black px-10 py-4 rounded-full font-bold hover:bg-red-700 hover:text-white transition-all transform hover:scale-105 shadow-2xl uppercase text-xs tracking-widest">
                                Nhận Báo Giá & CSBH Mới Nhất
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. THÔNG SỐ KỸ THUẬT & CÔNG NGHỆ (NEW) */}
            {/* <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <TechFeature icon={<Wind />} title="Air Fresh" desc="Lọc & cung cấp khí tươi toàn diện" />
                        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
                            <TechFeature icon={<Thermometer />} title="Underfloor Heating" desc="Sàn sưởi ấm phòng tắm Master" />
                        </motion.div>
                        <TechFeature icon={<Sparkles />} title="Invisible Cooktop" desc="Bếp từ vô hình hiện đại nhất" />
                        <TechFeature icon={<Shield />} title="AI Security" desc="Face ID & An ninh 4 lớp" />
                    </div>
                </div>
            </section> */}

            {/* 4. TỔNG QUAN & PHÂN LOẠI SẢN PHẨM */}
            <section id="tong-quan" className="py-24 bg-[#FCFBF8]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-red-800 font-bold tracking-[0.3em] mb-6 uppercase text-xs">Tổng quan dự án</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Biểu tượng <span className="italic text-amber-600 font-light">Sky Living</span> độc bản</h3>
                            <div className="space-y-4">
                                <InfoRow label="Tên pháp lý" value="Sunshine Crystal River" />
                                <InfoRow label="Chủ đầu tư" value="Wonderland (Sunshine Group)" />
                                <InfoRow label="Quy mô" value="50.850m² - 5 tòa tháp 40 tầng" />
                                <InfoRow label="Sản phẩm" value="955 Căn hộ & 60 Biệt thự" />
                                <InfoRow label="Mật độ xây dựng" value="Chỉ 31.7%" />
                                <InfoRow label="Bàn giao" value="Quý II/2027 (Sổ hồng lâu dài)" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <StatBox number="300" label="Sky Villa (Bể bơi riêng)" />
                            <StatBox number="570" label="Căn hộ Duplex" />
                            <StatBox number="06" label="Penthouse Độc Bản" />
                            <StatBox number="60" label="Biệt thự thấp tầng" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="vi-tri" className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-amber-400 font-bold tracking-[0.3em] mb-4 uppercase text-xs">Vị thế độc tôn</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold">Tâm Điểm "Tọa Độ Vàng"</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="space-y-12">
                            <LocationItem time="02 Phút" title="Sân Golf Ciputra" desc="Trải nghiệm môn thể thao quý tộc ngay dưới hiên nhà." />
                            <LocationItem time="05 Phút" title="Lotte Mall Tây Hồ" desc="Tổ hợp mua sắm, giải trí lớn nhất Hà Nội." />
                            <LocationItem time="15 Phút" title="Sân bay Nội Bài" desc="Di chuyển quốc tế nhanh chóng qua cầu Nhật Tân." />
                        </div>
                        <div className="lg:col-span-2 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <img src="https://noblecrystal.com.vn/wp-content/uploads/2024/07/vi-tri-du-an-noble-crystal-tay-ho.jpg" className="relative rounded-3xl w-full h-full object-cover shadow-2xl" alt="Map" />
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. 4 TẦNG TIỆN ÍCH CHUYÊN BIỆT (NEW) */}
            <section id="tien-ich" className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <h2 className="text-amber-400 font-bold tracking-[0.3em] mb-4 uppercase text-xs">Hệ sinh thái Resort City</h2>
                    <h3 className="text-4xl md:text-6xl font-serif font-bold italic">50+ Tiện Ích Đa Tầng</h3>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ZoneCard
                        floor="Tầng 1-5"
                        title="Tổ hợp TMDV"
                        desc="Shopping Mall, Shophouse hạng sang, Trung tâm giải trí mặt đất."
                    />
                    <ZoneCard
                        floor="Tầng 20"
                        title="Clubhouse Tầng Không"
                        desc="Phòng Cigar, hầm rượu vang, Golf 3D cao cấp dành riêng cho cư dân."
                    />
                    <ZoneCard
                        floor="Nội khu"
                        title="Công viên nhiệt đới"
                        desc="Biển hồ nước mặn 7.200m², bãi cát trắng và Bungalow nghỉ dưỡng."
                    />
                    <ZoneCard
                        floor="Tầng 39-40"
                        title="Nghỉ dưỡng chân mây"
                        desc="Bể bơi vô cực Panorama, Sky Bar, Cafe tầng thượng view Sông Hồng."
                    />
                </div>
            </section>

            <section id="mat-bang" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-red-800 font-bold tracking-[0.3em] mb-4 uppercase text-xs">Bộ sưu tập kiệt tác</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900">Lựa Chọn Không Gian Xứng Tầm</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProductCard
                            title="SKY SUITE"
                            subtitle="Căn Hộ 1 Mặt Sàn"
                            area="76m² - 186m²"
                            floor="Tầng 6 - 7"
                            desc="Thiết kế tối ưu công năng, tầm nhìn hướng biển hồ nước mặn hoặc nội khu Ciputra."
                            image="/images/p1.webp"
                        />
                        <ProductCard
                            title="SKY MANSION"
                            subtitle="Duplex Thông Tầng"
                            area="130m² - 240m²"
                            floor="Tầng 8 - 37"
                            desc="Biệt thự giữa tầng không với trần cao 7m, kính Low-E kịch trần view sông Hồng."
                            image="/images/p2.jpg"
                        />
                        <ProductCard
                            title="SKY VILLA GARDEN"
                            subtitle="Có Bể Bơi & Sân Vườn"
                            area="247m² - 350m²"
                            floor="Tầng 8 - 37"
                            desc="Đặc quyền nghỉ dưỡng với bể bơi và sân vườn riêng 70m² ngay tại căn hộ."
                            highlight
                            image="/images/p3.jpg"
                        />
                    </div>
                </div>
            </section>

            <SmartLuxurySection />

            <AmenityEcosystemSection />

            {/* 6. WORLDHOTELS ELITE SERVICES */}
            <section id="dich-vu" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                    <img src="/images/noble.jpg" alt="WorldHotels" className="h-full rounded-2xl mb-2 opacity-80" />
                    <p className='mb-4'>Ông Cyrill Czerwonka (Tổng Giám đốc Phát triển Kinh doanh BWH Hotels Châu Á) phát biểu tại Lễ ra mắt dự án Noble Crystal Tay Ho.</p>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-center text-slate-900 mb-12">Đặc Quyền "May Đo" Riêng Biệt</h3>
                    <div className="grid md:grid-cols-3 gap-8 w-full">
                        <ServiceItem icon={<ShieldCheck />} title="Quản Gia Riêng" desc="Phục vụ 24/7, hỗ trợ mọi nhu cầu từ giặt là đến đặt tiệc." />
                        <ServiceItem icon={<Utensils />} title="Private Chef" desc="Trải nghiệm ẩm thực Michelin tại ngay phòng bếp gia đình." />
                        <ServiceItem icon={<Star />} title="Concierge 5*" desc="Đặt vé máy bay, sân Golf, Tour du lịch hạng sang toàn cầu." />
                    </div>
                </div>
            </section>

            <ConstructionProgressSection />

            {/* 8. BẢNG GIÁ DỰ KIẾN (NEW) */}
          <PriceListSection />

            <DeveloperTrustSection />

            {/* 9. FOOTER */}
            <footer className="bg-black text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    <div>
                        <img src='/images/logo.webp' alt="Noble" className="h-10 mb-6 brightness-0 invert" />
                        <p className="text-slate-400 font-light leading-relaxed">
                            Noble Crystal Tây Hồ - Branded Residences đầu tiên tại Hà Nội, nơi di sản gặp gỡ tương lai.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-bold mb-6 uppercase">Địa chỉ văn phòng</h4>
                        <p className="text-slate-400 mb-2 flex gap-2"><MapPin className="w-4 h-4" /> KĐT Ciputra, Tây Hồ, Hà Nội</p>
                        <p className="text-slate-400 flex gap-2"><Building2 className="w-4 h-4" /> VP Noble: Sunshine Golden River</p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-bold mb-6 uppercase">Liên hệ trực tiếp</h4>
                        <p className="text-2xl font-bold mb-4">0868 986 829</p>
                        <button className="bg-red-800 w-full py-3 rounded-full hover:bg-amber-500 transition-colors uppercase text-xs font-bold tracking-widest">
                            Tải Trọn Bộ Tài Liệu
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Sub-components hỗ trợ
function InfoRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between border-b border-slate-200 py-3">
            <span className="text-slate-500 font-light">{label}:</span>
            <span className="text-slate-900 font-bold">{value}</span>
        </div>
    );
}

function StatBox({ number, label }: { number: string, label: string }) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-amber-100 text-center shadow-sm">
            <div className="text-3xl font-serif font-bold text-red-800 mb-1">{number}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
        </div>
    );
}

function ZoneCard({ floor, title, desc }: { floor: string, title: string, desc: string }) {
    return (
        <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all">
            <div className="text-amber-400 font-bold text-sm mb-2">{floor}</div>
            <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
        </div>
    );
}

function TechFeature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-red-50 p-4 rounded-2xl text-red-800 mb-4">{icon}</div>
            <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
            <p className="text-[11px] text-slate-500">{desc}</p>
        </div>
    );
}

function LegalStep({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
            <div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="text-sm text-slate-500">{desc}</p>
            </div>
        </div>
    );
}

function PriceRow({ type, area, price, status }: { type: string, area: string, price: string, status: string }) {
    return (
        <tr className="border-b border-slate-100 hover:bg-red-50 transition-colors">
            <td className="p-6 font-bold">{type}</td>
            <td className="p-6">{area}</td>
            <td className="p-6 text-red-800 font-bold">{price}</td>
            <td className="p-6"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold">{status}</span></td>
        </tr>
    );
}

function ServiceItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="text-center p-8">
            <div className="text-red-800 flex justify-center mb-6 scale-150">{icon}</div>
            <h4 className="text-xl font-bold mb-4">{title}</h4>
            <p className="text-slate-500 text-sm font-light">{desc}</p>
        </div>
    );
}

function LocationItem({ time, title, desc }: any) {
    return (
        <div className="border-l-2 border-amber-500/30 pl-8 relative group cursor-default">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
            <div className="text-3xl font-serif font-bold text-amber-400 mb-2">{time}</div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">{title}</h4>
            <p className="text-slate-400 text-sm font-light leading-relaxed">{desc}</p>
        </div>
    );
}
