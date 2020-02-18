<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEstadosToPresupuestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('presupuestos', function (Blueprint $table) {
            $table->unsignedBigInteger('estadoPresupuesto_id')->nullable();
            $table->foreign('estadoPresupuesto_id')->references('id')->on('estado_presupuestos');
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
                Schema::table('presupuestos', function (Blueprint $table) {
                    $table->dropForeign(['estadoPresupuesto_id']);
                    $table->dropColumn('estadoPresupuesto_id');
                });
            Schema::enableForeignKeyConstraints();
    }
}
