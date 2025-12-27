import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    // Setup state form
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        tech_stack: '', // User ngetik manual dipisah koma
        image: null,
        demo_link: '',
        repo_link: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.projects.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Project Baru</h2>}
        >
            <Head title="Create Project" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        
                        <form onSubmit={submit} encType="multipart/form-data">
                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Judul Project</label>
                                <input 
                                    type="text" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                {errors.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Deskripsi & Masalah yang Diselesaikan</label>
                                <textarea 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                ></textarea>
                                {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Tech Stack (Pisahkan dengan koma)</label>
                                <input 
                                    type="text" 
                                    placeholder="Contoh: Laravel, React, MySQL"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={data.tech_stack}
                                    onChange={(e) => setData('tech_stack', e.target.value)}
                                />
                                {errors.tech_stack && <div className="text-red-500 text-xs mt-1">{errors.tech_stack}</div>}
                            </div>

                            {/* Image Upload */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Gambar Project</label>
                                <input 
                                    type="file" 
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                {errors.image && <div className="text-red-500 text-xs mt-1">{errors.image}</div>}
                            </div>

                            {/* Links */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Demo Link (URL)</label>
                                    <input 
                                        type="url" 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={data.demo_link}
                                        onChange={(e) => setData('demo_link', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Repository / GitHub (URL)</label>
                                    <input 
                                        type="url" 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={data.repo_link}
                                        onChange={(e) => setData('repo_link', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex items-center justify-end">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Project'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}