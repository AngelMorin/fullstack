<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\SurnameizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use SurnameizesRequests, DispatchesJobs, ValidatesRequests;
}
