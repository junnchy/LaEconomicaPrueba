<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Traits\HasRoles;


class CategoriaPermisos extends Model
{
    use HasRoles;
    
    protected $table = 'categoria_permisos';

    protected $guard_name = 'web';

    public function permisos()
    {
        return $this->getDirectPermissions()->pluck('name')->toArray();
    }
}
