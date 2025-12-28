import { motion } from 'framer-motion';

export default function Projects({ data }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-extrabold text-white sm:text-4xl"
                    >
                        Project Unggulan
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }} // <-- FALSE
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-gray-400 max-w-2xl mx-auto"
                    >
                        Koleksi aplikasi dan website yang telah saya bangun.
                    </motion.p>
                </div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // <-- FALSE
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {data.map((project) => (
                        <motion.div 
                            key={project.id} 
                            variants={cardVariants}
                            className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <h3 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {JSON.parse(project.tech_stack).map((tech, index) => (
                                        <span key={index} className="px-2.5 py-1 bg-gray-900/50 border border-gray-600 rounded-md text-[10px] font-semibold text-gray-300 uppercase tracking-wide">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-gray-700">
                                    {project.demo_link && (
                                        <a href={project.demo_link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors">Live Demo</a>
                                    )}
                                    {project.repo_link && (
                                        <a href={project.repo_link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 text-sm font-bold hover:bg-gray-700 hover:text-white transition-all">GitHub</a>
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