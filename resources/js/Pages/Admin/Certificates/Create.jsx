// resources/js/Pages/Admin/Certificates/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        issuer: '',
        date_issued: '',
        credential_url: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.certificates.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Sertifikat</h2>}>
            <Head title="Add Certificate" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <form onSubmit={submit} className="space-y-6">
                            
                            {/* Nama Sertifikat */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama Sertifikat / Penghargaan</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.name} onChange={(e) => setData('name', e.target.value)} required 
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Penerbit */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Penerbit (Issuer)</label>
                                <input 
                                    type="text" 
                                    placeholder="Contoh: Google, Dicoding, Coursera"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.issuer} onChange={(e) => setData('issuer', e.target.value)} required 
                                />
                                {errors.issuer && <p className="text-red-500 text-xs mt-1">{errors.issuer}</p>}
                            </div>

                            {/* Tanggal */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tanggal Terbit</label>
                                <input 
                                    type="date" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.date_issued} onChange={(e) => setData('date_issued', e.target.value)} required 
                                />
                                {errors.date_issued && <p className="text-red-500 text-xs mt-1">{errors.date_issued}</p>}
                            </div>

                            {/* Link Credential */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Link Verifikasi (URL)</label>
                                <input 
                                    type="url" 
                                    placeholder="https://..."
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.credential_url} onChange={(e) => setData('credential_url', e.target.value)} required 
                                />
                                {errors.credential_url && <p className="text-red-500 text-xs mt-1">{errors.credential_url}</p>}
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <Link href={route('admin.certificates.index')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium">Batal</Link>
                                <button type="submit" disabled={processing} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}