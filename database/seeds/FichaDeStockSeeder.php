<?php

use Illuminate\Database\Seeder;

use App\FichaDeStock;

class FichaDeStockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ficha_de_stocks')->delete();
        $json = File::get('database\seeds\Json\fichasStock.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            FichaDeStock::create(array(
                "cantidadActual" => $obj->cantidadActual,
                "producto_id"=>$obj->producto_id,
                "deposito_id"=>$obj->deposito_id,
            ));
        }
    }
}
