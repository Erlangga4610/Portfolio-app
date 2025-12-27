<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Certificates/Index', [
            'certificates' => Certificate::orderBy('date_issued', 'desc')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Certificates/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'required|string|max:255', // Contoh: Google, Dicoding
            'date_issued' => 'required|date',
            'credential_url' => 'required|url', // Link verifikasi
        ]);

        Certificate::create($request->all());

        return redirect()->route('admin.certificates.index');
    }

    public function edit(Certificate $certificate)
    {
        return Inertia::render('Admin/Certificates/Edit', [
            'certificate' => $certificate
        ]);
    }

    public function update(Request $request, Certificate $certificate)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'date_issued' => 'required|date',
            'credential_url' => 'required|url',
        ]);

        $certificate->update($request->all());

        return redirect()->route('admin.certificates.index');
    }

    public function destroy(Certificate $certificate)
    {
        $certificate->delete();
        return redirect()->route('admin.certificates.index');
    }
}