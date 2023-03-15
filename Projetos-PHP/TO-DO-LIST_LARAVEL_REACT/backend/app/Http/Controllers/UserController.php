<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreUser;
use App\Services\ResponseService;
use App\Transformers\User\UserResource;
use Illuminate\Foundation\Auth\User;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   
   private $user;

    
   public function __construct(User $user){
      $this->user = $user;
   }

      /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */




    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUser $request)
    {
        try{
            $user = $this
            ->user
            // ->create($request->all());
            ->create([
               'name' => $request->get('name'),
               'email' => $request->get('email'),
               'password' => Hash::make($request->get('password')),
            ]);
         }catch(\Throwable|\Exception $e){
            // $e
            return ResponseService::exception('user.store',null,$e);
         }
         return new UserResource($user,array('type' => 'store','route' => 'user.store'));
        }
}
