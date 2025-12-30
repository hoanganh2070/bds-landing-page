"use client"
import { motion } from 'framer-motion';
import { TrendingUp, Coins, Download, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

const priceData = [
    {
        type: 'Căn Hộ Tiêu Chuẩn (1-3PN)',
        floor: 'Tầng 6 – 7',
        price: '150 – 200 Triệu/m²',
        features: 'Thiết kế tối ưu, view nội khu/biển hồ, suất đầu tư vừa phải.',
        tag: 'Best Seller'
    },
    {
        type: 'Duplex Thông Tầng',
        floor: 'Tầng 8 – 38',
        price: '200 – 250 Triệu/m²',
        features: 'Trần cao 7m, kính Low-E kịch trần, view Panorama sông Hồng.',
        tag: 'Popular'
    },
    {
        type: 'Sky Villa (Bể Bơi & Sân Vườn)',
        floor: 'Tầng 29 – 38',
        price: '260 – 300 Triệu/m²',
        features: 'Biệt thự trên không, bể bơi vô cực riêng, sân vườn rộng lớn.',
        tag: 'Luxury Living'
    },
    {
        type: 'The Penthouse',
        floor: 'Tầng 39 – 40',
        price: '~ 400 Triệu/m²',
        features: 'Bộ sưu tập giới hạn (Limited Edition), định danh vị thế độc tôn.',
        tag: 'Limited'
    }
];

export default function PriceListSection() {
    return (
        <section id="bang-gia" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-red-800 font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            <TrendingUp className="w-4 h-4" /> Investment Opportunity
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                            Cơ Hội Sở Hữu <br />
                            <span className="text-amber-600 italic font-light">Trước Đợt Tăng Giá Mới</span>
                        </h2>
                    </div>
                    <div className="pb-2">
                        <p className="text-slate-500 max-w-sm mb-4">
                            Mức giá hấp dẫn nhất phân khúc BĐS hàng hiệu Tây Hồ Tây. Đăng ký ngay để nhận bảng tính dòng tiền chi tiết.
                        </p>
                        <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                            <ShieldCheck className="w-5 h-5" /> Giá gốc trực tiếp từ CĐT
                        </div>
                    </div>
                </div>

                {/* Price Table (Desktop) */}
                <div className="hidden lg:block overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-white">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-8 font-serif text-lg">Loại Hình</th>
                                <th className="p-8 font-serif text-lg">Khoảng Tầng</th>
                                <th className="p-8 font-serif text-lg">Đơn Giá</th>
                                <th className="p-8 font-serif text-lg">Đặc Điểm Nổi Bật</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceData.map((item, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group border-b border-slate-50 hover:bg-red-50/30 transition-colors"
                                >
                                    <td className="p-8">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{item.tag}</span>
                                            <span className="text-xl font-bold text-slate-900 group-hover:text-red-800 transition-colors">{item.type}</span>
                                        </div>
                                    </td>
                                    <td className="p-8 font-medium text-slate-600">{item.floor}</td>
                                    <td className="p-8">
                                        <span className="text-2xl font-serif font-bold text-red-800">{item.price}</span>
                                    </td>
                                    <td className="p-8">
                                        <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xs">{item.features}</p>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Price Cards (Mobile) */}
                <div className="lg:hidden space-y-4">
                    {priceData.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{item.tag}</span>
                                <span className="text-xs font-bold text-slate-400">{item.floor}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.type}</h4>
                            <p className="text-2xl font-serif font-bold text-red-800 mb-4">{item.price}</p>
                            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.features}</p>
                        </div>
                    ))}
                </div>

                {/* Footer Note & CTA */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FCFBF8] p-8 rounded-[2rem] border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-amber-500 shrink-0">
                            <Coins />
                        </div>
                        <p className="text-xs text-slate-400 italic leading-relaxed max-w-md">
                            * Giá bán đã bao gồm VAT & Nội thất bàn giao cao cấp. Chưa bao gồm KPBT và các ưu đãi chiết khấu. <br />
                            Vui lòng đăng ký để nhận bảng tính dòng tiền & chính sách vay 0% lãi suất.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="flex items-center justify-center gap-2 bg-red-800 text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl shadow-red-900/10">
                            <Download className="w-4 h-4" /> Tải Báo Giá Chi Tiết
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:border-red-800 transition-all">
                            Nhận CSBH Ưu Đãi <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}