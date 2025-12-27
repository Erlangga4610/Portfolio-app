// resources/js/Pages/Admin/Certificates/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, certificates }) {

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus sertifikat ini?')) {
            router.delete(route('admin.certificates.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Sertifikat</h2>}
        >
            <Head title="Admin Certificates" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        <div className="mb-6 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-900">Daftar Sertifikat</h3>
                            <Link 
                                href={route('admin.certificates.create')} 
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-semibold"
                            >
                                + Tambah Sertifikat
                            </Link>
                        </div>

                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Sertifikat</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerbit</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {certificates.length > 0 ? (
                                        certificates.map((cert) => (
                                            <tr key={cert.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                                                    <a href={cert.credential_url} target="_blank" className="text-xs text-indigo-500 hover:underline">Lihat Kredensial ↗</a>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{cert.issuer}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {new Date(cert.date_issued).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={route('admin.certificates.edit', cert.id)} className="text-indigo-600 hover:text-indigo-900 mr-4 font-bold">Edit</Link>
                                                    <button onClick={() => handleDelete(cert.id)} className="text-red-600 hover:text-red-900 font-bold">Hapus</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-gray-500">Belum ada sertifikat.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}