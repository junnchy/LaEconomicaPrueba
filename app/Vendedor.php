<?php

namespace App;
use App\presupuesto;
use Carbon\Carbon;

use Illuminate\Database\Eloquent\Model;

class Vendedor extends Model
{
    protected $table = 'vendedores';

    public function user()
    {
        return $this->belongsToOne(User::class);
    }

    public function presupuestos()
    {
        $today = new Carbon();
        $today = Carbon::now();
        $today->subMonth();
        return $this->hasMany(Presupuesto::class, 'vendedor_id', 'id')->where('created_at', '>', $today);
    }
    
}
