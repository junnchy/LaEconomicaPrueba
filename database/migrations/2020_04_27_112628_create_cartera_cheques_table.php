<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarteraChequesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cartera_cheques', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('caja_id')->nullable();
            $table->foreign('caja_id')->references('id')->on('cajas');
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
        Schema::dropIfExists('cartera_cheques');
    }
}
