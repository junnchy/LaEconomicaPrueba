<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use App\CategoriaPermisos;
use Illuminate\Support\Arr;

class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function localidad()
    {
        return $this->belongsTo(Localidad::class, 'localidad_id');
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function getAllPermissionsAttribute() 
    {
        $permisos = Auth::user()->getAllPermissions()->pluck('name')->toArray();
        return $permisos;
    }

    public function jsPermissions()
    {
        return json_encode([
                'roles' => Auth::user()->getRoleNames()->toArray(),
                'permissions' => User::getPermissions(Auth::user())
            ]);
    }

    public static function getPermissions($user)
    {
        $roles = $user->getRoleNames()->toArray();
        $arr_per = [];
        foreach ($roles as $r)
        {
            $rol = Role::where("name",$r)->first();
            $categorias = CategoriaPermisos::all()->pluck('id')->toArray();
            foreach ($categorias as $cat)
            {
                $c = CategoriaPermisos::find($cat);
                if ($c->hasRole($rol))
                {
                    $arr_per[] = $c->getDirectPermissions()->pluck('name')->toArray();
                }
            }            
        }
        $arr_all_per[] = $user->getAllPermissions()->pluck('name')->toArray();
        $arr_all_per[] = Arr::collapse($arr_per);
        $coll = collect(Arr::collapse($arr_all_per));
        $unique_data = collect($coll->unique()->values()->all());
        return $unique_data;
    }
 
}