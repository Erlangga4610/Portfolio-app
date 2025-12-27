<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Certificate;
use App\Models\Profile;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // 1. DATA PROJECT (Contoh)
        Project::create([
            'title' => 'Aplikasi Scan Struk OCR',
            'description' => 'Aplikasi berbasis Laravel untuk membaca teks pada struk belanja secara otomatis menggunakan Google Cloud Vision API. Membantu pengguna merekap pengeluaran dengan cepat.',
            'tech_stack' => json_encode(['Laravel', 'Google Vision API', 'MySQL', 'Bootstrap']),
            'image_url' => 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Gambar placeholder
            'demo_link' => 'https://example.com',
            'repo_link' => 'https://github.com/username/scan-struk'
        ]);

        Project::create([
            'title' => 'Personal Portfolio Website',
            'description' => 'Website portfolio modern yang dibangun dengan Laravel dan React (Inertia.js). Memiliki performa tinggi SPA (Single Page Application).',
            'tech_stack' => json_encode(['Laravel', 'React', 'Tailwind CSS', 'Vite']),
            'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80',
            'demo_link' => 'https://portfolio.com',
            'repo_link' => 'https://github.com/username/portfolio'
        ]);

        // 2. DATA SKILLS (Penting untuk Skills.jsx)
        $skills = [
            ['name' => 'PHP', 'category' => 'Backend'],
            ['name' => 'Laravel', 'category' => 'Backend'],
            ['name' => 'Python', 'category' => 'Backend'],
            ['name' => 'React.js', 'category' => 'Frontend'],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend'],
            ['name' => 'MySQL', 'category' => 'Database'],
            ['name' => 'Git / GitHub', 'category' => 'Tools'],
            ['name' => 'Postman', 'category' => 'Tools'],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        // 3. DATA CERTIFICATES
        Certificate::create([
            'name' => 'Belajar Dasar Pemrograman Web',
            'issuer' => 'Dicoding Indonesia',
            'date_issued' => '2024-01-15',
            'credential_url' => 'https://dicoding.com/certificates/XYZ',
            'logo_url' => null
        ]);
        
        Certificate::create([
            'name' => 'React Developer Certificate',
            'issuer' => 'HackerRank',
            'date_issued' => '2024-06-20',
            'credential_url' => 'https://hackerrank.com/certificates/ABC',
            'logo_url' => null
        ]);

        // Tambahkan Data Profile Awal
        Profile::create([
            'full_name' => 'Nama Anda',
            'headline' => 'Web Developer Enthusiast',
            'about' => 'Halo, ini adalah deskripsi singkat tentang saya.',
            'public_email' => 'contact@email.com',
            'linkedin_url' => 'https://linkedin.com',
            'github_url' => 'https://github.com',
            'avatar_url' => null,
            'cv_url' => null,
        ]);
    }
}