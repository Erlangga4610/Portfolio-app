# 🚀 Portfolio App

Aplikasi website portfolio pribadi yang modern, dinamis, dan responsif. Dibangun menggunakan Laravel + Inertia.js + React + Tailwind CSS.  
Dirancang sebagai SPA (Single Page Application) untuk menampilkan profil, skill, project, dan sertifikat dengan performa tinggi, serta dilengkapi halaman Admin untuk mengelola konten.

---

## 🛠️ Tech Stack

- Backend: Laravel 10/11 (PHP)
- Frontend: React.js + Inertia.js
- Styling: Tailwind CSS
- Database: MySQL
- Build tool: Vite
- Storage: Laravel Filesystem (public disk)

---

## ✨ Fitur Utama

### Halaman Publik
- Hero section (foto & intro)
- Project showcase dengan detail teknologi
- Skills (kategori: Backend, Frontend, Tools)
- Certificates / Sertifikat
- Download CV / Resume

### Halaman Admin (CMS)
- Profile management (foto, headline, bio, upload CV)
- Project CRUD (create / read / update / delete)
- File upload & manajemen gambar project
- Keamanan dasar dan otentikasi admin

---

## Prasyarat

Pastikan sistem kamu telah menginstal:
- PHP 8.1+ (sesuai requirement Laravel)
- Composer
- Node.js 16+ / npm atau yarn
- MySQL (atau MariaDB)
- Git

(Opsi: Laravel Sail jika ingin environment Docker-ready.)

---

## ⚙️ Instalasi & Menjalankan (Local)

Ikuti langkah-langkah berikut untuk menjalankan proyek di localhost.

1. Clone repository
```bash
git clone https://github.com/Erlangga4610/Portfolio-app.git
cd Portfolio-app
```

2. Install dependencies (backend & frontend)
```bash
# PHP dependencies
composer install

# Node dependencies
npm install
# atau jika pakai yarn
# yarn
```

3. Setup environment
```bash
cp .env.example .env
php artisan key:generate
```
Edit file `.env` lalu sesuaikan konfigurasi database:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_kamu
DB_USERNAME=root
DB_PASSWORD=
```

4. Migrasi database & seeding
```bash
php artisan migrate:fresh --seed
```
(Perintah di atas akan menghapus data lama, gunakan `migrate` biasa jika ingin aman.)

5. Link storage
```bash
php artisan storage:link
```

6. (Opsional) Buat akun admin lewat Tinker
```bash
php artisan tinker
```
Di dalam Tinker:
```php
\App\Models\User::create([
    'name' => 'Admin',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
]);
```
Ganti `email` dan `password` sesuai kebutuhan.

7. Menjalankan server
Buka dua terminal terpisah atau gunakan process manager (concurrently):

Terminal 1: Laravel backend
```bash
php artisan serve
# biasanya tersedia di http://127.0.0.1:8000
```

Terminal 2: Vite (frontend dev server)
```bash
npm run dev
# atau
# yarn dev
```

Akses aplikasi di browser: http://127.0.0.1:8000

Jika menggunakan Laravel Sail:
```bash
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate --seed
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

---

## Environment variables (contoh penting)

Tambahkan ke `.env` jika belum ada:
```
APP_NAME=Portfolio
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio_db
DB_USERNAME=root
DB_PASSWORD=

# Vite / Inertia related (jika diperlukan)
VITE_PUSHER_APP_KEY=
```
Tambahkan variabel lain sesuai fitur (mis. storage driver, mailer, analytics, dsb).

---

## Struktur Proyek (umum)
- app/ — backend (models, controllers, policies)
- database/ — migrations & seeders
- resources/js/ — frontend React + Inertia (komponen, pages)
- resources/css/ — Tailwind / styling
- public/ — aset publik & built assets
- storage/ — uploaded files (linked ke public/storage)

(Ubah sesuai struktur aktual di repo.)

---

## Deployment

Rekomendasi langkah umum:
1. Build frontend: `npm run build`
2. Jalankan migrasi di server: `php artisan migrate --force`
3. Set up storage symlink: `php artisan storage:link`
4. Pastikan environment production (`APP_ENV=production`) dan cache configs:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
5. Gunakan service manager (Supervisor) untuk queue & scheduler, serta SSL via reverse proxy (Nginx) dan sertifikat Let's Encrypt.

Hosting/Platform yang cocok:
- VPS (Deploy manual / Forge)
- PaaS: DigitalOcean App Platform, Render, or Railway
- Shared hosting jika mendukung Laravel (perlu penyesuaian)

---

## Kontribusi

1. Fork repository
2. Buat branch fitur: `git checkout -b feat/nama-fitur`
3. Commit perubahan: `git commit -m "Menambahkan fitur X"`
4. Push branch: `git push origin feat/nama-fitur`
5. Buka Pull Request

Sertakan testing/instruksi jika menambah fitur besar. Gunakan code style konsisten dan pre-commit hooks bila tersedia.

---

## License

Default: MIT License — sesuaikan jika menggunakan lisensi lain.

---
