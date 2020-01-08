<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('cuit')->unique();
            $table->string('telefono')->nullable();
            $table->string('celular')->nullable();
            $table->string('email')->nullable();
            $table->string('direccion')->nullable();
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
        Schema::table('clientes', function (Blueprint $table) {
            $table->dropForeign(['cat_clientes_id']);
            $table->dropColumn('cat_clientes_id');
            $table->dropForeign(['condicion_iva_id']);
            $table->dropColumn('condicion_iva_id');
            $table->dropForeign(['localidad_id']);
            $table->dropColumn('localidad_id');
        });
        Schema::dropIfExists('clientes');
    }
}
