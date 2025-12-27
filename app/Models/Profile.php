<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
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
