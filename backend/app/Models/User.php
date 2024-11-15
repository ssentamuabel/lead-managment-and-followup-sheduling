<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Role;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    const ADMIN = 1;
    const SALES_MANAGER = 2;
    const SALES_REPRESENTATIVE = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    /**
     * relationship mapping
    */

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

     /**
     * Generate a token with the user's role and additional attributes included.
     *
     * @return string
     */
    public function createTokenWithRole()
    {
        // Get the role attributes (e.g., permissions, leads, follow_ups, users)
        $role = $this->role->only(['name','permissions', 'leads', 'follow_ups', 'users']);
        
        // Create a token and add the role attributes as custom claims
        $token = $this->createToken('API Token', ['*']);

        // Attach the role attributes as custom claims in the token
        $token->accessToken->role = $role;

        return $token->plainTextToken;
    }

}
