<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('/newuser', function (Request $request) {
    User::create([ 
        'name'=> $request->name,
        'phone'=> $request-> phone
    ]);
     return view('welcome');
});

Route::get('/userbyid/{idUser}', function ($idUser) {
  return User::findOrFail($idUser);

});

Route::get('/alluser', function (){
   return User::all();
});


Route::get('/edituser/{idUser}', function ($idUser) {
   $User = User::findOrFail($idUser);
    return view('/editUser',['user'=>$User]);
  });

  Route::put('/updateuser/{idUser}', function (Request $info, $idUser) {
    $User = User::findOrFail($idUser);
     
    $User->name = $info->name;
    $User->phone = $info->phone;

    $User->save();

    return view('welcome');
   });