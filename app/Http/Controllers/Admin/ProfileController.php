<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Contracts\Auth\MustVerifyEmail; // Tambahan
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function edit(Request $request)
    {
        $profile = Profile::first();
        
        // Kita kirim data Profile Portfolio + Data User (Status Email)
        return Inertia::render('Admin/Profile/Edit', [
            'profile' => $profile,
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    // ... (Function update dan store biarkan sama seperti sebelumnya) ...
    public function update(Request $request)
    {
        $profile = Profile::first();
        if (!$profile) { return $this->store($request); }

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

        if ($request->hasFile('avatar')) {
            if ($profile->avatar_url) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->avatar_url));
            }
            $path = $request->file('avatar')->store('profile', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

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

    public function store(Request $request)
    {
        if (Profile::count() > 0) { return Redirect::back(); }

        $request->validate([
            'full_name' => 'required|string|max:255',
            'headline' => 'required|string|max:255',
            'about' => 'required|string',
            'public_email' => 'required|email',
            'avatar' => 'nullable|image|max:2048',
            'cv' => 'nullable|mimes:pdf|max:2048',
        ]);

        $data = $request->except(['avatar', 'cv']);

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('profile', 'public');
            $data['avatar_url'] = '/storage/' . $path;
        }

        if ($request->hasFile('cv')) {
            $path = $request->file('cv')->store('cv', 'public');
            $data['cv_url'] = '/storage/' . $path;
        }

        Profile::create($data);
        return Redirect::back();
    }
}