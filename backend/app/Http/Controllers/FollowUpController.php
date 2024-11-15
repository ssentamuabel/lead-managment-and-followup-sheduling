<?php

namespace App\Http\Controllers;

use App\Models\follow_up;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FollowUpController extends Controller
{
    /**
     * Store a newly created lead in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{

            // Validate incoming requests
            $validate = Validator::make($request->all(), 
            [
                'lead_id' => 'required',           // lead id is required
                'user_id' => 'required', // user id is required
                'at' => 'required', // The time and date is required
                'status' =>'required'
            ]);

            // If validation fails, return an error message
            if($validate->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateLead->errors()
                ], 401);
            }

            // Create the followup in the database
            $followUp = follow_up::create([
                'lead_id' => $request->lead_id,
                'user_id' => $request->user_id,
                'status' => $request->status,
                'scheduled_at' => $request->at
               
            ]);

            // Return a success response with the created followUp
            return response()->json([
                'status' => true,
                'message' => 'FollowUp Created Successfully',
                'followUp'=>$followUp
                
            ], 200);


        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }


     /**
     * Store a newly created lead in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param   $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        try{

           // Validate incoming requests
           $validate = Validator::make($request->all(), 
           [
               'lead_id' => 'required',           // lead id is required
               'user_id' => 'required', // user id is required
               'at' => 'required', // The time and date is required
               'status' =>'required'
           ]);

           // If validation fails, return an error message
           if($validate->fails()){
               return response()->json([
                   'status' => false,
                   'message' => 'validation error',
                   'errors' => $validate->errors()
               ], 401);
           }

            $followUp = follow_up::findOrFail($id);

            // Fill the model with the request data and save
            $followUp->fill($request->all())->save();

            even(new Changestatus($followUp));


            // Return a success response 
            return response()->json([
                'status' => true,
                'message' => 'Update was successful',

            ], 200);
            

        }catch(\Throwable $th){
            return response()->json([
                'status'=> false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
