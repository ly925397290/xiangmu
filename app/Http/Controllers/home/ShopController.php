<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\model\good;
use App\model\user;
use App\model\Shop;
use App\model\user_good;
use DB;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
   
        return view('home.shop.creat');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 1.接收请求数据
        $input = $request->except('_token');
        $id = $input['uid'] = session('user')['uid'];//1改成session用户id
        $res = Shop::create($input);
        if($res){
            return redirect("/home/shop/shenhe/$id");
        }else{
            return back();
        }
        
    }

    /**
     * 商铺审核进度
     */
    public function shenhe($id)
    {
        $shop_status = Shop::where('uid',session('user')['uid'])->first(); //1改成session用户id
        return view('home.shop.deng',compact('shop_status'));
    }

}
