<?php

namespace App;

use App\Categoria;
use App\Proveedor;
use App\FichaDeStock;
use App\Precio;
use App\LineaDeVenta;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    public function categoria(){
        return $this->belongsTo(Categoria::class); // Muchos a muchos
    }

    public function proveedor(){
        return $this->belongsTo(Proveedor::class); // Muchos a muchos
    }

    public function fichaStock()
    {
        return $this->hasOne(FichaDeStock::class);
    }

    public function precios()
    {
        return $this->hasMany(Precio::class)->orderBy('created_at', 'desc');
    }

    public function precio()
    {
        return $this->hasOne(Precio::class, 'id', 'precio_id');
    }

    public function cantidadVendida()
    {
        return $this->hasMany(LineaDeVenta::class);
    }
   
}
