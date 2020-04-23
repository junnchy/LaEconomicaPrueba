<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendedores', function (Blueprint $table) 
        {
            $table->bigIncrements('id');
            $table->integer('nro_puesto')->unique();
            $table->unsignedBigInteger('user_id')->nullable()->unique();
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('contador_presupuestos');
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
        Schema::table('vendedores', function (Blueprint $table) 
        {            
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
        });
        Schema::enableForeignKeyConstraints();        
        Schema::dropIfExists('vendedores');

    }
}
