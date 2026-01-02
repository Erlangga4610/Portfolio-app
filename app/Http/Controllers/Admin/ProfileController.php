<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Menampilkan halaman form.
     * Jika data sudah ada, jadi form Edit. Jika belum, jadi form Create.
     */
    public function edit()
    {
        $profile = Profile::first();
        
        return Inertia::render('Admin/Profile/Edit', [
            'profile' => $profile
        ]);
    }

    /**
     * UPDATE: Mengubah data profile yang sudah ada.
     */
    public function update(Request $request)
    {
        $profile = Profile::first();

        // Jika profile belum ada, lempar ke method store saja (opsional)
        if (!$profile) {
            return $this->store($request);
        }

        $request->validate([
            'full_name' => 'required|string|max:255',
            'headline' => 'required|string|max:255',
            'about' => 'required|string',
            'public_email' => 'required|email',
            'linkedin_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'avatar' => 'nullable|image|max:2048',
            'cv' => 'nullable|mimes:pdf|max:2048',
        ]);

        $data = $request->except(['avatar', 'cv']);

        // Upload Avatar Baru & Hapus Lama
        if ($request->hasFile('avatar')) {
            if ($profile->avatar_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->avatar_url));
            }
            $path = $request->file('avatar')->store('profile', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        // Upload CV Baru & Hapus Lama
        if ($request->hasFile('cv')) {
            if ($profile->cv_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->cv_url));
            }
            $path = $request->file('cv')->store('cv', 'public');
            $data['cv_url'] = '/storage/' . $path;
        }

        $profile->update($data);

        return Redirect::back();
    }

    /**
     * STORE: Membuat data profile baru (Hanya jika belum ada).
     */
    public function store(Request $request)
    {
        // Cek agar tidak ada double profile (karena konsepnya single profile)
        if (Profile::count() > 0) {
            return Redirect::back()->withErrors(['msg' => 'Profile sudah ada. Silahkan edit yang sudah ada.']);
        }

        $request->validate([
            'full_name' => 'required|string|max:255',
            'headline' => 'required|string|max:255',
            'about' => 'required|string',
            'public_email' => 'required|email',
            'linkedin_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'avatar' => 'nullable|image|max:2048',
            'cv' => 'nullable|mimes:pdf|max:2048',
        ]);

        $data = $request->except(['avatar', 'cv']);

        // Proses Upload Avatar (Baru)
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('profile', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        // Proses Upload CV (Baru)
        if ($request->hasFile('cv')) {
            $path = $request->file('cv')->store('cv', 'public');
            $data['cv_url'] = '/storage/' . $path;
        }

        // Simpan ke Database
        Profile::create($data);

        return Redirect::back();
    }
}