import { Head } from '@inertiajs/react';
import Hero from '@/Components/Portfolio/Hero';
import About from '@/Components/Portfolio/About';
import Projects from '@/Components/Portfolio/Projects';
import Skills from '@/Components/Portfolio/Skills';
import Certificates from '@/Components/Portfolio/Certificates';
import Contact from '@/Components/Portfolio/Contact';

export default function Welcome({ projects, skills, certificates, user }) {
    // Pencegahan error jika data user belum ada
    if (!user) return <div className="text-white text-center py-20">Loading data...</div>;

    return (
        <>
            <Head title={`Portfolio ${user.full_name}`} />
            
            {/* UBAH DISINI: Background jadi gelap (gray-900) dan teks jadi terang (gray-100) */}
            <div className="bg-gray-900 text-gray-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
                
                <Hero user={user} />
                
                {/* Kita beri sedikit variasi warna background di setiap section agar tidak bosan */}
                <div className="bg-gray-800">
                    <About user={user} />
                </div>

                <Projects data={projects} />

                <div className="bg-gray-800">
                    <Skills data={skills} />
                </div>

                <Certificates data={certificates} />

                <Contact user={user} />
                
                <footer className="bg-black text-gray-500 py-8 text-center border-t border-gray-800">
                    <p>&copy; {new Date().getFullYear()} {user.full_name}. Built with Laravel & React.</p>
                </footer>
            </div>
        </>
    );
}