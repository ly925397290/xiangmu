<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\user_details;
use App\model\user;
use App\model\good;
use App\model\user_good;
use DB;

class AddressController extends Controller
{
    /**
     * 地址管理
     */
    public function index()
    {
        return view('home/addr_add');
    }
    // public function index()
    // {

    //     return view('home/address');
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //1.接收数据
        $input = $request->except('_token');
        // 2.入库
        $res = user_details::create(['addr'=>$input['addr'],'user_id'=>session('user')['uid'],'people'=>$input['people'],'phone'=>$input['phone']]);
        if($res){
            $data = 1;
        }else{
            $data = 0;
        }
        return $data;
    }

}
