<?php

namespace App;

use App\Proveedor;
use App\Categoria;

use Illuminate\Database\Eloquent\Model;

class Descuento extends Model
{
    protected $table = 'categoria_proveedor';

    public function categoria(){
        return $this->hasOne(Categoria::class, 'id');
    }

    public function proveedor(){
        return $this->hasOne(Proveedor::class, 'id');
    }
}
