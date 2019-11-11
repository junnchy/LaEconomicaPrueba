<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Db;

class RubroProveedoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tabla = DB::table('rubro_proveedores');
        $tabla->truncate();
        $tabla->insert(['denominacion'=>'MATERIALES DE CONSTRUCCION']);
        $tabla->insert(['denominacion'=>'ABERTURAS']);
        $tabla->insert(['denominacion'=>'CERAMICOS']);
        $tabla->insert(['denominacion'=>'SANITARIOS']);
        $tabla->insert(['denominacion'=>'FERRETERIA']);
        $tabla->insert(['denominacion'=>'PINTURERIA']);
        $tabla->insert(['denominacion'=>'HERRAJES']);
        $tabla->insert(['denominacion'=>'MAQUINAS']);
        $tabla->insert(['denominacion'=>'ELECTRICIDAD']);
        $tabla->insert(['denominacion'=>'INSUMOS']);
        $tabla->insert(['denominacion'=>'GASTOS']);
        $tabla->insert(['denominacion'=>'INVERSION']);
    }
}
