<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Lol;
use Carbon\Carbon;

class LolController extends Controller
{
    public function lol(Request $request)
    {
        $lol=new Lol;
        $lol->name=$request->name;
        $lol->created_at=Carbon::now();
        $lol->updated_at=Carbon::now();
        $lol->save();

        return response()->json([
            'message'=>'lol',
            'lol'=>$lol,
            'status'=>'lol',
        ])
    }
}
