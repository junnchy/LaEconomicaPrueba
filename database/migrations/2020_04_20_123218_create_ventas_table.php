<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('fecha_emision');
            $table->string('codigo');
            $table->float('total');
            $table->float('saldo');
            $table->float('subtotal');
            $table->float('iva');
            $table->text('detalles')->nullable();
            $table->unsignedBigInteger('ctac_id')->nullable();
            $table->foreign('ctac_id')->references('id')->on('cuenta_clientes');
            $table->unsignedBigInteger('vendedor_id')->nullable();
            $table->foreign('vendedor_id')->references('id')->on('vendedores');
            $table->unsignedBigInteger('formaDePago_id')->nullable();
            $table->foreign('formaDePago_id')->references('id')->on('forma_de_pagos');
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
        Schema::dropIfExists('ventas');
    }
}
