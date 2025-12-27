<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PortfolioController;

// Group Route khusus Admin (Harus Login & Verified)
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\CertificateController; 
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\ProfileController;

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // ... route project, certificate, skill ...

    // Route Profile (Hanya Edit & Update)
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('projects', ProjectController::class);
    Route::resource('certificates', CertificateController::class);
    
    // Route Skills (BARU)
    Route::resource('skills', SkillController::class);
});

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // Route Project (Sudah ada)
    Route::resource('projects', ProjectController::class);
    
    // Route Certificate (BARU)
    Route::resource('certificates', CertificateController::class);
});

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    // Route untuk CRUD Project
    // Contoh URL: /admin/projects
    Route::resource('projects', ProjectController::class);
});

Route::get('/', [PortfolioController::class, 'index']);

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
*/

// --- Route Dashboard & Login (Biarkan saja untuk nanti fitur Admin) ---
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';