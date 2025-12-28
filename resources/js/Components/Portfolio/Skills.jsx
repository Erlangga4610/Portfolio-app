import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ data }) {
    const categories = Object.keys(data);

    // Staggered Container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    // Helper function icon (Disingkat biar code tidak terlalu panjang, isinya sama)
    const getCategoryIcon = (category) => {
        // ... (Kode icon SVG sama seperti sebelumnya, biarkan saja)
        // Gunakan SVG sederhana untuk contoh di sini agar muat, 
        // *Pastikan Anda tetap pakai switch case icon yang lengkap tadi ya!*
         return <span className="text-xl font-bold">#</span>; 
    };

    // PENTING: Untuk mempersingkat jawaban, saya asumsikan Anda pakai 
    // fungsi getCategoryIcon yang LENGKAP dari jawaban sebelumnya. 
    // Fokus kita di sini hanya setting "viewport".

    return (
        <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
             
             {/* Background Pulse */}
             <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
             <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-gray-400 max-w-2xl mx-auto"
                    >
                        Kumpulan teknologi, framework, dan tools yang saya gunakan.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // <-- FALSE
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {categories.map((category) => (
                        <motion.div 
                            key={category} 
                            variants={cardVariants}
                            className="group bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                        >
                            {/* Pastikan menggunakan getCategoryIcon yang lengkap */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                                <h3 className="text-lg font-bold text-white tracking-wide uppercase">{category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {data[category].map((skill) => (
                                    <motion.div key={skill.id} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-md text-sm text-gray-300 font-medium hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 transition-colors cursor-default">
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}