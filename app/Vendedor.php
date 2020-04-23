<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendedor extends Model
{
    protected $table = 'vendedores';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
