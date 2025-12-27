import { motion } from 'framer-motion';

export default function Contact({ user }) {
    // Variabel animasi untuk tombol muncul satu per satu
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Jeda 0.2 detik antar tombol
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
            
            {/* Dekorasi Background (Glow Sentral dengan Animasi Bernafas) */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Kartu Utama Glassmorphism dengan Animasi Muncul */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-gray-700 shadow-2xl relative overflow-hidden text-center"
                >
                    
                    {/* Hiasan Garis Atas Glowing */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70"></div>

                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                        Mari Bekerja Sama
                    </h2>
                    
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Apakah Anda memiliki ide proyek menarik, peluang karir, atau sekadar ingin berdiskusi tentang teknologi? 
                        Saya selalu terbuka untuk terhubung dengan Anda.
                    </p>
                    
                    {/* Container Tombol dengan Stagger Effect */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        
                        {/* 1. Tombol Email */}
                        {user.public_email && (
                            <motion.a 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={`mailto:${user.public_email}`} 
                                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-bold shadow-lg hover:shadow-indigo-500/40 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full"></div>
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>Kirim Email</span>
                            </motion.a>
                        )}

                        {/* 2. Tombol LinkedIn */}
                        {user.linkedin_url && (
                            <motion.a 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={user.linkedin_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group inline-flex items-center px-8 py-4 border border-gray-600 bg-gray-900/50 rounded-full text-gray-300 font-bold hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 shadow-lg hover:shadow-[#0A66C2]/30"
                            >
                                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </motion.a>
                        )}

                        {/* 3. Tombol GitHub */}
                        {user.github_url && (
                            <motion.a 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={user.github_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group inline-flex items-center px-8 py-4 border border-gray-600 bg-gray-900/50 rounded-full text-gray-300 font-bold hover:border-white hover:bg-white hover:text-black transition-colors duration-300 shadow-lg hover:shadow-white/20"
                            >
                                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>
                
                {/* Copyright Sederhana di bawah kartu */}
                <div className="text-center mt-12 text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} {user.full_name}. Built with Laravel & React.
                </div>
            </div>
        </section>
    );
}