<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChequesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheques', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('nro_cheque');
            $table->float('importe');
            $table->date('fecha_emision');
            $table->string('cuit_emisor');
            $table->date('fecha_pago');
            $table->boolean('propio');
            $table->unsignedBigInteger('cartera_id')->nullable();
            $table->foreign('cartera_id')->references('id')->on('cartera_cheques');
            $table->unsignedBigInteger('librador_id')->nullable();
            $table->foreign('librador_id')->references('id')->on('clientes');
            $table->unsignedBigInteger('destinatario_id')->nullable();
            $table->foreign('destinatario_id')->references('id')->on('proveedores');
            $table->unsignedBigInteger('banco_id')->nullable();
            $table->foreign('banco_id')->references('id')->on('bancos');
            $table->unsignedBigInteger('pago_id')->nullable();
            $table->foreign('pago_id')->references('id')->on('pagos');
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
        Schema::dropIfExists('cheques');
    }
}
