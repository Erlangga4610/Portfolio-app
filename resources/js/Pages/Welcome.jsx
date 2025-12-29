import { Head } from '@inertiajs/react';
// Import Navbar
import Navbar from '@/Components/Portfolio/Navbar'; 
import Hero from '@/Components/Portfolio/Hero';
import About from '@/Components/Portfolio/About';
import Projects from '@/Components/Portfolio/Projects';
import Skills from '@/Components/Portfolio/Skills';
import Certificates from '@/Components/Portfolio/Certificates';
import Contact from '@/Components/Portfolio/Contact';
import ScrollToTop from '@/Components/Portfolio/ScrollToTop';

export default function Welcome({ projects, skills, certificates, user }) {
    // Pencegahan error jika data user belum ada
    if (!user) return <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">Loading data...</div>;

    return (
        <>
            <Head title={`Portfolio ${user.full_name}`} />
            
            <div className="bg-gray-900 text-gray-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
                
                {/* 1. Pasang Navbar disini (Sticky di atas) */}
                <Navbar user={user} />

                <Hero user={user} />
                
                <div className="bg-gray-800">
                    <About user={user} />
                </div>

                <Projects data={projects} />

                <div className="bg-gray-800">
                    <Skills data={skills} />
                </div>

                <Certificates data={certificates} />

                {/* Di dalam Contact ini sudah ada Footer Copyright, jadi footer manual dibawah saya hapus */}
                <Contact user={user} />
                
                <ScrollToTop />
            </div>
        </>
    );
}