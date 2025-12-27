import { motion } from 'framer-motion';

export default function Hero({ user }) {
    return (
        <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
            
            {/* Dekorasi Background (Glow Effect dengan Animasi Bernafas) */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 20, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                ></motion.div>
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                ></motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Foto Profil dengan Border Glowing (Animasi Pop-Up) */}
                {user.avatar_url && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1 }}
                        className="mb-8 relative inline-block"
                    >
                        <motion.div 
                            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75"
                        ></motion.div>
                        <img 
                            src={user.avatar_url} 
                            alt={user.full_name} 
                            className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-800 shadow-2xl"
                        />
                    </motion.div>
                )}

                <h1 className="text-4xl tracking-tight font-extrabold font-heading text-white sm:text-5xl md:text-6xl mb-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="block xl:inline"
                    >
                        Halo, saya
                    </motion.span>{' '}
                    
                    {/* Teks Nama dengan Efek Gradasi */}
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 xl:inline pb-2"
                    >
                        {user.full_name}
                    </motion.span>
                </h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-2 text-xl text-indigo-200 font-medium"
                >
                    {user.headline}
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-6 max-w-2xl mx-auto text-base text-gray-400 sm:text-lg leading-relaxed"
                >
                    {user.about ? user.about.substring(0, 200) + '...' : ''}
                </motion.p>

                {/* Tombol Aksi (Animasi Slide Up) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects" 
                        className="px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                    >
                        Lihat Karya Saya
                    </motion.a>

                    {user.cv_url && (
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={user.cv_url} 
                            target="_blank"
                            className="px-8 py-3 border border-gray-600 text-base font-bold rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                            Download CV
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </section>
    );
}