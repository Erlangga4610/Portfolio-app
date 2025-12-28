import { motion } from 'framer-motion';

export default function Certificates({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="certificates" className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 -right-10 w-72 h-72 bg-indigo-900/20 rounded-full blur-3xl" />
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 2 }} className="absolute bottom-1/4 -left-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Sertifikasi & Penghargaan
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Validasi kompetensi profesional dan pencapaian teknis.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // <-- FALSE
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {data.map((cert) => (
                        <motion.div key={cert.id} variants={cardVariants} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                            <div className="h-full bg-gray-900/80 rounded-xl p-6 flex flex-col relative overflow-hidden">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="relative h-12 w-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 text-indigo-400 font-bold text-xl shadow-inner">{cert.issuer[0]}</div>
                                    </div>
                                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-900/30 border border-green-800/50 rounded-full">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Verified</span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">{cert.name}</h3>
                                    <p className="text-sm text-gray-400 mt-2 font-medium">{cert.issuer}</p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                                    <div className="text-xs text-gray-500 font-mono">{new Date(cert.date_issued).toLocaleDateString('id-ID', { year: 'numeric', month: 'short' })}</div>
                                    <a href={cert.credential_url} target="_blank" className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1">Kredensial →</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}