import { motion } from 'framer-motion';

export default function About({ user }) {
    return (
        <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
            
            {/* Dekorasi Background: Pattern Titik-titik */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-base text-indigo-400 font-bold tracking-wide uppercase"
                    >
                        Tentang Saya
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                    >
                        Di Balik Baris Kode
                    </motion.p>
                </div>
                
                <div className="mt-4 max-w-4xl mx-auto">
                    {/* Container dengan Gradient Border + Animasi Zoom In */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl"
                    >
                        
                        {/* Inner Card */}
                        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden h-full">
                            
                            {/* Dekorasi: Tanda Kutip Raksasa (Animasi Slide Masuk) */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50, y: -50 }}
                                whileInView={{ opacity: 0.5, x: -24, y: -32 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute top-0 left-0 text-gray-800"
                            >
                                <svg width="150" height="150" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.987 14.941 15.273C15.557 14.559 16.484 14.021 17.722 13.659C16.961 13.344 16.376 12.87 15.968 12.237C15.56 11.604 15.356 10.875 15.356 10.05C15.356 9.098 15.688 8.283 16.353 7.605C17.018 6.927 17.927 6.588 19.08 6.588C20.184 6.588 21.082 6.945 21.774 7.659C22.466 8.373 22.812 9.279 22.812 10.377C22.812 11.967 22.251 13.566 21.129 15.174C20.007 16.782 18.423 18.723 16.377 20.997L14.017 21ZM4.197 21L4.197 18C4.197 16.896 4.505 15.987 5.121 15.273C5.737 14.559 6.664 14.021 7.902 13.659C7.141 13.344 6.556 12.87 6.148 12.237C5.74 11.604 5.536 10.875 5.536 10.05C5.536 9.098 5.868 8.283 6.533 7.605C7.198 6.927 8.107 6.588 9.26 6.588C10.364 6.588 11.262 6.945 11.954 7.659C12.646 8.373 12.992 9.279 12.992 10.377C12.992 11.967 12.431 13.566 11.309 15.174C10.187 16.782 8.603 18.723 6.557 20.997L4.197 21Z" />
                                </svg>
                            </motion.div>

                            {/* Konten Teks */}
                            <div className="relative z-10">
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-2xl font-bold text-white mb-6"
                                >
                                    Halo, saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{user.full_name}</span>.
                                </motion.h3>
                                
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="prose prose-lg prose-invert text-gray-300 leading-loose whitespace-pre-line"
                                >
                                    {user.about || "Deskripsi diri belum ditambahkan. Silakan lengkapi profil Anda melalui Dashboard Admin untuk menampilkan informasi di sini."}
                                </motion.div>

                                {/* Hiasan Garis Bawah (Animasi Memanjang) */}
                                <div className="mt-8 flex items-center gap-2">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 80 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        className="h-1 bg-indigo-500 rounded-full"
                                    ></motion.div>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 20 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        className="h-1 bg-purple-500 rounded-full"
                                    ></motion.div>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 8 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.0 }}
                                        className="h-1 bg-pink-500 rounded-full"
                                    ></motion.div>
                                </div>
                            </div>

                            {/* Glow Effect di Pojok (Animasi Bernafas) */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}