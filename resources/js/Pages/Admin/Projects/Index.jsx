import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, projects }) {

    // Fungsi untuk menangani penghapusan data
    const handleDelete = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus project ini? Data tidak bisa dikembalikan.')) {
            router.delete(route('admin.projects.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Project</h2>}
        >
            <Head title="Admin Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        {/* Header & Tombol Tambah */}
                        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Daftar Project ({projects.length})
                            </h3>
                            <Link 
                                href={route('admin.projects.create')} 
                                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"
                            >
                                + Tambah Project Baru
                            </Link>
                        </div>

                        {/* Tabel Project */}
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Project
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tech Stack
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projects.length > 0 ? (
                                        projects.map((project) => (
                                            <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        
                                                        {/* Thumbnail Gambar (Diperkecil) */}
                                                        {project.image_url && (
                                                            // UBAH DISINI: h-10 w-10 menjadi h-8 w-8
                                                            <div className="flex-shrink-0 h-8 w-8 mr-3">
                                                                <img 
                                                                    className="h-8 w-8 rounded object-cover border border-gray-200" 
                                                                    src={project.image_url} 
                                                                    alt="" 
                                                                />
                                                            </div>
                                                        )}

                                                        <div className="text-sm font-medium text-gray-900">
                                                            {project.title}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-wrap gap-1">
                                                        {JSON.parse(project.tech_stack).map((tech, index) => (
                                                            <span key={index} className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link 
                                                        href={route('admin.projects.edit', project.id)} 
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4 font-bold"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button 
                                                        onClick={() => handleDelete(project.id)}
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
                                                Belum ada data project. Yuk tambah sekarang!
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