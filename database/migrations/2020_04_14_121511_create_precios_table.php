<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('precios', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('producto_id');
            $table->foreign('producto_id')->references('id')->on('productos');
            $table->float('precioBase');
            $table->float('precioCosto');
            $table->float('descuentoProducto_1');
            $table->float('descuentoProducto_2');
            $table->float('descuentoProducto_3');
            $table->float('descuentoProducto_4');
            $table->float('descuentoProducto_5');
            $table->float('rentabilidad');
            $table->float('precioVenta');
            $table->float('precioVentaSinIva');
            $table->float('iva');
            $table->float('flete');
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
        Schema::dropIfExists('precios');
    }
}
