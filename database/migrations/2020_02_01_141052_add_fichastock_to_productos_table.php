<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFichastockToProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('productos', function (Blueprint $table) {
            $table->unsignedBigInteger('fichaStock_id')->nullable();
            $table->foreign('fichaStock_id')->references('id')->on('ficha_de_stocks');
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
            Schema::table('productos', function (Blueprint $table) {
                $table->dropForeign(['fichaStock_id']);
                $table->dropColumn('fichaStock_id');
            });
        Schema::enableForeignKeyConstraints();
    }
}
