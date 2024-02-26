<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    public $fillable = [
        'name', 
        'surname', 
        'age', 
        'gender', 
        'created_at', 
        'updated_at'
    ];

    /**@var string*/
    protected $table = 'clients';
}
