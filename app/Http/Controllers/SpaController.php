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

    public function comercial()
    {
        return view('comercial.home');
    }

    public function caja()
    {
        return view('caja.home');
    }
}
