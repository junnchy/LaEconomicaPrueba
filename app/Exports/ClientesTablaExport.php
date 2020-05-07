<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;
use App\Cliente;

class ClientesTablaExport implements FromView
{
    use Exportable;


   
    public function view(): View 
    {
        return view('exports.clientes', [
            'clientes' => Cliente::with('condicion_iva')->get()
        ]);
    }
   
}
