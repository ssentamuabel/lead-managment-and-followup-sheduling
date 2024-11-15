<?php

namespace App\Http\Controllers;

use App\Models\Lead;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class LeadController extends Controller
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
            $validateLead = Validator::make($request->all(), 
            [
                'name' => 'required',           // Name is required
                'email' => 'required|email', // Email is required
                'phone' => 'required' // Phone is required
            ]);

            // If validation fails, return an error message
            if($validateLead->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateLead->errors()
                ], 401);
            }

            // Create the lead in the database
            $lead = Lead::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone
               
            ]);

            // Return a success response with the created lead
            return response()->json([
                'status' => true,
                'message' => 'Lead Created Successfully',
                'lead'=>$lead
                
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
     * @return \Illuminate\Http\Response
     */
    public function index(){
        try{

            $leads = Lead::all();

            return response()->json([

                'status' => true,
                'leads' => $leads
            ]);

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
     * @return \Illuminate\Http\Response
     */
    public function followUps(Request $request, $id)
{
    try {
        // Fetch the lead by ID
        $lead = Lead::findOrFail($id);

        // Transform the follow-ups to include user_name instead of user details
        $followUps = $lead->followUps->map(function ($followUp) {
            return [
                'id' => $followUp->id,
                'lead_id' => $followUp->lead_id,
                'scheduled_at' => $followUp->scheduled_at,
                'status' => $followUp->status,
                'created_at' => $followUp->created_at,
                'updated_at' => $followUp->updated_at,
                'user_name' => $followUp->user->name ?? 'Unknown User',
            ];
        });

        // Add follow-ups directly to the lead object
        $lead->follow_ups = $followUps;

        return response()->json([
            'status' => true,
            'lead' => $lead
        ]);
    } catch (\Throwable $th) {
        return response()->json([
            'status' => false,
            'message' => $th->getMessage(),
        ], 500);
    }
}

}
