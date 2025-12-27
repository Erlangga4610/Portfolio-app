import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ auth, skill }) {
    const { data, setData, put, processing, errors } = useForm({
        name: skill.name,
        category: skill.category,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.skills.update', skill.id));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Skill</h2>}>
            <Head title="Edit Skill" />
            <div className="py-12">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nama Skill</label>
                                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kategori</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.category} onChange={(e) => setData('category', e.target.value)}>
                                    <option value="Backend">Backend</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Database">Database</option>
                                    <option value="Tools">Tools</option>
                                    <option value="Framework">Framework</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-4 pt-4 border-t">
                                <Link href={route('admin.skills.index')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Batal</Link>
                                <button type="submit" disabled={processing} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}