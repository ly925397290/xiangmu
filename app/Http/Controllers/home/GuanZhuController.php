<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\Order;
use App\model\User;
use App\model\good;
use App\model\user_good;
use App\model\message;
use DB;
class GuanZhuController extends Controller{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function doadd(Request $request)
    {
        $input = $request->except('_token');

        $res = shoucang::create($input);

        return $res;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       

    }

    public function edit(Request $request){
       
    }
}
