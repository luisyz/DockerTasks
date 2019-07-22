<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  public $timestamps = false;
  protected $fillable = ['title', 'description', 'status', 1];
}
