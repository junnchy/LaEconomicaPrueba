<?php

namespace App;

use App\Cliente;
use App\Proveedor;
use App\Provincia;

use Illuminate\Database\Eloquent\Model;

class Localidad extends Model

{
    protected $table = 'localidades';
    
    public function clientes()
    {
        return $this->hasMany(Cliente::class);
    }

    public function proveedores()
    {
        return $this->hasMany(Proveedor::class);
    }

    public function provincia()
    {
        return $this->belongsTo(Provincia::class, 'provincia_id');
    }
}
