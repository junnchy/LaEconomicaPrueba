<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function proveedores()
    {
        return view('proveedores.home');
    }

    public function productos()
    {
        return view('productos.home');
    }

    public function clientes()
    {
        return view('clientes.home');
    }
}
