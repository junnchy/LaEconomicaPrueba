<?php

namespace App;

use App\Desposito;
use App\Producto;
use App\LineaFichaStock;

use Illuminate\Support\Facades\DB;

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
        return $this->hasMany(LineaFichaStock::class, 'ficha_id', 'id')->orderBy('created_at', 'desc');
    }

    public function calcularActual()
    {   
        /* No anda nada acaaa */
        $li = $this->hasMany(LineaFichaStock::class, 'ficha_id', 'id');
        
        return count($li);
    }

    /* public static function procesarStock($cantidad, $nombreVendedor){
        self::$cantidadActual = self::$cantidadActual - $cantidad;
        $nlfds = new LineaFichaStock();
        $nlfds->ficha_id = self::$id;
        $nlfds->cantidad = $cantidad;
        #Modificar el tipo por dinamico?
        $nlfds->tipo = "Venta";
        $nlfds->usuario = $nombreVendedor;
        $this->save();
        $nlfds->save();
    } */
}
