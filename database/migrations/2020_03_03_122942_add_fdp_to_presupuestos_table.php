<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFdpToPresupuestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('presupuestos', function (Blueprint $table) {
            $table->unsignedBigInteger('formaDePago_id')->nullable();
            $table->foreign('formaDePago_id')->references('id')->on('forma_de_pagos');
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
                $table->dropForeign(['formaDePago_id']);
                $table->dropColumn('formaDePago_id');
            });
        Schema::enableForeignKeyConstraints();
    }
}
