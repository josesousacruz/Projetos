<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Route::post('register',[UserController::class, 'store'])->name('users.store');
Route::post('register', 'App\Http\Controllers\UserController@store')->name('user.store');
// Route::post('register', 'UserController@store')->name('user.store');
