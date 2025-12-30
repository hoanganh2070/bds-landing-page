import { Maximize2, Layers, ChevronRight } from 'lucide-react'; // Thêm icon để card thoáng hơn
import { motion } from 'framer-motion';

export default function ProductCard({ title, subtitle, area, floor, description, index, image }: any) {
    return (
        <motion.div
            variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: { delay: index * 0.1, duration: 0.6 }
                }
            }}
            whileHover={{ y: -12 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(185,28,28,0.15)] transition-all duration-500 border border-slate-50"
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
                {/* Overlay gradient tinh tế */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge Subtitle */}
                <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-red-800 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                        {subtitle}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-8">
                <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-red-800 transition-colors">
                        {title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-light">
                        {description}
                    </p>
                </div>

                {/* Stats Row - Thay đổi để thoáng hơn */}
                <div className="flex items-center gap-6 py-4 border-y border-slate-50 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <Maximize2 className="w-4 h-4 text-red-700" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Diện tích</p>
                            <p className="text-sm font-bold text-slate-800">{area}</p>
                        </div>
                    </div>
                    <div className="w-px h-8 bg-slate-100" />
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <Layers className="w-4 h-4 text-red-700" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Vị trí</p>
                            <p className="text-sm font-bold text-slate-800">{floor}</p>
                        </div>
                    </div>
                </div>

                {/* Button phong cách Luxury */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full group/btn relative flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-red-800 shadow-lg shadow-slate-200 hover:shadow-red-200"
                >
                    <span className="relative z-10">Khám phá chi tiết</span>
                    <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </motion.div>
    );
}