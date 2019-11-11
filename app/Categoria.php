<?php

namespace App;

use App\Proveedor;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function padre()
    { //$libro->categoria->nombre
        return $this->belongsTo(self::class, 'categoria_id');
    }

    public function children()
    {
        return $this->hasMany(Categoria::class, 'categoria_id');
    }

    public function proveedores()
    {
        return $this->belongsToMany(Proveedor::class)->withPivot('descuento'); // Muchos a muchos
    }
}
