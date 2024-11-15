<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\follow_up;

class Lead extends Model
{
    use HasFactory;
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone'
       
    ];


    /**
     * Get all the follow-ups for the lead.
     */
    public function followUps()
    {
        return $this->hasMany(follow_up::class);
    }
}
