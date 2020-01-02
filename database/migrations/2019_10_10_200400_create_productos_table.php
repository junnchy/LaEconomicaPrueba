<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('precioBase');
            $table->float('precioCosto');
            $table->string('nombre');
            $table->unsignedBigInteger('proveedor_id');
            $table->foreign('proveedor_id')->references('id')->on('proveedors');
            $table->unsignedBigInteger('categoria_id');
            $table->foreign('categoria_id')->references('id')->on('categorias');
            $table->float('descuentoProducto_1');
            $table->float('descuentoProducto_2');
            $table->float('descuentoProducto_3');
            $table->float('descuentoProducto_4');
            $table->float('descuentoProducto_5');
            $table->float('rentabilidad');
            $table->float('precioVenta');
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
        Schema::dropIfExists('productos');
    }
}
