<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Store a newly created role in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{

            // Validate incoming requests
            $validateUser = Validator::make($request->all(), 
            [
                'name' => 'required',           // Name is required
                
            ]);

            // If validation fails, return an error message
            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            // Create a role in the database
            $role = Role::create([
                'name' => $request->name                
            ]);

            // Return a success response with the created role
            return response()->json([
                'status' => true,
                'message' => 'Role Created Successfully',
                'role'=> $role
                
            ], 200);


        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
