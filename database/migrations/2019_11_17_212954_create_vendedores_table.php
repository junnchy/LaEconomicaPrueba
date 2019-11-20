<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendedores', function (Blueprint $table) 
        {
            $table->bigIncrements('nro_puesto');
            $table->string('nombre');
            $table->string('dni');
            $table->string('cuil')->unique();
            $table->string('telefono')->nullable();
            $table->string('celular')->nullable();
            $table->string('email')->nullable();
            $table->string('direccion')->nullable();
            $table->unsignedBigInteger('localidad_id')->nullable();
            $table->foreign('localidad_id')->references('id')->on('localidades');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vendedores', function (Blueprint $table) 
        {
            
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
            $table->dropForeign(['localidad_id']);
            $table->dropColumn('localidad_id');
        });
        
        Schema::dropIfExists('vendedores');

    }
}
