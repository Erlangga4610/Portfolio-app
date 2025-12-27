<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    // Hanya menampilkan halaman Edit, karena profil cuma 1
    public function edit()
    {
        // Ambil data profil pertama
        $profile = Profile::first(); 
        return Inertia::render('Admin/Profile/Edit', [
            'profile' => $profile
        ]);
    }

    public function update(Request $request)
    {
        $profile = Profile::first();

        $request->validate([
            'full_name' => 'required|string|max:255',
            'headline' => 'required|string|max:255',
            'about' => 'required|string',
            'public_email' => 'required|email',
            'avatar' => 'nullable|image|max:2048', // Validasi Foto
            'cv' => 'nullable|mimes:pdf|max:2048', // Validasi PDF
        ]);

        $data = $request->except(['avatar', 'cv']);

        // Upload Avatar Baru
        if ($request->hasFile('avatar')) {
            if ($profile->avatar_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->avatar_url));
            }
            $path = $request->file('avatar')->store('profile', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        // Upload CV Baru
        if ($request->hasFile('cv')) {
            if ($profile->cv_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->cv_url));
            }
            $path = $request->file('cv')->store('cv', 'public');
            $data['cv_url'] = '/storage/' . $path;
        }

        $profile->update($data);

        return redirect()->back(); // Tetap di halaman edit setelah save
    }
}