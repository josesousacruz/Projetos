<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;

use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {

        $input = $request->validated();


        $credentials = [
            'email' => $input['email'],
            'password' => $input['password'],
        ];


        if (!$token = auth()->attempt($credentials)) {

            return response()->json(['error' => 'Unauthorized'], 401);
        }


        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            
        ]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out'], 200);
    }

    public function infouser()
    {
        return response()->json(auth()->user());
    }
     

}
