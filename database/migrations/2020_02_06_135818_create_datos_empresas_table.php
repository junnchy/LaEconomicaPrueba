<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatosEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos_empresas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('razon_social');
            $table->string('cuit');
            $table->string('nroIgBrutos');
            $table->date('inicio_actividades');
            $table->unsignedBigInteger('condicion_iva_id')->nullable();
            $table->foreign('condicion_iva_id')->references('id')->on('condicion_iva');
            $table->string('nombre');
            $table->string('email');
            $table->string('telefono');
            $table->string('direccion');
            $table->string('web');
            $table->unsignedBigInteger('localidad_id')->nullable();
            $table->foreign('localidad_id')->references('id')->on('localidades');
            $table->string('logo');
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
        Schema::dropIfExists('datos_empresas');
    }
}
