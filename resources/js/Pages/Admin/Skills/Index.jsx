import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, skills }) {

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus skill ini?')) {
            router.delete(route('admin.skills.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Skills</h2>}
        >
            <Head title="Admin Skills" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        {/* Header & Tombol Tambah */}
                        <div className="mb-6 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-900">Daftar Keahlian</h3>
                            <Link 
                                href={route('admin.skills.create')} 
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-semibold"
                            >
                                + Tambah Skill
                            </Link>
                        </div>

                        {/* Tabel Skills */}
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Skill</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {skills.length > 0 ? (
                                        skills.map((skill) => (
                                            <tr key={skill.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 font-medium text-gray-900">{skill.name}</td>
                                                <td className="px-6 py-4">
                                                    {/* Badge Warna-warni sesuai Kategori */}
                                                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                                                        skill.category === 'Backend' ? 'bg-red-100 text-red-800' :
                                                        skill.category === 'Frontend' ? 'bg-blue-100 text-blue-800' :
                                                        skill.category === 'Database' ? 'bg-yellow-100 text-yellow-800' :
                                                        skill.category === 'Framework' ? 'bg-purple-100 text-purple-800' : // <-- WARNA UNGU UNTUK FRAMEWORK
                                                        'bg-gray-100 text-gray-800' // Tools/Lainnya jadi abu-abu
                                                    }`}>
                                                        {skill.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right text-sm font-medium">
                                                    <Link 
                                                        href={route('admin.skills.edit', skill.id)} 
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4 font-bold"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button 
                                                        onClick={() => handleDelete(skill.id)} 
                                                        className="text-red-600 hover:text-red-900 font-bold"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-10 text-center text-gray-500">
                                                Belum ada skill yang ditambahkan.
                                            </td>
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