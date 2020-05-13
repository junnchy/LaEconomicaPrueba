<?php

use Illuminate\Database\Seeder;
use App\Producto;
use App\Cliente;
use App\Proveedor;

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
        $proveedores = Proveedor::all();

        foreach ($productos as $key => $producto) {
            $producto->fichaStock_id = $producto->id;
            $producto->precio_id = $producto->id;
            $producto->save();
        }
        foreach ($clientes as $key => $cliente) {
            $cliente->cuenta_id = $cliente->id;
            $cliente->save();
        }
        foreach ($proveedores as $key => $proveedor) {
            $proveedor->cuenta_id = $proveedor->id;
            $proveedor->save();
        }

    }
}
