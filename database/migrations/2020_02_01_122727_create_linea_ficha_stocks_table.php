<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLineaFichaStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linea_ficha_stocks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('cantidad');
            $table->string('tipo');
            $table->string('usuario')->nullable();
            $table->unsignedBigInteger('ficha_id')->nullable();
            $table->foreign('ficha_id')->references('id')->on('ficha_de_stocks');
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
        Schema::dropIfExists('linea_ficha_stocks');
    }
}
