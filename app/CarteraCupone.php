<?php

namespace App;
use App\CuponTarjeta;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CarteraCupone extends Model
{
    public function cupones(){

        return $this->hasMany(CuponTarjeta::class, 'cartera_id')->orderBy('created_at', 'desc');
    }
}
