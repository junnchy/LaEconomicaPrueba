<?php

namespace App;

use App\Desposito;
use App\Producto;
use App\LineaFichaStock;

use Illuminate\Database\Eloquent\Model;

class FichaDeStock extends Model
{
    public function deposito(){
        return $this->belongsTo(Desposito::class); // Muchos a muchos
    }
    
    public function producto(){
        return $this->belongsTo(Producto::class); // Muchos a muchos
    }
    
    public function lineas()
    {
        return $this->hasMany(LineaFichaStock::class);
    }
}
