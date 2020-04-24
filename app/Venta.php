<?php

namespace App;
use App\FormaDePago;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    public function fdp()
    {
        return $this->belongsTo(FormaDePago::class, 'formaDePago_id', 'id');
    }
}
