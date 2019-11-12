<?php 

namespace App;

use App\Categoria;
use App\Producto;

use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    public function categorias(){
        return $this->belongsToMany(Categoria::class)->withPivot('descuento'); // Muchos a muchos
    }

    public function productos(){
        return $this->hasMany(Producto::class, 'proveedor_id');
    }
    
    
}


