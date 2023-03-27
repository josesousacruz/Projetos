<?php

use App\Http\Controllers\JogosController;
use FontLib\Table\Type\name;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/
Route::prefix('jogos')->group(function()
{

    Route::get('/',[JogosController::class,'index'])->name('jogos-index');

    Route::get('/create',[JogosController::class,'create'])->name('jogos-create');

    Route::post('/save',[JogosController::class,'store'])->name('jogos-store');

    Route::get('/{id}/edit',[JogosController::class,'edit'])->name('jogos-edit');

    Route::put('/{id}/update',[JogosController::class,'update'])->name('jogos-update');

    Route::delete('/{id}/delete',[JogosController::class,'destroy'])->name('jogos-destroy');
});
    

Route::fallback(function(){
    return 'error!';
});
