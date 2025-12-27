<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::all()
        ]);
    }

    // 1. Menampilkan Form Tambah
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    // 2. Menyimpan Data ke Database
    public function store(Request $request)
    {
        // Validasi Input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string', // Input berupa string "Laravel, React"
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Wajib upload gambar
            'demo_link' => 'nullable|url',
            'repo_link' => 'nullable|url',
        ]);

        // Upload Gambar
        $imagePath = null;
        if ($request->hasFile('image')) {
            // Simpan ke folder 'public/projects' dan ambil path-nya
            $path = $request->file('image')->store('projects', 'public');
            $imagePath = '/storage/' . $path;
        }

        // Ubah "Laravel, React" menjadi JSON ["Laravel", "React"]
        $techStackArray = array_map('trim', explode(',', $request->tech_stack));

        // Simpan ke Database
        Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'tech_stack' => json_encode($techStackArray),
            'image_url' => $imagePath,
            'demo_link' => $request->demo_link,
            'repo_link' => $request->repo_link,
        ]);

        return redirect()->route('admin.projects.index');
    }

    //3. menampilkan form edit
    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project
        ]);
    }

    //4. memproses Update Data
    public function update(Request $request, Project $project)
    {
        // Validasi Input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'demo_link' => 'nullable|url',
            'repo_link' => 'nullable|url',
        ]);

        // Upload Gambar jika ada
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($project->image_url) {
                $oldImagePath = str_replace('/storage/', '', $project->image_url);
                Storage::disk('public')->delete($oldImagePath);
            }

            // Simpan gambar baru
            $path = $request->file('image')->store('projects', 'public');
            $project->image_url = '/storage/' . $path;
        }

        // Ubah "Laravel, React" menjadi JSON ["Laravel", "React"]
        $techStackArray = array_map('trim', explode(',', $request->tech_stack));

        // Update Data
        $project->update([
            'title' => $request->title,
            'description' => $request->description,
            'tech_stack' => json_encode($techStackArray),
            'demo_link' => $request->demo_link,
            'repo_link' => $request->repo_link,
        ]);

        return redirect()->route('admin.projects.index');
    }

    //5. menghapus data
    public function destroy(Project $project)
    {
        // Hapus gambar dari storage jika ada
        if ($project->image_url) {
            $oldImagePath = str_replace('/storage/', '', $project->image_url);
            Storage::disk('public')->delete($oldImagePath); 
        }

        // Hapus data project
        $project->delete();

        return redirect()->route('admin.projects.index');
    }
}