# Portfolio App 🚀

Sebuah aplikasi web portofolio pribadi yang modern dan dinamis. Dibangun untuk menampilkan proyek, keahlian, dan pengalaman kerja dengan performa tinggi dan antarmuka yang interaktif.

Proyek ini menggunakan **Laravel** sebagai backend API/Framework dan **React.js** sebagai frontend library.

## 🛠️ Tech Stack

**Backend:**
* [Laravel](https://laravel.com/) (Framework PHP)
* MySQL (Database)

**Frontend:**
* [React.js](https://reactjs.org/)
* [Vite](https://vitejs.dev/) (Build tool)
* [Tailwind CSS](https://tailwindcss.com/) (Styling)

## 📋 Prasyarat

Pastikan telah terinstal: `PHP >= 8.1`, `Composer`, `Node.js`, dan `MySQL`.

## ⚡ Quick Start (Instalasi Langsung)

Jalankan perintah berikut di terminal Anda untuk mengunduh dan menyiapkan proyek secara otomatis:

```bash
# 1. Clone & Install Dependencies
git clone git@github.com:Erlangga4610/Portfolio-app.git
cd Portfolio-app
composer install
npm install

# 2. Setup Environment
cp .env.example .env
php artisan key:generate

# 3.php artisan migrate --seed

# 4. # Terminal 1
php artisan serve

# Terminal 2
npm run dev
