<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    protected $fillable = [
        'icon',
        'name',
        'price',
        'rate',
        'status'
    ];

    protected $appends = ['icon_path'];

    //attr
    public function getIconPathAttribute()
    {
        if ($this->icon) {
            return asset('uploads/currencies_icons/' . $this->icon);
        }

        return asset('uploads/currencies_icons/default.png');
        
    }// end of getIconPathAttribute


    //scope

    public function scopeWhenSearch($query, $search)
    {
        return $query->when($search, function ($q) use ($search) {

            return $q->where('name', 'like', '%' . $search . '%');

        });

    }// end of scopeWhenSearch

    //rel

    //fun

    public function hasIcon()
    {
        return $this->icon != null;

    }// end of hasIcon


}//end of model
