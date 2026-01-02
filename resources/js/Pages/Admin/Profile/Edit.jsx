import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, profile }) {
    // FIX: Gunakan "Safe Navigation" (?. dan || '')
    // Agar jika profile masih kosong (null), form tetap bisa dibuka tanpa error
    const { data, setData, post, processing, errors } = useForm({
        _method: 'Post',
        full_name: profile?.full_name || '',
        headline: profile?.headline || '',
        about: profile?.about || '',
        public_email: profile?.public_email || '',
        linkedin_url: profile?.linkedin_url || '',
        github_url: profile?.github_url || '',
        avatar: null,
        cv: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.profile.update'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Profil Saya</h2>}>
            <Head title="Edit Profile" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        
                        {/* Preview Foto */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                                {/* FIX: Pakai tanda tanya (?) di sini juga */}
                                {profile?.avatar_url ? (
                                    <img src={profile.avatar_url} className="w-full h-full object-cover" alt="Profile" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">No Img</div>
                                )}
                            </div>
                            <div>
                                {/* FIX: Pakai tanda tanya (?) di sini */}
                                <h3 className="text-lg font-bold text-gray-900">{profile?.full_name || 'Nama Belum Diisi'}</h3>
                                <p className="text-gray-500">{profile?.headline || '-'}</p>
                            </div>
                        </div>

                        <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
                                        value={data.full_name} onChange={(e) => setData('full_name', e.target.value)} />
                                    {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Headline / Jabatan</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
                                        value={data.headline} onChange={(e) => setData('headline', e.target.value)} />
                                    {errors.headline && <p className="text-red-500 text-xs mt-1">{errors.headline}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tentang Saya (About)</label>
                                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 h-32"
                                    value={data.about} onChange={(e) => setData('about', e.target.value)}></textarea>
                                {errors.about && <p className="text-red-500 text-xs mt-1">{errors.about}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Publik</label>
                                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
                                        value={data.public_email} onChange={(e) => setData('public_email', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                                    <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
                                        value={data.linkedin_url} onChange={(e) => setData('linkedin_url', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                                    <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500"
                                        value={data.github_url} onChange={(e) => setData('github_url', e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Ganti Foto Profil</label>
                                    <input type="file" className="mt-1 block w-full text-sm text-gray-500"
                                        onChange={(e) => setData('avatar', e.target.files[0])} accept="image/*" />
                                    {errors.avatar && <p className="text-red-500 text-xs mt-1">{errors.avatar}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Upload CV (PDF)</label>
                                    <input type="file" className="mt-1 block w-full text-sm text-gray-500"
                                        onChange={(e) => setData('cv', e.target.files[0])} accept="application/pdf" />
                                    {/* FIX: Pakai tanda tanya (?) */}
                                    {profile?.cv_url && <a href={profile.cv_url} target="_blank" className="text-xs text-indigo-600 underline">Lihat CV Saat Ini</a>}
                                    {errors.cv && <p className="text-red-500 text-xs mt-1">{errors.cv}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t">
                                <button type="submit" disabled={processing} className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-bold">
                                    Simpan Perubahan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}