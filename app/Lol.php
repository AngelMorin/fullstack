<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lol extends Model
{
    public $fillable = [
        'name',
        'created_at',
        'update_at'
    ];

    /**@var string */

    protected $table = 'lol';
}
