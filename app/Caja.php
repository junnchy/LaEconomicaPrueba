<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pago;
use App\CarteraCupone;
use Carbon\Carbon;

class Caja extends Model
{
    public function pagos()
    {       
        return $this->hasMany(Pago::class)->orderBy('created_at', 'desc');
    }

    public function carteraCupones()
    {
        return $this->hasOne(CarteraCupone::class);
    }

}
