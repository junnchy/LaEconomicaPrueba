<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfereciaCajasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transferecia_cajas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->decimal('pesos');
            $table->decimal('dolares');
            $table->text('concepto');
            $table->integer('codigo')->nullable();
            $table->unsignedBigInteger('vendedor_id')->nullable();
            $table->foreign('vendedor_id')->references('id')->on('vendedores');
            $table->unsignedBigInteger('caja_emisora')->nullable();
            $table->foreign('caja_emisora')->references('id')->on('cajas');
            $table->unsignedBigInteger('caja_receptora')->nullable();
            $table->foreign('caja_receptora')->references('id')->on('cajas');
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
        Schema::dropIfExists('transferecia_cajas');
    }
}
