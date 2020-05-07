<?php

namespace App\Exports;

use App\Cliente;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;

class ClientesFechaExport implements FromQuery
{
    
    private $fecha;

    public function __construct($fecha)
    {
        $this->fecha = $fecha;
    }

    use Exportable;
    
    public function query()
    {
        return Cliente::query()->whereDate('created_at', $this->fecha);
    }
}
