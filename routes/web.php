<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// --- 1. CONTROLLER PUBLIK ---
use App\Http\Controllers\PortfolioController;

// --- 2. CONTROLLER ADMIN (Untuk Portfolio: Foto, CV, Headline) ---
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\CertificateController; 
use App\Http\Controllers\Admin\SkillController;

// --- 3. CONTROLLER USER (Untuk Akun: Nama, Email, Hapus Akun) ---
use App\Http\Controllers\ProfileController as UserProfileController;

/*
|--------------------------------------------------------------------------
| HALAMAN PUBLIK
|--------------------------------------------------------------------------
*/
Route::get('/', [PortfolioController::class, 'index'])->name('home');

/*
|--------------------------------------------------------------------------
| DASHBOARD
|--------------------------------------------------------------------------
*/
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'counts' => [
            'projects' => \App\Models\Project::count(),
            'skills' => \App\Models\Skill::count(),
            'certificates' => \App\Models\Certificate::count(),
        ]
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| GROUP ADMIN (Portfolio Management)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // CRUD Resources
    Route::resource('projects', ProjectController::class);
    Route::resource('certificates', CertificateController::class);
    Route::resource('skills', SkillController::class);

    // Update Data Portfolio (Foto, CV, Headline)
    // FIX: Nama route disederhanakan agar cocok dengan React "route('admin.profile.update')"
    Route::post('/profile', [AdminProfileController::class, 'update'])->name('profile.update'); 
});

/*
|--------------------------------------------------------------------------
| GROUP USER SETTINGS (Nama, Email, Password, Delete Akun)
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    
    // Menampilkan Halaman Edit (Pinjam tampilan dari Admin Controller agar lengkap)
    Route::get('/profile', [AdminProfileController::class, 'edit'])->name('profile.edit');

    // Update Nama & Email (Pakai Controller User Biasa) -> route('profile.update')
    Route::patch('/profile', [UserProfileController::class, 'update'])->name('profile.update');
    
    // Hapus Akun
    Route::delete('/profile', [UserProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';