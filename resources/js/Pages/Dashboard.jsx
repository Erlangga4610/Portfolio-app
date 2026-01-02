import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard({ auth, counts }) {
    const user = usePage().props.auth.user;

    // Default nilai jika counts belum dikirim dari backend
    const stats = {
        projects: counts?.projects || 0,
        skills: counts?.skills || 0,
        certificates: counts?.certificates || 0
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    {/* --- 1. HERO SECTION (WELCOME) --- */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden text-white relative">
                        <div className="p-8 relative z-10">
                            <h3 className="text-3xl font-bold mb-2">Halo, {user.name}! 👋</h3>
                            <p className="text-indigo-100 text-lg max-w-2xl">
                                Selamat datang di Panel Admin Portfolio Anda. Apa yang ingin Anda kelola hari ini?
                            </p>
                            <div className="mt-6">
                                <Link 
                                    href={route('profile.edit')} 
                                    className="px-6 py-2 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition shadow-md"
                                >
                                    Edit Profil Saya
                                </Link>
                            </div>
                        </div>
                        {/* Dekorasi Background */}
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform translate-x-12"></div>
                    </div>

                    {/* --- 2. STATS CARDS (RINGKASAN DATA) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card Projects */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Projects</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.projects}</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>

                        {/* Card Certificates */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Certificates</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.certificates}</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-full text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                        </div>

                        {/* Card Skills */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Skills</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.skills}</p>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-full text-orange-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* --- 3. QUICK ACTIONS (MENU CEPAT) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Manage Projects */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Kelola Projects</h3>
                            <p className="text-gray-500 mb-6 text-sm">Tambahkan project baru atau update project yang sudah ada.</p>
                            <div className="flex gap-3">
                                <Link href={route('admin.projects.create')} className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition">
                                    + Tambah Baru
                                </Link>
                                <Link href={route('admin.projects.index')} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-200 transition">
                                    Lihat Semua
                                </Link>
                            </div>
                        </div>

                        {/* Manage Skills & Certs */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Skill & Sertifikat</h3>
                            <p className="text-gray-500 mb-6 text-sm">Update kemampuan teknis dan sertifikasi terbaru Anda.</p>
                            <div className="flex gap-3">
                                <Link href={route('admin.skills.index')} className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-bold rounded-lg hover:bg-orange-200 transition">
                                    Skills
                                </Link>
                                <Link href={route('admin.certificates.index')} className="px-4 py-2 bg-green-100 text-green-700 text-sm font-bold rounded-lg hover:bg-green-200 transition">
                                    Certificates
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}