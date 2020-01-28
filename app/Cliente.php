<?php

namespace App;

use App\CategoriaClientes;
use App\CondicionIva;
use App\Localidad;
use App\Provincia;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    public function categoria()
    {
        return $this->belongsTo(CategoriaClientes::class, 'cat_clientes_id');
    }

    public function condicion_iva()
    {
        return $this->belongsTo(CondicionIva::class);
    }

    public function localidad()
    {
        return $this->belongsTo(Localidad::class);
    }

    public function provincia()
    {
        return $this->belongsTo(Provincia::class);
    }
}
