<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Certificate;
use App\Models\Profile; 
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        // 1. Ambil data Profil dari Database
        $profile = Profile::first();

        // (Opsional) Jika profil belum dibuat, pakai data dummy agar tidak error
        if (!$profile) {
            $profile = [
                'full_name' => 'Nama Belum Diatur',
                'headline' => 'Silakan atur profil di Admin Dashboard',
                'about' => 'Deskripsi belum diisi.',
                'public_email' => 'email@example.com',
                'linkedin_url' => '#',
                'github_url' => '#',
                'avatar_url' => null,
                'cv_url' => null,
            ];
        }

        return Inertia::render('Welcome', [
            'projects' => Project::all(),
            'skills' => Skill::all()->groupBy('category'),
            'certificates' => Certificate::orderBy('date_issued', 'desc')->get(),
            'user' => $profile, // Kirim data profil asli
        ]);
    }
}