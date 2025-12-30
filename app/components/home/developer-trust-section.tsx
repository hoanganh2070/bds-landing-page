"use client"
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DeveloperTrustSection() {
    return (
        <section id="chu-dau-tu" className="py-24 bg-[#fdfcfb] border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left side: Branding & Trust badges */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-red-800 font-bold tracking-[0.3em] uppercase text-xs mb-6">Bảo chứng uy tín</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-8">
                                Đơn vị phát triển <br/> 
                                <span className="text-amber-600 italic font-light">& Chủ đầu tư</span>
                            </h3>
                            
                            {/* Logo Group */}
                            <div className="flex flex-wrap items-center gap-8 mb-10 grayscale hover:grayscale-0 transition-all duration-700 opacity-70 hover:opacity-100">
                                <img src="https://noblecrystal.com.vn/wp-content/uploads/2025/04/logo-sunshine-group-300x123.png" alt="Sunshine Group" className="h-12 object-contain" />
                                <div className="w-px h-8 bg-slate-200" />
                                <img src="https://noblecrystal.com.vn/wp-content/uploads/2025/11/logo-noble-crystal.png" alt="Noble Brand" className="h-10 object-contain" />
                            </div>

                            <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                                Noble Crystal Tây Hồ được phát triển bởi <strong>Noble</strong> – thương hiệu BĐS hàng hiệu tiên phong và đầu tư bởi <strong>Wonderland</strong>, cả hai đều là thành viên cốt lõi của <strong>Sunshine Group</strong>.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Tiềm lực vững mạnh</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Pháp lý minh bạch</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Detailed Card & Buttons */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                                <ShieldCheck className="w-64 h-64" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-slate-500 leading-relaxed mb-10 italic">
                                    "Với kinh nghiệm dày dặn và uy tín đã được khẳng định qua hàng loạt dự án hạng sang trên khắp Việt Nam, Sunshine Group cam kết mang đến cho Noble Crystal Tây Hồ những tiêu chuẩn quốc tế khắt khe nhất về thiết kế và chất lượng xây dựng, kiến tạo một biểu tượng sống xứng tầm cộng đồng tinh hoa."
                                </p>

                                <div className="space-y-4 mb-12">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                        <Award className="text-amber-500 w-5 h-5" /> 
                                        Thành tựu nổi bật
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-500 font-light">
                                        <li className="flex gap-2"><span>•</span> Top 10 Nhà phát triển BĐS uy tín</li>
                                        <li className="flex gap-2"><span>•</span> Tiên phong công nghệ Smart Living 4.0</li>
                                        <li className="flex gap-2"><span>•</span> Hơn 30 dự án cao cấp trên toàn quốc</li>
                                        <li className="flex gap-2"><span>•</span> Đối tác chiến lược của WorldHotels Elite</li>
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 bg-red-800 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-red-900/20"
                                    >
                                        <Award className="w-4 h-4" /> Xem uy tín CĐT
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 bg-white text-slate-900 border border-slate-200 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-red-800" /> Xem Hồ Sơ Pháp Lý
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Legal Note */}
                        <p className="mt-8 text-center text-slate-400 text-xs font-light italic">
                            * Mọi thông tin pháp lý được công khai minh bạch và sẵn sàng cung cấp tại văn phòng bán hàng.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}