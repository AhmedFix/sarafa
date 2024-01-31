<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\Datatables;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
   
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $currencies = Currency::get();

        return view('front.index',compact('currencies'));
    }
}
