<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendedor extends Model
{
    protected $table = 'vendedores';

    protected $primaryKey = 'nro_puesto';

    public function getRouteKeyName()
    {
        return 'nro_puesto';
    }

    public function user()
    {
        return $this->belongsToOne(User::class);
    }

    
}
