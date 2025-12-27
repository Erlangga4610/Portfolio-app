import { motion } from 'framer-motion';

export default function Projects({ data }) {
    // Konfigurasi animasi untuk container (Grid)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Jeda 0.2 detik antar kartu
            },
        },
    };

    // Konfigurasi animasi untuk setiap kartu project
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
            
            {/* Dekorasi Background (Glow Halus dengan Animasi Bernafas) */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Project Unggulan
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-gray-400 max-w-2xl mx-auto"
                    >
                        Koleksi aplikasi dan website yang telah saya bangun dengan dedikasi tinggi.
                    </motion.p>
                </div>
                
                {/* Grid Projects dengan Stagger Effect */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {data.map((project) => (
                        <motion.div 
                            key={project.id} 
                            variants={cardVariants}
                            className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col"
                        >
                            
                            {/* Gambar Project */}
                            <div className="relative h-52 overflow-hidden">
                                {/* Overlay Gelap saat hover */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img 
                                    src={project.image_url} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <h3 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                
                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {JSON.parse(project.tech_stack).map((tech, index) => (
                                        <span key={index} className="px-2.5 py-1 bg-gray-900/50 border border-gray-600 rounded-md text-[10px] font-semibold text-gray-300 uppercase tracking-wide">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-gray-700">
                                    {project.demo_link && (
                                        <a 
                                            href={project.demo_link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
                                        >
                                            {/* Icon External Link */}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            Live Demo
                                        </a>
                                    )}
                                    {project.repo_link && (
                                        <a 
                                            href={project.repo_link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 text-sm font-bold hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all"
                                        >
                                            {/* Icon GitHub */}
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}