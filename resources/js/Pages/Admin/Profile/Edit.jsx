import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useRef } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ auth, profile, mustVerifyEmail, status }) {
    
    // ==========================================
    // 1. LOGIC FORM PORTFOLIO (FOTO, CV, DLL)
    // ==========================================
    const portfolioForm = useForm({
        _method: 'POST', // Wajib POST karena ada file upload
        full_name: profile?.full_name || '',
        headline: profile?.headline || '',
        about: profile?.about || '',
        public_email: profile?.public_email || '',
        linkedin_url: profile?.linkedin_url || '',
        github_url: profile?.github_url || '',
        avatar: null,
        cv: null,
    });

    const submitPortfolio = (e) => {
        e.preventDefault();
        // PENTING: Route ini harus 'admin.profile.update' sesuai web.php
        portfolioForm.post(route('admin.profile.update'), { 
            preserveScroll: true,
            onSuccess: () => console.log("Portfolio Updated!"),
        });
    };

    // ==========================================
    // 2. LOGIC FORM AKUN (NAMA & EMAIL LOGIN)
    // ==========================================
    const userForm = useForm({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submitUser = (e) => {
        e.preventDefault();
        // PENTING: Route ini 'profile.update' (tanpa admin)
        userForm.patch(route('profile.update'), { 
            preserveScroll: true,
        });
    };

    // ==========================================
    // 3. LOGIC FORM PASSWORD
    // ==========================================
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submitPassword = (e) => {
        e.preventDefault();
        passwordForm.put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => passwordForm.reset(),
            onError: (errors) => {
                if (errors.password) {
                    passwordForm.reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }
                if (errors.current_password) {
                    passwordForm.reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Profil Lengkap</h2>}
        >
            <Head title="Edit Profile" />

            <div className="py-12 space-y-8">
                
                {/* ---------------------------------------------------
                    BAGIAN 1: DATA PORTFOLIO (YANG TAMPIL DI WEB)
                   --------------------------------------------------- */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <header className="mb-6 border-b pb-4">
                            <h2 className="text-lg font-medium text-gray-900">Data Portfolio</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                Ini data yang akan dilihat orang lain di website portfolio kamu.
                            </p>
                        </header>

                        {/* Preview Foto */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                                {profile?.avatar_url ? (
                                    <img src={profile.avatar_url} className="w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Img</div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{profile?.full_name || 'Nama Belum Diisi'}</h3>
                                <p className="text-gray-500 text-sm">{profile?.headline || '-'}</p>
                            </div>
                        </div>

                        <form onSubmit={submitPortfolio} encType="multipart/form-data" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel value="Nama Lengkap (Portfolio)" />
                                    <TextInput className="mt-1 block w-full" value={portfolioForm.data.full_name} onChange={(e) => portfolioForm.setData('full_name', e.target.value)} />
                                    <InputError message={portfolioForm.errors.full_name} className="mt-1" />
                                </div>
                                <div>
                                    <InputLabel value="Headline / Jabatan" />
                                    <TextInput className="mt-1 block w-full" value={portfolioForm.data.headline} onChange={(e) => portfolioForm.setData('headline', e.target.value)} />
                                    <InputError message={portfolioForm.errors.headline} className="mt-1" />
                                </div>
                            </div>

                            <div>
                                <InputLabel value="Tentang Saya (About)" />
                                <textarea className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-32"
                                    value={portfolioForm.data.about} onChange={(e) => portfolioForm.setData('about', e.target.value)}></textarea>
                                <InputError message={portfolioForm.errors.about} className="mt-1" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <InputLabel value="Email Publik" />
                                    <TextInput type="email" className="mt-1 block w-full" value={portfolioForm.data.public_email} onChange={(e) => portfolioForm.setData('public_email', e.target.value)} />
                                </div>
                                <div>
                                    <InputLabel value="LinkedIn URL" />
                                    <TextInput type="url" className="mt-1 block w-full" value={portfolioForm.data.linkedin_url} onChange={(e) => portfolioForm.setData('linkedin_url', e.target.value)} />
                                </div>
                                <div>
                                    <InputLabel value="GitHub URL" />
                                    <TextInput type="url" className="mt-1 block w-full" value={portfolioForm.data.github_url} onChange={(e) => portfolioForm.setData('github_url', e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                                <div>
                                    <InputLabel value="Ganti Foto Profil" />
                                    <input type="file" className="mt-1 block w-full text-sm text-gray-500" onChange={(e) => portfolioForm.setData('avatar', e.target.files[0])} accept="image/*" />
                                    <InputError message={portfolioForm.errors.avatar} className="mt-1" />
                                </div>
                                <div>
                                    <InputLabel value="Upload CV (PDF)" />
                                    <input type="file" className="mt-1 block w-full text-sm text-gray-500" onChange={(e) => portfolioForm.setData('cv', e.target.files[0])} accept="application/pdf" />
                                    {profile?.cv_url && <a href={profile.cv_url} target="_blank" className="text-xs text-indigo-600 underline">Lihat CV Saat Ini</a>}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={portfolioForm.processing}>Simpan Portfolio</PrimaryButton>
                                <Transition show={portfolioForm.recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                    <p className="text-sm text-gray-600">Tersimpan.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>

                {/* ---------------------------------------------------
                    BAGIAN 2 & 3: AKUN & PASSWORD (GRID)
                   --------------------------------------------------- */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* --- FORM UPDATE INFO LOGIN --- */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Akun Login</h2>
                            <p className="mt-1 text-sm text-gray-600">Update nama akun dan email untuk login.</p>
                        </header>

                        <form onSubmit={submitUser} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Nama Akun" />
                                <TextInput id="name" className="mt-1 block w-full" value={userForm.data.name} onChange={(e) => userForm.setData('name', e.target.value)} required />
                                <InputError message={userForm.errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email Login" />
                                <TextInput id="email" type="email" className="mt-1 block w-full" value={userForm.data.email} onChange={(e) => userForm.setData('email', e.target.value)} required />
                                <InputError message={userForm.errors.email} className="mt-2" />
                            </div>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={userForm.processing} className="bg-gray-800">Update Akun</PrimaryButton>
                                <Transition show={userForm.recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                    <p className="text-sm text-gray-600">Tersimpan.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>

                    {/* --- FORM UPDATE PASSWORD --- */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Ganti Password</h2>
                            <p className="mt-1 text-sm text-gray-600">Pastikan akun aman dengan password kuat.</p>
                        </header>

                        <form onSubmit={submitPassword} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="current_password" value="Password Lama" />
                                <TextInput id="current_password" ref={currentPasswordInput} value={passwordForm.data.current_password} onChange={(e) => passwordForm.setData('current_password', e.target.value)} type="password" className="mt-1 block w-full" />
                                <InputError message={passwordForm.errors.current_password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password" value="Password Baru" />
                                <TextInput id="password" ref={passwordInput} value={passwordForm.data.password} onChange={(e) => passwordForm.setData('password', e.target.value)} type="password" className="mt-1 block w-full" />
                                <InputError message={passwordForm.errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
                                <TextInput id="password_confirmation" value={passwordForm.data.password_confirmation} onChange={(e) => passwordForm.setData('password_confirmation', e.target.value)} type="password" className="mt-1 block w-full" />
                            </div>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={passwordForm.processing} className="bg-red-600 hover:bg-red-500">Ganti Password</PrimaryButton>
                                <Transition show={passwordForm.recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0" leave="transition ease-in-out" leaveTo="opacity-0">
                                    <p className="text-sm text-gray-600">Tersimpan.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}