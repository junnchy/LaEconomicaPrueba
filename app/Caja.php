<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pago;
use App\CarteraCupone;

class Caja extends Model
{
    public function pagos()
    {
        return $this->hasMany(Pago::class);
    }

    public function carteraCupones()
    {
        return $this->hasOne(CarteraCupone::class);
    }

}
