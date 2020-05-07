<?php

namespace App\Exports;

use App\Cliente;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;

class ClientesExport implements FromCollection, Responsable
{

    use Exportable;

    private $fileName = 'clientes.xlsx';

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Cliente::all();
    }
}
