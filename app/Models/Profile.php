<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'headline',
        'about',
        'public_email',
        'linkedin_url',
        'github_url',
        'avatar_url',
        'cv_url',
    ];
}
