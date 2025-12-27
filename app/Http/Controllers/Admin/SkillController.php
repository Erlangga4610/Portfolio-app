<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Whoops\Exception\Frame;

class SkillController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Skills/Index', [
            // Kita urutkan berdasarkan kategori agar rapi
            'skills' => Skill::orderBy('category')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Skills/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|in:Backend,Frontend,Database,Tools,Framework', // Validasi pilihan
        ]);

        Skill::create($request->all());

        return redirect()->route('admin.skills.index');
    }

    public function edit(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill
        ]);
    }

    public function update(Request $request, Skill $skill)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|in:Backend,Frontend,Database,Tools,Framework', // Validasi pilihan
        ]);

        $skill->update($request->all());

        return redirect()->route('admin.skills.index');
    }

    public function destroy(Skill $skill)
    {
        $skill->delete();
        return redirect()->route('admin.skills.index');
    }
}