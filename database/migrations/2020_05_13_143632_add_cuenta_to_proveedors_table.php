<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCuentaToProveedorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proveedors', function (Blueprint $table) {
            $table->unsignedBigInteger('cuenta_id')->nullable();
            $table->foreign('cuenta_id')->references('id')->on('cuenta_proveedors');
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
        Schema::table('proveedors', function (Blueprint $table) {
            $table->dropForeign(['cuenta_id']);
            $table->dropColumn('cuenta_id');
        });
        Schema::enableForeignKeyConstraints();
    }
}
