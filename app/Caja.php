<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pago;

class Caja extends Model
{
    public function pagos()
    {
        return $this->hasMany(Pago::class);
    }
}
