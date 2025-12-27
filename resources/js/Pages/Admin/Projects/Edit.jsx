import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ auth, project }) {
    // Parse tech_stack dari JSON string ke string biasa (koma separated)
    const initialTechStack = JSON.parse(project.tech_stack).join(', ');

    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT', // Penting: Trik agar Laravel membacanya sebagai PUT request via POST
        title: project.title,
        description: project.description,
        tech_stack: initialTechStack,
        image: null, 
        demo_link: project.demo_link || '',
        repo_link: project.repo_link || '',
    });

    const submit = (e) => {
        e.preventDefault();
        // Menggunakan post() karena inertia tidak mendukung file upload via put() secara native
        post(route('admin.projects.update', project.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Project</h2>}
        >
            <Head title={`Edit ${project.title}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        
                        <div className="mb-6 border-b pb-4">
                            <h3 className="text-lg font-medium text-gray-900">Formulir Perubahan Data</h3>
                            <p className="text-sm text-gray-500">Silakan ubah informasi project di bawah ini.</p>
                        </div>

                        <form onSubmit={submit} encType="multipart/form-data" className="space-y-6">
                            
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Judul Project</label>
                                <input 
                                    type="text" 
                                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Masukkan nama project..."
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                                <textarea 
                                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-32"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Jelaskan detail project dan masalah yang diselesaikan..."
                                ></textarea>
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
                                <input 
                                    type="text" 
                                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    value={data.tech_stack}
                                    onChange={(e) => setData('tech_stack', e.target.value)}
                                    placeholder="Contoh: Laravel, React, Tailwind CSS (Pisahkan dengan koma)"
                                />
                                <p className="text-xs text-gray-500 mt-1">Pisahkan setiap teknologi dengan tanda koma.</p>
                                {errors.tech_stack && <p className="text-red-500 text-xs mt-1">{errors.tech_stack}</p>}
                            </div>

                            {/* Image Upload Section */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gambar Sampul</label>
                                
                                <div className="flex items-start gap-6">
                                    {/* Current Image Preview */}
                                    <div className="flex-shrink-0">
                                        <p className="text-xs text-gray-500 mb-1">Gambar Saat Ini:</p>
                                        <img 
                                            src={project.image_url} 
                                            alt="Current Project" 
                                            className="w-32 h-20 object-cover rounded-md border border-gray-300 shadow-sm"
                                        />
                                    </div>

                                    {/* Upload New Image */}
                                    <div className="flex-grow">
                                        <p className="text-xs text-gray-500 mb-1">Ganti Gambar (Opsional):</p>
                                        <input 
                                            type="file" 
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            accept="image/*"
                                        />
                                        <p className="text-xs text-gray-400 mt-1">Biarkan kosong jika tidak ingin mengubah gambar.</p>
                                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Links Group */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Demo Link (URL)</label>
                                    <input 
                                        type="url" 
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.demo_link} 
                                        onChange={(e) => setData('demo_link', e.target.value)}
                                        placeholder="https://example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Repository Link (GitHub)</label>
                                    <input 
                                        type="url" 
                                        className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.repo_link} 
                                        onChange={(e) => setData('repo_link', e.target.value)}
                                        placeholder="https://github.com/username/repo"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-4 pt-4 border-t">
                                <Link 
                                    href={route('admin.projects.index')}
                                    className="text-sm text-gray-600 hover:text-gray-900 font-medium underline decoration-gray-300 underline-offset-4"
                                >
                                    Batal & Kembali
                                </Link>

                                <button 
                                    type="submit" 
                                    disabled={processing} 
                                    className={`inline-flex items-center px-6 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white tracking-widest hover:bg-indigo-700 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150 ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}