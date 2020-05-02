<?php

namespace App;
use App\Cheque;

use Illuminate\Database\Eloquent\Model;

class CarteraCheque extends Model
{
    public function cheques(){

        return $this->hasMany(Cheque::class, 'cartera_id')->orderBy('created_at', 'desc');
    }
}
