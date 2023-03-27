<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('jogos',function(Blueprint $table)
        {

            $table->id();
            $table->string('nome',55);
            $table->string('categoria',55);
            $table->year('ano_criacao');
            $table->double('valor',8,2);
            $table->timestamps();
        });
         
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
