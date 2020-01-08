<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProveedorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->unsignedBigInteger('cuit')->unique();
            $table->string('telefono');
            $table->string('direccion')->nullable();
            // Agregar Localidad, condicion de iva, direccion, nro de ing brutos
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
        Schema::table('proveedors', function (Blueprint $table) {
            $table->dropForeign(['condicion_iva_id']);
            $table->dropColumn('condicion_iva_id'); 
            $table->dropForeign(['localidad_id']);
            $table->dropColumn('localidad_id');
        });
        Schema::dropIfExists('proveedors');
    }
}

