<?php

use Illuminate\Database\Seeder;
use App\Producto;
use App\Cliente;

class ProductosClientesFillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productos = Producto::all();
        $clientes = Cliente::all();

        foreach ($productos as $key => $producto) {
            $producto->fichaStock_id = $producto->id;
            $producto->precio_id = $producto->id;
            $producto->save();
        }
        foreach ($clientes as $key => $cliente) {
            $cliente->cuenta_id = $cliente->id;
            $cliente->save();
        }

    }
}
