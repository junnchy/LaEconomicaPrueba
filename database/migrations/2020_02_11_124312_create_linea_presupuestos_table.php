<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLineaPresupuestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linea_presupuestos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('precio');
            $table->integer('cantidad');
            $table->float('total_linea');
            $table->float('descuento')->nullable();
            $table->unsignedBigInteger('producto_id')->nullable();
            $table->foreign('producto_id')->references('id')->on('productos');
            $table->unsignedBigInteger('presupuesto_id')->nullable();
            $table->foreign('presupuesto_id')->references('id')->on('presupuestos');
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
        Schema::disableForeignKeyConstraints();
        Schema::table('linea_presupuestos', function (Blueprint $table) {
            $table->dropForeign(['presupuesto_id']);
            $table->dropColumn('presupuesto_id');
            $table->dropForeign(['vendedor_id']);
            $table->dropColumn('vendedor_id');
        });
        Schema::enableForeignKeyConstraints(); 

        Schema::dropIfExists('linea_presupuestos');
    }
}
