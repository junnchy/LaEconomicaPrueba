<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCuponTarjetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cupon_tarjetas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('nro_cupon');
            $table->float('importe');
            $table->integer('cuotas');
            $table->unsignedBigInteger('cartera_id')->nullable();
            $table->foreign('cartera_id')->references('id')->on('cartera_cupones');
            $table->unsignedBigInteger('tarjeta_id')->nullable();
            $table->foreign('tarjeta_id')->references('id')->on('tarjetas');
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
        Schema::dropIfExists('cupon_tarjetas');
    }
}
