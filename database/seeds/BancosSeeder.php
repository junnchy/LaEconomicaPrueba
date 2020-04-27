<?php

use Illuminate\Database\Seeder;
use App\Banco;

class BancosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bancos')->delete();
        $json = File::get('database\seeds\Json\bancos.json');
        $data = json_decode($json);
        foreach ($data as $obj){
            Banco::create(array(
                "id" => $obj->id,
                "denominacion"=>Str::title($obj->denominacion)
            ));
        }
    }
}
