<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Carbon\Carbon;

class ClientController extends Controller
{
    //Add a client
    public function store_client(Request $request)
    {
        try {
            //Based on Model
            $client = new Client;
            //Client fields
            $client->name = $request->name;
            $client->surname = $request->surname;
            $client->age = $request->age;
            $client->gender = $request->gender;
            $client->created_at = Carbon::now();
            $client->updated_at = Carbon::now();
            //Save the client
            $client->save();
            //Return the response
            return response()->json([
                'message' => 'Client created successfully',
                'client' => $client,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Client not created',
                'client' => $client,
                'status' => 'fail',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $client = \App\Models\Client::find($id);
        $client->name = $request->name;
        $client->surname = $request->surname;
        $client->age = $request->age;
        $client->gender = $request->gender;
        $client->save();

        return response()->json([
            'client' => $client
        ]);
    }

    public function destroy($id)
    {
        $client = \App\Models\Client::find($id);
        $client->delete();

        return response()->json([
            'message' => 'Client deleted'
        ]);
    }
}
