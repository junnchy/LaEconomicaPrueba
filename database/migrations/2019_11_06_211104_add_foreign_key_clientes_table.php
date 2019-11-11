<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clientes', function (Blueprint $table)
        {
            $table->unsignedBigInteger('cat_clientes_id')->nullable();
            $table->foreign('cat_clientes_id')->references('id')->on('categoria_clientes');
            $table->unsignedBigInteger('condicion_iva_id')->nullable();
            $table->foreign('condicion_iva_id')->references('id')->on('condicion_iva');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clientes', function (Blueprint $table) 
        {
            $table->dropColumn('cat_clientes_id');
            $table->dropColumn('condicion_iva_id');
    
        });
    }
}
