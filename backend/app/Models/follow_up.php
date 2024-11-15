<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Lead;

class follow_up extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'lead_id',
        'user_id',
        'scheduled_at',
        'status'
       
    ];

    /**
     * Store a newly created user in the database.
     *
     * @return \App\Models\Lead;
     */
    public function lead()
    {
        return $this->belongsTo(Lead::class);
    }
    

     /**
     * Store a newly created user in the database.
     *
     * @return \App\Models\User;
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
